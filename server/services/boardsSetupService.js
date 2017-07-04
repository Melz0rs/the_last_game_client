import Sensor from '../classes/Sensor';
import Proximity from '../classes/Proximity';
import MovementSensor from '../classes/MovementSensor';
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
import listenerTypes from '../../constants/listenerTypes';
import gameModes from '../../constants/difficulyModes';

const defaultGameMode = gameModes.scary;

let emitters = [];
let listeners = [];
let actions = [];
let runners = [];
let mp3s =[];
let currentGameMode = defaultGameMode;


export default {

  createListeners: function(board, config) {
      config.forEach(listenerConfig => {
        switch(listenerConfig.listenerType) {
          case listenerTypes.movementSensor:
            listeners.push(new MovementSensor({
              pin: listenerConfig.pin,
              board,
              name: listenerConfig.name,
              actionName: listenerConfig.actionName
            }));
            break;
          case listenerTypes.proximity:
            listeners.push(new Proximity({
              pin: listenerConfig.pin,
              board,
              name: listenerConfig.name,
              actionName: listenerConfig.actionName
            }));
            break;
          default:
            listeners.push(new Sensor({
              pin: listenerConfig.pin,
              board,
              name: listenerConfig.name,
              actionName: listenerConfig.actionName
            }));
        }
      });

  },

  createEmitters: function(board, config, stateChangeCallback) {
    config.forEach(emitterConfig => {
      switch(emitterConfig.emitterType) {
        case emitterTypes.servo:
          emitters.push(new Servo({
            board,
            pin: emitterConfig.pin,
            name: emitterConfig.name,
            range: emitterConfig.range,
            defaults: emitterConfig.defaults,
            startAt: emitterConfig.startAt
          }));
          break;
        default:
          emitters.push(new Relay({
            board,
            pin: emitterConfig.pin,
            name: emitterConfig.name,
            defaults: emitterConfig.defaults,
            stateChangeCallback}
          ));
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

  registerEvents: function(onChange) {
    listeners.forEach(listener => {
      listener.registerEvents(onChange);
    });
  },

  setEmittersForActions: function() {
    actions.forEach(action => {
      action.setEmitters();
    });
  },

  setActionDependenciesForActions: function() {
    actions.forEach(action => {
      action.setActionDependencies();
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
      action.setMp3s(0);
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

  getMp3s: function() {
    return mp3s;
  },

  getActions: function() {
    return actions;
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
  },

  closeOpenedMp3s: function(currentMp3Name) {
    mp3s.filter(mp3 => {
      return mp3.isOpen && mp3.name !== currentMp3Name;
    }).forEach(mp3 => {
      mp3.close();
    });
  },

  setGameMode: function(gameModeName) {
    currentGameMode = gameModeName;
    this.setEmittersForActions();
  },

  getGameMode: function() {
    return currentGameMode;
  }

};
