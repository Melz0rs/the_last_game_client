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
      2624, 200, 200, // Drop letters, and open magnets again
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
      2900, 0, 0, 0, 0,
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
      0, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 0, // Flash all lights
      2000, 0, 3000, 3000, 3000, 3000, 3000,// Fade lights out
      3000, 500, // Open and close closet
      2000, 0, 0// Turn lights on
    ],

    expectedListeners: [
      // {
      //   listenerName: listenersNames.candlestickReadswitch1,
      //   listenerValues: [0]
      // },
      {
        listenerName: listenersNames.candlestickReadswitch2,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.candlestickReadswitch3,
        listenerValues: [0]
      }
    ], mp3Config: [
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
        name: emittersNames.airConditionerRelay,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.airConditionerServosRelay,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.airConditionerHatchServo,
        config: {
          to: 35
        }
      }, {
        name: emittersNames.airConditionerVisherServo,
        config: {
          to: 135
        }
      }, {
        name: emittersNames.airConditionerVisherServo,
        config: {
          to: -1
        }
      }, {
        name: emittersNames.airConditionerHatchServo,
        config: {
          to: 0
        }
      },
      {
        name: emittersNames.airConditionerRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.airConditionerServosRelay,
        config: {
          method: relayMethods.open
        }
      }
    ],
    emittersTimeouts: [
      0, 0, 500, 2000, 1000, 1000, 1000, 0 // Throw cutter
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
          timeout: 3000
        }
      }
    ]
  }
];
