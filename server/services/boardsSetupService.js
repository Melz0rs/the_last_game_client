import Listener from '../classes/Listener';
import Runner from '../classes/Runner';
import Servo from '../classes/Servo';
import Relay from '../classes/Relay';
import Action from '../classes/Action';
import actionsConfigs from '../../config/actionsConfigs';
import runnersConfigs from '../../config/runnersConfig';
import utils from '../services/utils';
import Mp3 from '../classes/Mp3';
import mp3Configs from '../../config/mp3sConfigs';
import emitterTypes from '../../constants/emitterTypes';


let emitters = [];
let listeners = [];
let actions = [];
let runners = [];
let mp3s =[];

export default {

  createListeners: function(board, config) {
      config.forEach(listenerConfig => {
        listeners.push(new Listener({
          pin: listenerConfig.pin,
          board,
          name: listenerConfig.name,
          actionName: listenerConfig.actionName }));
      });
  },

  createEmitters: function(board, config) {
    config.forEach(emitterConfig => {
      switch(emitterConfig.emitterType) {
        case emitterTypes.servo:
          emitters.push(new Servo({
            board,
            pin: emitterConfig.pin,
            name: emitterConfig.name,
            range: emitterConfig.range
          }));
          break;
        default:
          emitters.push(new Relay({board, pin: emitterConfig.pin, name: emitterConfig.name}));
          break;
      }
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

  createMp3s: function() {
    mp3Configs.forEach(mp3Config => {
        mp3s.push(new Mp3(mp3Config));
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

  SetMp3ForActions: function() {
    actions.forEach(action => {
      action.setMp3(0);
    });
  },

  setRunnersForActions: function() {
    actions.forEach(action=> {
      action.setRunner();
    });
  },

  resetRunners: function() {
    runners.forEach(runner => {
      runner.reset();
    });
  },

  getListeners: function() {
    return listeners;
  },

  getEmitters: function() {
    return emitters;
  },

  getRunners: function() {
    return runners;
  },

  getRunner: function(name) {
    return utils.getFirstInstance(runners, 'name', name);
  },

  getEmitter: function(name) {
    return utils.getFirstInstance(emitters, 'name', name);
  },

  getAction: function(name) {
    return utils.getFirstInstance(actions, 'name', name);
  },

  getMp3: function(name) {
    return utils.getFirstInstance(mp3s, 'name', name);
  }

};
