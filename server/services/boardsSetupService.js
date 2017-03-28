import Listener from '../classes/Listener';
import Emitter from '../classes/Emitter';
import Runner from '../classes/Runner';
import Action from '../classes/Action';
import actionsConfigs from '../../config/actionsConfigs';
import runnersConfigs from '../../config/runnersConfig';
import utils from '../services/utils';

let emitters = [];
let listeners = [];
let actions = [];
let runners = [];

export default {

  createListeners: function(board, config) {
      config.forEach(listenerConfig => {
        listeners.push(new Listener({ pin: listenerConfig.pin, board, actionName: listenerConfig.actionName }));
      });
  },

  createEmitters: function(board, config) {
    config.forEach(emitterConfig => {
      emitters.push(new Emitter({board, pin: emitterConfig.pin, name: emitterConfig.name}));
    });
  },

  createRunners: function() {
    runnersConfigs.forEach(config => {
      runners.push(new Runner(config)); // TODO: Complete here
    });
  },

  createActions: function() {
    actionsConfigs.forEach(config => {
      actions.push(new Action(config));
    });
  },

  registerPins: function() {
    listeners.forEach(listener => {
      listener.registerPins();
    });
  },

  setEmittersForActions: function() {
    actions.forEach(action => {
      action.setEmitters();
    });
  },

  setActionsForListeners: function() {
    listeners.forEach(listener => {
      listener.setAction();
    });
  },

  setActionsForRunners: function() {
    runners.forEach(runner => {
      runner.setAction();
    });
  },

  setRunnersForActions: function() {
    actions.forEach(action=> {
      action.setRunner();
    });
  },

  runOrStopRunners: function() {
    runners.forEach(runner => {
      runner.runOrStop();
    });
  },

  getListeners: function() {
    return listeners;
  },

  getRunner: function(name) {
    return utils.getFirstInstance(runners, 'name', name);
  },

  getEmitter: function(name) {
    return utils.getFirstInstance(emitters, 'name', name);
  },

  getAction: function(name) {
    return utils.getFirstInstance(actions, 'name', name);
  }

};
