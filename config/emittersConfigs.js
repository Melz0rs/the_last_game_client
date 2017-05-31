import emittersNames from '../constants/emittersNames';
import emitterTypes from '../constants/emitterTypes';
import relayMethods from '../constants/relayMethods';

export default [
  [
    {
      pin: 53,
      name: emittersNames.vanityLightRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 52,
      name: emittersNames.closetToBedroomRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 51,
      name: emittersNames.memorialLightRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 50,
      name: emittersNames.holeExitRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 49,
      name: emittersNames.dollRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 48,
      name: emittersNames.airConditionerRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.close
      }
    }, {
      pin: 47,
      name: emittersNames.holeRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 46,
      name: emittersNames.mirrorRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 39,
      name: emittersNames.operativeWallKidsRoomRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 37,
      name: emittersNames.operativeVitrinaRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 38,
      name: emittersNames.lettersMagnetsRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 42,
      name: emittersNames.vaseServoRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 36,
      name: emittersNames.momClosetRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 40,
      name: emittersNames.lightningRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 45,
      name: emittersNames.livingRoomLight5,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 44,
      name: emittersNames.bedroomWallLight,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 43,
      name: emittersNames.kidsroomLight1,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 41,
      name: emittersNames.kidsroomLight2,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 35,
      name: emittersNames.kidsroomLight3,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 34,
      name: emittersNames.nextToBedLightLeft,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    },
    {
      pin: 27,
      name: emittersNames.airConditionerHatchServo,
      emitterType: emitterTypes.servo,
      range: [0, 180],
      startAt: 10
    },
    {
      pin: 2,
      name: emittersNames.vaseServo,
      emitterType: emitterTypes.servo,
      range: [0, 180],
      startAt: 8
    }, {
      pin: 12,
      name: emittersNames.airConditionerCutterMagnetRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 21,
      name: emittersNames.livingRoomLight1,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 20,
      name: emittersNames.livingRoomLight2,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 13,
      name: emittersNames.livingRoomLight3,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
    pin: 19,
    name: emittersNames.hallwayLight6,
    emitterType: emitterTypes.relay,
    defaults: {
      method: relayMethods.close
    }
    }, {
      pin: 18,
      name: emittersNames.hallwayLight5,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.close
      }
    }, {
      pin: 17,
      name: emittersNames.hallwayLight4,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.close
      }
    }, {
      pin: 16,
      name: emittersNames.hallwayLight2,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.close
      }
    }, {
      pin: 15,
      name: emittersNames.hallwayLight3,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.close
      }
    }, {
      pin: 14,
      name: emittersNames.hallwayLight1,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.close
      }
    }, {
      pin: 3,
      name: emittersNames.airConditionerServosRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.close
      }
    }
  ], [
    {
      pin: 24,
      name: emittersNames.livingRoomLight4,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 33,
      name: emittersNames.boidemNoiserRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.close
      }
    }, {
      pin: 31,
      name: emittersNames.boidemDoorRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.close
      }
    }, {
      pin: 32,
      name: emittersNames.playingBoxRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.close
      }
    }, {
      pin: 26,
      name: emittersNames.nextToBedLightRight,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 28,
      name: emittersNames.fireplaceCutterMagnetRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }, {
      pin: 27,
      name: emittersNames.suicidedCandleRelay,
      emitterType: emitterTypes.relay,
      defaults: {
        method: relayMethods.open
      }
    }
    // , {
    //   pin: 34,
    //   name: emittersNames.airConditionerHatchServo,
    //   emitterType: emitterTypes.servo,
    //   range: [0, 180],
    //   startAt: 10
    // }
  ]

];
