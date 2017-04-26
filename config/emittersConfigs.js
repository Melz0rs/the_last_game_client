import emittersNames from '../constants/emittersNames';
import emitterTypes from '../constants/emitterTypes';
import relayMethods from '../constants/relayMethods';

export default [
  [
    {
      pin: 12,
      name: emittersNames.mirrorRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 11,
      name: emittersNames.holeRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 8,
      name: emittersNames.memorialLightRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    },
    {
      pin: 10,
      name: emittersNames.airConditionerRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 2,
      name: emittersNames.closetToBedroomRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }
  ], [
    {
      pin: 2,
      name: emittersNames.holeExitRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 3,
      name: emittersNames.dollRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    },{
        pin: 4,
        name: emittersNames.airConditionerHatchServo,
        emitterType: emitterTypes.servo,
        range: [0, 180],
        startAt: 0
    }, {
      pin: 5,
      name: emittersNames.airConditionerVisherServo,
      emitterType: emitterTypes.servo,
      range: [0, 180],
      startAt: 180
    }, {
      pin: 10,
      name: emittersNames.operativeWallKidsRoomRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 11,
      name: emittersNames.lettersMagnetsRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 12,
      name: emittersNames.vanityLightRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 'A5',
      name: emittersNames.vaseServo,
      emitterType: emitterTypes.servo,
      range: [0, 180],
      startAt: 0
    }
  ], [

  ]
];
