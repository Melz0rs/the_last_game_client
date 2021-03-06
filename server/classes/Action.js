/* eslint-disable no-console */

import boardsSetupService from '../services/boardsSetupService';
import utils from '../services/utils';
import actionsService from '../services/actionsService';

export default class Action {
  constructor(config) {
    this.emittersTimeouts = config.emittersTimeouts;
    this.name = config.name;
    this.expectedListeners = config.expectedListeners;
    this.runnerConfig = config.runnerConfig;
    this.emitterConfigs = config.emitterConfigs;
    this.mp3Configs = config.mp3Configs;
    this.actionDependencies = config.actionDependencies;

    this.reset();
  }

  setMp3s() {
    if (this.mp3Configs) {
      const gameMode = boardsSetupService.getGameMode();
      const mp3Configs = this.mp3Configs[gameMode] || this.mp3Configs['scary'] || this.mp3Configs;
      this.mp3s = [];

      mp3Configs.forEach(config => {
        const currentMp3 = boardsSetupService.getMp3(config.name);

        this.mp3s.push(currentMp3);
      });
    }
  }

  setRunner() {
    if(this.runnerConfig) {
      this.runner = boardsSetupService.getRunner(this.runnerConfig.name);
    }
  }

  setEmitters() {
    const gameMode = boardsSetupService.getGameMode();
    let emitterConfigs = this.emitterConfigs[gameMode] || this.emitterConfigs['scary'] || this.emitterConfigs;

    this.emitterconfigs = emitterConfigs.map(emitterConfig => {
      const emitterName = emitterConfig.name || emitterConfig;
      const config = emitterConfig.config;
      const emitter = boardsSetupService.getEmitter(emitterName);


      return {
        emitter,
        config
      };
    });
  }

  setActionDependencies() {
    if(this.actionDependencies) {
      this.actionDependencies = this.actionDependencies.map(actionName => {
        const action = boardsSetupService.getAction(actionName);

        return action;
      });
    }
  }

  reset() {
    this.stop();
    this.actionExecuted = false;
    this.currentListeners = [];
    this.emitterTimeoutPromises = [];
    this.mp3TimeoutPromises = [];
  }

  execute(options) {
    const listenerName = options.listenerName;
    const val = options.value;
    const skipCondition = options.skipCondition;
    const systemLocked = boardsSetupService.isSystemLocked();

    if(!skipCondition) {
      this.updateCurrentListeners(val, listenerName);
    }

    if( skipCondition || ( !systemLocked && this.checkCondition()) ) {

      const gameMode = boardsSetupService.getGameMode();

      console.log('action executed, action: ', this.name);

      this.toggleRunnerState();
      this.playMp3s();

      this.actionExecuted = true;
      const emittersTimeouts = this.emittersTimeouts[gameMode] || this.emittersTimeouts['scary'] || this.emittersTimeouts;
      const emitterConfigs = this.emitterconfigs;

      for (let i = 0; i < emitterConfigs.length; i++) {
        const emitterConfig = emitterConfigs[i];
        const emitter = emitterConfig.emitter;
        const config = emitterConfig.config;

        let timeout = 0;

        if (emittersTimeouts) {
          for (let j = 0; j <= i; j++) {
            timeout += emittersTimeouts[j];
          }
        }

        this.emitterTimeoutPromises.push(setTimeout(() => {
          emitter.emit(config);
        }, timeout));
      }
    }
  }

  playMp3s(gameMode) {
    if (this.mp3s) {

      const gameMode = boardsSetupService.getGameMode();
      const mp3Configs = this.mp3Configs[gameMode] || this.mp3Configs['scary'] || this.mp3Configs;

      mp3Configs.forEach((mp3Config, i) => {
        const mp3 = this.mp3s[i];

        const tracks = mp3Config.tracks;
        const timeouts = mp3Config.timeouts;
        const volumes = mp3Config.volumes;

        if (mp3Config.state) {
          setTimeout(function () {
            boardsSetupService.closeOpenedMp3s(mp3.name);

            mp3.open();
          }, mp3Config.state.timeout);
        }

        if (tracks) {
          for (let i = 0; i < tracks.length; i++) {
            const track = tracks[i];
            const volume = volumes ? volumes[i] || 10 : 10;
            let timeout = 0;

            if (timeouts) {
              for (let j = 0; j <= i; j++) {
                timeout += timeouts[j];
              }
            }

            this.mp3TimeoutPromises.push(setTimeout(() => {
              mp3.setVolume(volume);

              if(track !== '-') {
                mp3.play(track);
              }
            }, timeout));
          }
        }
      });
    }
  }

  updateCurrentListeners(val, listenerName) {
    let currentListeners = this.currentListeners;
    let currentListener = actionsService.findCurrentListener(currentListeners, listenerName);
    if(currentListener) {
      currentListener.listenerValues.push(val);
    } else {
      currentListeners.push({
        listenerName,
        listenerValues: [val]
      });
    }
  }

  checkCondition() {
    if(this.actionExecuted || !this.checkActionDependencies()) { return false; }

    let condition = true;

    const expectedListeners = this.expectedListeners;
    const currentListeners = this.currentListeners;

    expectedListeners.forEach(expectedListener => { // TODO: Change to Array.reduce
      if (condition) {
        const listenerName = expectedListener.listenerName;
        const expectedListenerValues = expectedListener.listenerValues;
        const expectedListenerNumberOfValues = expectedListenerValues.length;
        const currentListener = actionsService.findCurrentListener(currentListeners, listenerName);
        if(currentListener) {
          let currentListenerValues = currentListener.listenerValues;

          currentListenerValues = currentListenerValues.slice(currentListenerValues.length - expectedListenerNumberOfValues);

          condition = utils.arraysEqual(currentListenerValues, expectedListenerValues);
        } else {
          condition = false;
        }
      }
    });

    return condition;
  }

  checkActionDependencies() {
    let allActionsExecuted = true;

    if(this.actionDependencies && this.actionDependencies.length > 0) {

      this.actionDependencies.forEach(action => {
        if(!action.actionExecuted) {
          allActionsExecuted = false;
        }
      });

    }

    return allActionsExecuted;
  }

  stop() {
    if(this.emitterTimeoutPromises) {
      this.emitterTimeoutPromises.forEach(timeoutPromise => {
        clearTimeout(timeoutPromise);
      });
    }

    if(this.mp3TimeoutPromises) {
      this.mp3TimeoutPromises.forEach(timeoutPromise => {
        clearTimeout(timeoutPromise);
      });
    }

    this.resetRunner();
  }

  resetRunner() {
    if(this.runner) {
      this.runner.reset();
    }
  }

  toggleRunnerState() {
    if(this.runner) {
      setTimeout(() => {
        this.runner.toggleState();
      }, this.runnerConfig.timeout);
    }
  }
}
