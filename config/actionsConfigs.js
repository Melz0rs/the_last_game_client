import actionNames from '../constants/actionsNames';
import emittersNames from '../constants/emittersNames';
import listenersNames from '../constants/listenersNames';
import runnersNames from '../constants/runnersNames';
import mp3sNames from '../constants/mp3sNames';
import relayMethods from '../constants/relayMethods';
import gameActions from './gameActionsConfig';

let actions =  [
  {
    name: actionNames.toggleClosetToBedroomMagnet,
    emitterConfigs: [
      emittersNames.closetToBedroomRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: []
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
  }, {
    name: actionNames.fadeHallwayLight,
    emitterConfigs: [
      emittersNames.hallwayLight1,
      emittersNames.hallwayLight2,
      emittersNames.hallwayLight3,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight5,
      emittersNames.hallwayLight6,
      emittersNames.hallwayLight1,
      emittersNames.hallwayLight2,
      emittersNames.hallwayLight3,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight5,
      emittersNames.hallwayLight6
    ],
    emittersTimeouts: [0, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000],
    expectedListeners: []
  }, {
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
  }, {
    name: actionNames.fuckTal,
    emitterConfigs: [
      emittersNames.hallwayLight1,
      emittersNames.hallwayLight2,
      emittersNames.hallwayLight2,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight5,
      emittersNames.hallwayLight6,
      emittersNames.hallwayLight3,
      emittersNames.hallwayLight2,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight6,
      emittersNames.hallwayLight5,
      emittersNames.hallwayLight2,
      emittersNames.hallwayLight1,
      emittersNames.hallwayLight3,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight3,
      emittersNames.hallwayLight2,
      emittersNames.hallwayLight1,
      emittersNames.hallwayLight1,
      emittersNames.hallwayLight2,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight3,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight6,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight3,
      emittersNames.hallwayLight2,
      emittersNames.hallwayLight1,
      emittersNames.hallwayLight3,
      emittersNames.hallwayLight5,
      emittersNames.hallwayLight6,
      emittersNames.hallwayLight5,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight3,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight1,
      emittersNames.hallwayLight2,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight5,
      emittersNames.hallwayLight6,
      emittersNames.hallwayLight6,
      emittersNames.hallwayLight5,
      emittersNames.hallwayLight2,
      emittersNames.hallwayLight2,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight3,
      emittersNames.hallwayLight1,
      emittersNames.hallwayLight1,
      emittersNames.hallwayLight1,
      emittersNames.hallwayLight5,
      emittersNames.hallwayLight6,
      emittersNames.hallwayLight3,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight6,
      emittersNames.hallwayLight4,
      emittersNames.hallwayLight3,
      emittersNames.hallwayLight2,
      emittersNames.hallwayLight1,
      emittersNames.hallwayLight3
    ],
    emittersTimeouts: [
      0,
      1000,
      500,
      500,
      700,
      1500,
      300,
      1000,
      1500,
      2000,
      700,
      1000,
      1500,
      1500,
      300,
      700,
      600,
      1000,
      1000,
      1000,
      300,
      200,
      100,
      200,
      300,
      2000,
      1000,
      300,
      200,
      500,
      500,
      700,
      700,
      0,
      1000,
      500,
      500,
      700,
      1500,
      300,
      1000,
      1500,
      2000,
      700,
      1000,
      1500,
      1500,
      300,
      700,
      600,
      1000,
      1000,
      1000,
      300,
      200,
      100,
      200,
      300,
      2000,
      1000,
      300
    ],
    expectedListeners: []
  },{
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
    name: actionNames.toggleLivingRoomLight1,
    emitterConfigs: [
      emittersNames.livingRoomLight1
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleLivingRoomLight2,
    emitterConfigs: [
      emittersNames.livingRoomLight2
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleLivingRoomLight3,
    emitterConfigs: [
      emittersNames.livingRoomLight3
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleLivingRoomLight4,
    emitterConfigs: [
      emittersNames.livingRoomLight4
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleLivingRoomLight5,
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
  },{
    name: actionNames.toggleAirConditionerMagnet,
    emitterConfigs: [
      emittersNames.airConditionerRelay
    ],
    emittersTimeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleBoidemDoor,
    emitterConfigs: [
      emittersNames.boidemDoorRelay,
      emittersNames.boidemDoorRelay
    ],
    emittersTimeouts: [0, 20000],
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
    name: actionNames.flashLightnings,
    emitterConfigs: [
      emittersNames.lightningRelay
      // emittersNames.lightningReay
      // emittersNames.lightningRelay,
      // emittersNames.lightningRelay,
      // emittersNames.lightningRelay,
      // emittersNames.lightningRelay,
      // emittersNames.lightningRelay,
      // emittersNames.lightningRelay
    ],
    emittersTimeouts: [1000],
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
  }, {
    name: actionNames.twinkleTwinkle,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.kidsRoomSoundEffects,
      tracks: ['3'],
      timeouts: []
    },
    runnerName: runnersNames.twinkleTwinkleLights
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
    emitterConfigs: [
    ],
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
    name: actionNames.playTrack1LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['1'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack2LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['2'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack3LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['3'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack4LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['4'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack5LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['5'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack6LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['6'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack7LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['7'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack8LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['8'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack9LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['9'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack10LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['a'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack11LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['b'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack12LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['c'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack13LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['d'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack14LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['e'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack15LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['f'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack16LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['g'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack17LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['h'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack18LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['i'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack19LivingRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.livingRoomSoundEffects,
      tracks: ['j'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack1KidsRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.kidsRoomSoundEffects,
      tracks: ['1'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack2KidsRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.kidsRoomSoundEffects,
      tracks: ['2'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack3KidsRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.kidsRoomSoundEffects,
      tracks: ['3'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack4KidsRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.kidsRoomSoundEffects,
      tracks: ['4'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack5KidsRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.kidsRoomSoundEffects,
      tracks: ['5'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack6KidsRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.kidsRoomSoundEffects,
      tracks: ['6'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack7KidsRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.kidsRoomSoundEffects,
      tracks: ['7'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack8KidsRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.kidsRoomSoundEffects,
      tracks: ['8'],
      timeouts: []
    }
  }, {
    name: actionNames.playTrack9KidsRoom,
    emitterConfigs: [
    ],
    emittersTimeouts: [],
    mp3Config: {
      name: mp3sNames.kidsRoomSoundEffects,
      tracks: ['9'],
      timeouts: []
    }
  }
];

actions = actions.concat(gameActions);


export default actions;
