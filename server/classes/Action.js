/* eslint-disable no-console */

import boardsSetupService from '../services/boardsSetupService';
import utils from '../services/utils';
import actionsService from '../services/actionsService';

export default class Action {
  constructor(config) {
    this.emittersTimeouts = config.emittersTimeouts;
    this.name = config.name;
    this.expectedListeners = config.expectedListeners;
    this.runnerName = config.runnerName;
    this.emitterConfigs = config.emitterConfigs;
    this.mp3Configs = config.mp3Configs;

    this.reset();

  }

  setMp3s() {
    if(this.mp3Configs) {
      this.mp3s = [];

      this.mp3Configs.forEach(config => {
        const currentMp3 = boardsSetupService.getMp3(config.name);

        this.mp3s.push(currentMp3);
      });
    }
  }

  setRunner() {
    this.runner = boardsSetupService.getRunner(this.runnerName);
  }

  setEmitters() {
    this.emitterconfigs = this.emitterConfigs.map(emitterConfig => {
      const emitterName = emitterConfig.name || emitterConfig;
      const config = emitterConfig.config;
      const emitter = boardsSetupService.getEmitter(emitterName);


      return {
        emitter,
        config
      };
    });
  }

  reset() {
    this.actionExecuted = false;
    this.currentListeners = [];
    this.emitterTimeoutPromises = [];
    this.mp3TimeoutPromises = [];
  }

  execute(options) {
    const listenerName = options.listenerName;
    const val = options.value;
    const skipCondition = options.skipCondition;

    if(!skipCondition) {
      this.updateCurrentListeners(val, listenerName);
    }

    if( skipCondition || this.checkCondition() ) {

      console.log('action executed, action: ', this.name);

      this.toggleRunnerState();
      this.playMp3s();

      this.actionExecuted = true;
      const emittersTimeouts = this.emittersTimeouts;
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

  playMp3s() {
    if (this.mp3s) {

      this.mp3Configs.forEach((mp3Config, i) => {
        const mp3 = this.mp3s[i];

        if (mp3Config.state) {

          setTimeout(function () {
            boardsSetupService.closeOpenedMp3s();

            mp3.open();
          }, mp3Config.state.timeout);
        }

        const tracks = mp3Config.tracks;
        const timeouts = mp3Config.timeouts;

        if (tracks) {
          for (let i = 0; i < tracks.length; i++) {
            const track = tracks[i];
            let timeout = 0;

            if (timeouts) {
              for (let j = 0; j <= i; j++) {
                timeout += timeouts[j];
              }
            }

            this.mp3TimeoutPromises.push(setTimeout(() => {
              mp3.play(track);
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
    if(this.actionExecuted) { return false; }
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

  stop() {
    this.emitterTimeoutPromises.forEach(timeoutPromise => {
      clearTimeout(timeoutPromise);
    });

    this.mp3TimeoutPromises.forEach(timeoutPromise => {
      clearTimeout(timeoutPromise);
      // this.mp3.stop();
    });

    this.toggleRunnerState();
  }

  toggleRunnerState() {
    if(this.runner) {
      this.runner.toggleState();
    }
  }
}
