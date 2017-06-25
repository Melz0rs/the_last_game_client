import actionNames from '../constants/actionsNames';
import emittersNames from '../constants/emittersNames';
import listenersNames from '../constants/listenersNames';
import mp3sNames from '../constants/mp3sNames';
import relayMethods from '../constants/relayMethods';
import gameActions from './gameActionsConfig';

let actions =  [
  {
    name: actionNames.dropVase,
    emitterConfigs: [
    {
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
    }
  ],
  emittersTimeouts: [
    1000, 200, 1000, 2000
    ]
  }, {
    name: actionNames.toggleClosetToBedroomMagnet,
    emitterConfigs: [
      emittersNames.closetToBedroomRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleMirror,
    emitterConfigs: [
      emittersNames.mirrorRelay,
      emittersNames.mirrorRelay
    ],
    emittersTimeouts: [0, 10000]
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
    name: actionNames.toggleVanityLight,
    emitterConfigs: [
      emittersNames.vanityLightRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleHallwayLight1,
    emitterConfigs: [
      emittersNames.hallwayLight1
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleHallwayLight2,
    emitterConfigs: [
      emittersNames.hallwayLight2
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleHallwayLight3,
    emitterConfigs: [
      emittersNames.hallwayLight3
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleHallwayLight4,
    emitterConfigs: [
      emittersNames.hallwayLight4
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleHallwayLight5,
    emitterConfigs: [
      emittersNames.hallwayLight5
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleHallwayLight6,
    emitterConfigs: [
      emittersNames.hallwayLight6
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  },  {
    name: actionNames.toggleAllLights,
    emitterConfigs: [
      emittersNames.livingRoomLight1,
      emittersNames.livingRoomLight2,
      emittersNames.livingRoomLight3,
      emittersNames.livingRoomLight4,
      emittersNames.livingRoomLight5,
      emittersNames.kidsroomLight1,
      emittersNames.kidsroomLight2,
      emittersNames.kidsroomLight3,
      emittersNames.bedroomWallLight,
      emittersNames.nextToBedLightRight,
      emittersNames.nextToBedLightLeft,
      emittersNames.hallwayLight1,
      emittersNames.hallwayLight2,
      emittersNames.hallwayLight3,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight5,
      emittersNames.hallwayLight6
    ],
    emittersTimeouts: [],
    expectedListeners: []
  },{
    name: actionNames.toggleHoleDoor,
    emitterConfigs: [
      emittersNames.holeRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: [

    ]
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
    name: actionNames.toggleKidsRoomLight1,
    emitterConfigs: [
      emittersNames.kidsroomLight1
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleLivingRoomShortStandingLight,
    emitterConfigs: [
      emittersNames.livingRoomLight1
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleLivingRoomFirePlaceWallLight,
    emitterConfigs: [
      emittersNames.livingRoomLight2
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleLivingRoomTallStandingLight,
    emitterConfigs: [
      emittersNames.livingRoomLight3
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleLivingRoomAboveFamilyPictureLight,
    emitterConfigs: [
      emittersNames.livingRoomLight4
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleLivingRoomDrawersWallLight,
    emitterConfigs: [
      emittersNames.livingRoomLight5
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
    name: actionNames.toggleSuicidedCandle,
    emitterConfigs: [
      emittersNames.suicidedCandleRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  },{
    name: actionNames.toggleFirePlaceCutterMagnet,
    emitterConfigs: [
      emittersNames.fireplaceCutterMagnetRelay
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
    name: actionNames.togglePlayingBox,
    emitterConfigs: [
      emittersNames.playingBoxRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleMemorialLightNoiser,
    emitterConfigs: [
      emittersNames.memorialLightNoiser,
      emittersNames.memorialLightNoiser
    ],
    emittersTimeouts: [0, 200],
    expectedListeners: []
  }, {
    name: actionNames.toggleAirConditionerMagnet,
    emitterConfigs: [
      emittersNames.airConditionerRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleWindowNoiser,
    emitterConfigs: [
      emittersNames.windowNoiser,
      emittersNames.windowNoiser
    ],
    emittersTimeouts: [0, 200],
    expectedListeners: []
  }, {
    name: actionNames.toggleBoidemNoiser,
    emitterConfigs: [
      emittersNames.boidemNoiserRelay,
      emittersNames.boidemNoiserRelay,
      emittersNames.boidemNoiserRelay,
      emittersNames.boidemNoiserRelay
    ],
    emittersTimeouts: [0, 200, 200, 200],
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
  }, {
    name: actionNames.twinkleTwinkleLights,
    emitterConfigs: [
      emittersNames.kidsroomLight1,
      emittersNames.kidsroomLight1,
      emittersNames.kidsroomLight2,
      emittersNames.kidsroomLight2,
      emittersNames.kidsroomLight3,
      emittersNames.kidsroomLight3
    ],
    emittersTimeouts: [0, 1000, 0, 1000, 0, 1000]
  }, {
    name: actionNames.openKidsroomMp3,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Configs: [
      {
        name: mp3sNames.kidsRoomSoundEffects,
        state: {
          open: true,
          timeout: 0
        }
      }
    ]
  }, {
    name: actionNames.openLivingRoomMp3,
    emitterConfigs: [],
    emittersTimeouts: [],
    mp3Configs: [
      {
        name: mp3sNames.livingRoomSoundEffects,
        state: {
          open: true,
          timeout: 0
        }
      }
    ]
  }, {
    name: actionNames.clapBothSides,
    emitterConfigs: [],
    emittersTimeouts: [],
    mp3Configs: [
      {
        name: mp3sNames.livingRoomSoundEffects,
        tracks: ['s'],
        timeouts: [0]
      }
    ]
  }
];

actions = actions.concat(gameActions);

export default actions;
