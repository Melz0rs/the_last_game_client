/* eslint-disable no-console */

import boardsSetupService from '../services/boardsSetupService';
import utils from '../services/utils';
import actionsService from '../services/actionsService';

export default class Action {
  constructor(config) {
    this.timeouts = config.timeouts;
    this.name = config.name;
    this.expectedListeners = config.expectedListeners;
    this.runnerName = config.runnerName;
    this.emitterNames = config.emitterNames;
    this.reset();

  }

  setRunner() {
    this.runner = boardsSetupService.getRunner(this.runnerName);
  }

  setEmitters() {
    this.emitters = this.emitterNames.map(name => {
      return boardsSetupService.getEmitter(name);
    });
  }

  reset() {
    this.actionExecuted = false;
    this.currentListeners = [];
    this.timeoutPromises = [];
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

      this.actionExecuted = true;
      const timeouts = this.timeouts;
      const emitters = this.emitters;

      for (let i = 0; i < emitters.length; i++) {
        let emitter = emitters[i];
        let timeout = 0;

        if (timeouts) {
          for (let j = 0; j <= i; j++) {
            timeout += timeouts[j];
          }
        }

        this.timeoutPromises.push(setTimeout(() => {
          emitter.toggle();
        }, timeout));
      }
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
        listenerValue: [val]
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
        let currentListenerValues = currentListener.listenerValues;

        currentListenerValues = currentListenerValues.slice(currentListenerValues.length - expectedListenerNumberOfValues - 1);

        condition = utils.arraysEqual(currentListenerValues, expectedListenerValues);
      }
    });

    return condition;
  }

  stop() {
    this.timeoutPromises.forEach(timeoutPromise => {
      clearTimeout(timeoutPromise);
    });

    if(this.runner) {
      this.runner.toggleState();
    }
  }

  toggleRunnerState() {
    if(this.runner) {
      this.runner.toggleState();
    }
  }
}
