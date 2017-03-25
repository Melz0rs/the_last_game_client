import Listener from '../classes/Listener';
import Emitter from '../classes/Emitter';
import Action from '../classes/Action';
import actionsConfigs from '../config/actionsConfigs';

let emitters = [];
let listeners = [];
let actions = [];

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

  getEmitter: function(name) {
    return emitters.filter(emitter=> {
      return emitter.name === name;
    })[0];
  },

  getAction: function(name) {
    return actions.filter(action=> {
      return action.name === name;
    })[0];
  },

  registerPins: function() {
    listeners.forEach(listener => {
      listener.registerPins();
    });
  },

  createActions: function() {
    actionsConfigs.forEach(config => {
      actions.push(new Action(config));
    });
  },

  getListeners: function() {
    return listeners;
  }

};
