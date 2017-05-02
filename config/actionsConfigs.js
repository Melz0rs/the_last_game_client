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
      emittersNames.bedroomVanityLightRelay,
      emittersNames.bedroomVanityLightRelay,
      emittersNames.bedroomVanityLightRelay,
      emittersNames.bedroomVanityLightRelay,
      emittersNames.bedroomVanityLightRelay,
      emittersNames.bedroomVanityLightRelay,
      emittersNames.bedroomVanityLightRelay,
      emittersNames.bedroomVanityLightRelay
    ],
    emittersTimeouts: [0, 300, 400, 300, 500, 400, 200, 500],
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
    expectedListeners: []
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
  },
  {
    name: actionNames.toggleMomClosetMagnet,
    emitterConfigs: [
      emittersNames.momClosetRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.flashLightnings,
    emitterConfigs: [
      emittersNames.lightningRelay,
      emittersNames.lightningRelay,
      emittersNames.lightningRelay,
      emittersNames.lightningRelay,
      emittersNames.lightningRelay,
      emittersNames.lightningRelay,
      emittersNames.lightningRelay,
      emittersNames.lightningRelay
    ],
    emittersTimeouts: [3000, 100, 100, 100, 200, 100, 300, 100],
    expectedListeners: []
  }, {
    name : actionNames.throwCutter,
    emitterConfigs: [
      emittersNames.airConditionerRelay,
      {
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
      emittersNames.airConditionerRelay
    ],
    emittersTimeouts: [0, 500, 1000, 1000, 1000, 0],
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
