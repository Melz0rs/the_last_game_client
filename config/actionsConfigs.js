import actionNames from '../constants/actionsNames';
import emittersNames from '../constants/emittersNames';
import listenersNames from '../constants/listenersNames';
import runnersNames from '../constants/runnersNames';
import mp3sNames from '../constants/mp3sNames';
import relayMethods from '../constants/relayMethods';


export default [
  {
    name: actionNames.toggleClosetToBedroomMagnet,
    emitterConfigs: [
      emittersNames.closetToBedroomRelay
    ],
    emittersTimeouts: [0],
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
      }
      , {
        listenerName: listenersNames.drawer4Readswitch,
        listenerValues: [0]
      }
    ]
  }, {
    name: actionNames.flashBedroomVanityLight,
    emitterConfigs: [
      emittersNames.vanityLightRelay,
      emittersNames.vanityLightRelay,
      emittersNames.vanityLightRelay,
      emittersNames.vanityLightRelay,
      emittersNames.vanityLightRelay,
      emittersNames.vanityLightRelay,
      emittersNames.vanityLightRelay,
      emittersNames.vanityLightRelay
    ],
    emittersTimeouts: [0, 150, 100, 100, 150, 200, 100, 150],
    expectedListeners: []
  },  {
    name: actionNames.toggleMirror,
    emitterConfigs: [
      emittersNames.mirrorRelay,
      emittersNames.mirrorRelay
    ],
    emittersTimeouts: [0, 10000],
    expectedListeners: [
      {
        listenerName: listenersNames.tempMovementSensor,
        listenerValues: [0]
      }
    ]
    // mp3Config: {
    //   name: mp3sNames.kidsRoomSoundEffects,
    //   tracks: ['0']
    //   // timeouts: [0, 10000, 20000]
    // }

  }, {
    name: actionNames.toggleMemorialLight,
    emitterConfigs: [
      emittersNames.memorialLightRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: [
      {
        listenerName: listenersNames.bedroomVanityPictureReadswitch,
        listenerValues: [1]
      }
    ]
  }, {
    name: actionNames.toggleNextToBedLightLeft,
    emitterConfigs: [
      emittersNames.nextToBedLightLeft
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
      name: actionNames.toggleNextToBedLightRight,
      emitterConfigs: [
        emittersNames.nextToBedLightRight
      ],
      emittersTimeouts: [0],
      expectedListeners: []
    }, {
    name: actionNames.toggleVaseServoRelay,
    emitterConfigs: [
      emittersNames.vaseServoRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleHoleDoor,
    emitterConfigs: [
      emittersNames.holeRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: [
      {
        listenerName: listenersNames.kidsroomPicture1Readswitch,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.kidsroomPicture2Readswitch,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.kidsroomPicture3Readswitch,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.kidsroomPicture4Readswitch,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.kidsroomPicture5Readswitch,
        listenerValues: [0]
      }
    ]
  }, {
    name: actionNames.toggleAirConditionerMagnet,
    emitterConfigs: [
      emittersNames.airConditionerRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleClosetToBedroomMagnet,
    emitterConfigs: [
      emittersNames.closetToBedroomRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleDollMagnet,
    emitterConfigs: [
      emittersNames.dollRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleHoleExitMagnet,
    emitterConfigs: [
      emittersNames.holeExitRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: [
      {
        listenerName: listenersNames.railReadswitch,
        listenerValues: [0]
      }
    ]
  }, {
    name: actionNames.toggleOperativeWallKidsRoom,
    emitterConfigs: [
      emittersNames.operativeWallKidsRoomRelay,
      emittersNames.operativeWallKidsRoomRelay
    ],
    emittersTimeouts: [0, 20000],
    expectedListeners: []
  }, {
    name: actionNames.toggleVitrinaDoor,
    emitterConfigs: [
      emittersNames.operativeVitrinaRelay,
      emittersNames.operativeVitrinaRelay
    ],
    emittersTimeouts: [0, 20000],
    expectedListeners: []
  }, {
    name: actionNames.toggleLettersMagnets,
    emitterConfigs: [
      emittersNames.lettersMagnetsRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: [
      {
        listenerName: listenersNames.drawerMovementSensor,
        listenerValues: [0]
      }
    ]
  }, {
    name: actionNames.toggleLettersMagnets,
    emitterConfigs: [
      emittersNames.lettersMagnetsRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: [
      {
        listenerName: listenersNames.drawerMovementSensor,
        listenerValues: [0]
      }
    ]
  }, {
      name: actionNames.toggleKidsRoomLight1,
      emitterConfigs: [
        emittersNames.kidsroomLight1
      ],
      emittersTimeouts: [0],
      expectedListeners: []
  }, {
    name: actionNames.toggleKidsRoomLight2,
    emitterConfigs: [
      emittersNames.kidsroomLight2
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleKidsRoomLight3,
    emitterConfigs: [
      emittersNames.kidsroomLight3
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleBedroomWallLight,
    emitterConfigs: [
      emittersNames.bedroomWallLight
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleMomClosetMagnet,
    emitterConfigs: [
      emittersNames.momClosetRelay
    ],
    emittersTimeouts: [0],
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
    ]
  }, {
    name: actionNames.flashLightnings,
    emitterConfigs: [
      emittersNames.lightningRelay,
      // emittersNames.lightningRelay,
      // emittersNames.lightningRelay,
      // emittersNames.lightningRelay,
      // emittersNames.lightningRelay,
      // emittersNames.lightningRelay,
      // emittersNames.lightningRelay,
      // emittersNames.lightningRelay
    ],
    emittersTimeouts: [],
    expectedListeners: []
  }, {
    name : actionNames.throwCutter,
    emitterConfigs: [
      emittersNames.airConditionerRelay,
      emittersNames.airConditionerServosRelay,
      {
        name: emittersNames.airConditionerHatchServo,
        config: {
          to: 35
        }
      }
      , {
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
      emittersNames.airConditionerServosRelay,
      emittersNames.airConditionerRelay
    ],
    emittersTimeouts: [0, 0, 500, 2000, 1000, 1000, 1000, 0],
    expectedListeners: [
      {
        listenerName: listenersNames.clockReadswitch1,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.clockReadswitch2,
        listenerValues: [0]
      }
    ]
  }, {
    name : actionNames.dropVase,
    emitterConfigs: [
      emittersNames.vaseServoRelay,
      {
        name: emittersNames.vaseServo,
        config: {
          to: 45
        }
      }, {
        name: emittersNames.vaseServo,
        config: {
          to: -1
        }
      },
      emittersNames.vaseServoRelay
    ],
    emittersTimeouts: [0, 200, 1000, 3000]
  }
];
