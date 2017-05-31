import actionNames from '../constants/actionsNames';
import emittersNames from '../constants/emittersNames';
import listenersNames from '../constants/listenersNames';
import runnersNames from '../constants/runnersNames';
import mp3sNames from '../constants/mp3sNames';
import relayMethods from '../constants/relayMethods';

export default [
  {
    name: actionNames.preGame,
    emitterConfigs: [
      {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight2,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight5,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.hallwayLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.hallwayLight2,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.hallwayLight3,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.hallwayLight4,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.hallwayLight5,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.hallwayLight6,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight2,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight3,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.bedroomWallLight,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.nextToBedLightLeft,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.nextToBedLightRight,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.memorialLightRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.vanityLightRelay,
        config: {
          method: relayMethods.open
        }
      }
    ],
    emittersTimeouts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Close all lights and open light4 in living room
    expectedListeners: []
  }, {
    name: actionNames.startGame,
    emitterConfigs: [
      {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.vaseServoRelay,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.vaseServo,
        config: {
          to: 45
        }
      }, {
        name: emittersNames.vaseServo,
        config: {
          to: -1
        }
      }, {
        name: emittersNames.vaseServoRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight2,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight5,
        config: {
          method: relayMethods.close
        }
      }
    ],
    emittersTimeouts: [1000 * 58, 200, 100, 150, 100, 250, 600, // Flash light 58 seconds
      1000, 200, 1000, 2000, // Drop vase
      2000, 150, 100, 200, // Flash light
      0, 0, 0, 0, 0], // Open living room lights
    expectedListeners: [],
    mp3Configs: [
      {
        name: mp3sNames.livingRoomSoundEffects,
        tracks: ['i'],
        timeouts: [1000 * 58] // 58 seconds
      }
    ]
  }, {
    name: actionNames.dropLettersEffect,
    emitterConfigs: [
      {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight2,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight5,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.lettersMagnetsRelay,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.lettersMagnetsRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.close
        }
      }
    ],
    emittersTimeouts: [100, 150, 100, 250, 600, // Flash light
      100, 0, 0 ,0,  // Drop lights
      2624, 200, // Drop letters
      100, 150, 100, 250, 600, 0], // Flash light and open 2 lights in the living room
    expectedListeners: [
      {
        listenerName: listenersNames.drawerMovementSensor,
        listenerValues: [0]
      }
    ],
    mp3Configs: [
      {
        name: mp3sNames.livingRoomSoundEffects,
        tracks: ['k'],
        timeouts: [1300]
      }
    ]
  }, {
    name: actionNames.openClosetToBedroomEffect,
    emitterConfigs: [{
      name: emittersNames.livingRoomLight3,
      config: {
        method: relayMethods.open
      }
    }, {
      name: emittersNames.livingRoomLight4,
      config: {
        method: relayMethods.open
      }
    }, {
      name: emittersNames.livingRoomLight3,
      config: {
        method: relayMethods.close
      }
    }, {
      name: emittersNames.livingRoomLight4,
      config: {
        method: relayMethods.close
      }
    }, {
      name: emittersNames.livingRoomLight3,
      config: {
        method: relayMethods.open
      }
    }, {
      name: emittersNames.livingRoomLight4,
      config: {
        method: relayMethods.open
      }
    }, {
      name: emittersNames.livingRoomLight3,
      config: {
        method: relayMethods.close
      }
    }, {
      name: emittersNames.livingRoomLight4,
      config: {
        method: relayMethods.close
      }
    }, {
      name: emittersNames.livingRoomLight3,
      config: {
        method: relayMethods.open
      }
    }, {
      name: emittersNames.livingRoomLight4,
      config: {
        method: relayMethods.open
      }
    }, {
      name: emittersNames.closetToBedroomRelay,
      config: {
        method: relayMethods.open
      }
    }, {
      name: emittersNames.closetToBedroomRelay,
      config: {
        method: relayMethods.close
      }
    }, {
      name: emittersNames.bedroomWallLight,
      config: {
        method: relayMethods.close
      }
    }, {
      name: emittersNames.bedroomWallLight,
      config: {
        method: relayMethods.open
      }
    }, {
      name: emittersNames.bedroomWallLight,
      config: {
        method: relayMethods.close
      }
    }, {
      name: emittersNames.bedroomWallLight,
      config: {
        method: relayMethods.open
      }
    }, {
      name: emittersNames.bedroomWallLight,
      config: {
        method: relayMethods.close
      }
    }, {
      name: emittersNames.bedroomWallLight,
      config: {
        method: relayMethods.open
      }
    }, {
      name: emittersNames.vanityLightRelay,
      config: {
        method: relayMethods.close
      }
    }, {
      name: emittersNames.livingRoomLight2,
      config: {
        method: relayMethods.close
      }
    }],
    emittersTimeouts: [200, 0, 100, 0, 150, 0, 200, 0, 100, 0, // Flash lights
      500, 500, // Open closet and close magnet
      2800, 500, 800, 400, 300, 200, 0,  //Flash vanity light
      3500], // Open light in living room
    expectedListeners: [
      {
        listenerName: listenersNames.drawer1Readswitch,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.drawer2Readswitch,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.drawer3Readswitch,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.drawer4Readswitch,
        listenerValues: [0]
      }
    ]
  }, {
    name: actionNames.openMemorialLight,
    emitterConfigs: [
      {
        name: emittersNames.vanityLightRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight2,
        config: {
          method: relayMethods.open
        }
      },  {
        name: emittersNames.memorialLightRelay,
        config: {
          method: relayMethods.close
        }
      }
    ],
    emittersTimeouts: [0, 0, // close lights
                       2000],// Open memorial light
    expectedListeners: [
      {
        listenerName: listenersNames.bedroomVanityPictureReadswitch, // TODO: Change to memorialLightReedswitch
        listenerValues: [0]
      }
    ], mp3Configs: [
      {
        name: mp3sNames.livingRoomSoundEffects,
        tracks: ['l'],
        timeouts: [0]
      }
    ]
  }, {
    name: actionNames.openBedroomLights,
    emitterConfigs: [
      {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.nextToBedLightRight,
        config: {
          method: relayMethods.close
        }
      },{
        name: emittersNames.suicidedCandleRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.nextToBedLightLeft,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.bedroomWallLight,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.nextToBedLightRight,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.nextToBedLightLeft,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.bedroomWallLight,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.nextToBedLightRight,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.nextToBedLightLeft,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.bedroomWallLight,
        config: {
          method: relayMethods.close
        }
      }
    ],
    emittersTimeouts: [
      2900, 0, 0, 0, 0, 0,
      488, 0, 0, 0, 0,
      250, 0, 0, 0, 0
    ] ,
    expectedListeners: [
      {
        listenerName: listenersNames.bedroomMemorialLightReadswitch,
        listenerValues: [0]
      }
    ], mp3Configs: [
      {
        name: mp3sNames.livingRoomSoundEffects,
        tracks: ['g'],
        timeouts: [0]
      }
    ]
  }, {
    name: actionNames.openBedroomCloset,
    emitterConfigs: [
      {
        name: emittersNames.suicidedCandleRelay,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.nextToBedLightRight,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.nextToBedLightLeft,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.bedroomWallLight,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.nextToBedLightRight,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.nextToBedLightLeft,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.bedroomWallLight,
        config: {
          method: relayMethods.close
        }
      },{
        name: emittersNames.vanityLightRelay,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight3,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.bedroomWallLight,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.nextToBedLightLeft,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.nextToBedLightRight,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.memorialLightRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.vanityLightRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.momClosetRelay,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.momClosetRelay,
        config: {
          method: relayMethods.open
        }
      },  {
        name: emittersNames.nextToBedLightLeft,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.nextToBedLightRight,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }
    ],
    emittersTimeouts: [
      0, 0, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 0, // Flash all lights
      2000, 0, 3000, 3000, 3000, 3000, 3000,// Fade lights out
      3000, 500, // Open and close closet
      2000, 0, 0// Turn lights on
    ],

    expectedListeners: [
      {
        listenerName: listenersNames.candlestickReadswitch1,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.candlestickReadswitch2,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.candlestickReadswitch3,
        listenerValues: [0]
      }
    ], mp3Configs: [
      {
        name: mp3sNames.livingRoomSoundEffects,
        tracks: ['h'],
        timeouts: [0]
      }
    ]
  }, {
    name: actionNames.throwCutterEffect,
    emitterConfigs: [
      {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      },
      {
        name: emittersNames.airConditionerRelay,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.airConditionerServosRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.airConditionerHatchServo,
        config: {
          to: 50
        }
      }, {
        name: emittersNames.airConditionerCutterMagnetRelay,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.airConditionerCutterMagnetRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.airConditionerRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.airConditionerHatchServo,
        config: {
          to: -1
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.airConditionerServosRelay,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.nextToBedLightRight,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.nextToBedLightLeft,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight4,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      },  {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      },  {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.boidemNoiserRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.boidemNoiserRelay,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight2,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight3,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.nextToBedLightLeft,
        config: {
          method: relayMethods.close
        }
      }
    ],
    emittersTimeouts: [
      0, // close living room light
      1000, 0, 500, 500, 500, 0, 0, 100, 900, // Throw cutter and open living room light
      6300, 0, // Close bedroom lights
      1500, // Close living room light

      7000, 0, 100, 0, 100, 0, // Twinkle twinkle lights sync
      24100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0,
      13800, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0,
      4200, 0, 100, 0, 100, 0, 100, 0,
      4300, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0,
      700, 0, 100, 0,
      700, 0, 100, 0,
      900, 0, 100, 0,
      500, 0, 100, 0,
      300, 0, 100, 0,
      100, 0, // Drop lights

      21 * 1000, 200,  // Noiser
      2000, 0, 0, 0, 0 // Open lights
    ],
    expectedListeners: [
      {
        listenerName: listenersNames.clockReadswitch1,
        listenerValues: [0]
      },  {
        listenerName: listenersNames.clockReadswitch2,
        listenerValues: [0]
      }
    ], mp3Configs: [
      {
        name: mp3sNames.livingRoomSoundEffects,
        tracks: ['m'],
        timeouts: [0]
      }, {
        name: mp3sNames.kidsRoomSoundEffects,
        state:  {
          open: true,
          timeout: 5000
        },
        tracks: ['f'],
        timeouts: [15 * 1000]
      }, {
        name: mp3sNames.livingRoomSoundEffects,
        state:  {
          open: true,
          timeout: 20 * 1000
        },
        tracks: ['1'],
        timeouts: [74 * 1000]
      }, {
        name: mp3sNames.kidsRoomSoundEffects,
        state:  {
          open: true,
          timeout: 100 * 1000
        }
      }
    ]
  }, {
    name: actionNames.openHoleEffect,
    emitterConfigs: [
      {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight2,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight3,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.nextToBedLightLeft,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.holeRelay,
        config: {
          method: relayMethods.close
        }
      }
    ],
    emittersTimeouts: [
      0, 3000, 3000, 3000, 0, // Fade lights out
      9500//Open hole door
    ],
    expectedListeners: [
      {
        listenerName: listenersNames.kidsroomPictureDadReadswitch,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.kidsroomMomPictureReadswitch,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.kidsroomDollPictureReadswitch,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.kidsroomFamilyReadswitch,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.kidsroomGhostPictureReadswitch,
        listenerValues: [0]
      }
    ],
    mp3Configs: [
      {
        name: mp3sNames.kidsRoomSoundEffects,
        tracks: ['c'],
        timeouts: [9 * 1000] // should be 9 * 1000
      }, {
        name: mp3sNames.kidsRoomSoundEffects,
        tracks: ['o'],
        timeouts: [18 * 1000]
      }
    ]
  }, {
    name: actionNames.playingBoxEffect,
    emitterConfigs: [
      {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight2,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight3,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight2,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.kidsroomLight3,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.playingBoxRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.playingBoxRelay,
        config: {
          method: relayMethods.close
        }
      }
    ],
    emittersTimeouts: [
      0, 0, 0, 200, 0, 0, // Zap kidsroom lights
      2000, 15 * 1000 // Start playing box
    ],
    expectedListeners: [
      {
        listenerName: listenersNames.kidsroomKillerPictureReadswitch,
        listenerValues: [0]
      }
    ],
    mp3Configs: [
      {
        name: mp3sNames.kidsRoomSoundEffects,
        tracks: ['0'],
        timeouts: [200]
      }
    ]
  }, {
    name: actionNames.showDollEffect,
    emitterConfigs: [
      {
        name: emittersNames.dollRelay,
        config: {
          method: relayMethods.close
        }
      }
    ],
    emittersTimeouts: [
      20 * 1000 // Break wall - depends on video length
    ],
    expectedListeners: [],
    mp3Configs: [
      {
        name: mp3sNames.kidsRoomSoundEffects,
        tracks: ['n'],
        timeouts: [20 * 1000] // depends on video length
      }
    ]
  }, {
    name: actionNames.openHoleExitEffect,
    emitterConfigs: [
      {
        name: emittersNames.kidsroomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight2,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.kidsroomLight3,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.holeExitRelay,
        config: {
          method: relayMethods.close
        }
      },
    ],
    emittersTimeouts: [
      3000, 3000, 3000, // open kidsroom lights
      3000 // Open exit
    ],
    expectedListeners: [
      {
        listenerName: listenersNames.railReadswitch,
        listenerValues: [0]
      }
    ],
    mp3Configs: [
      {
        name: mp3sNames.kidsRoomSoundEffects,
        tracks: ['0'],
        timeouts: [0]
      }
    ]
  }
];