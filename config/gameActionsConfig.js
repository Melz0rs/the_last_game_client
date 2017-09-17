import actionNames from '../constants/actionsNames';
import emittersNames from '../constants/emittersNames';
import listenersNames from '../constants/listenersNames';
import runnersNames from '../constants/runnersNames';
import mp3sNames from '../constants/mp3sNames';
import relayMethods from '../constants/relayMethods';

export default [
  {
    name: actionNames.EFFECTpreGame,
    runnerConfig: {
      name: runnersNames.preGameZapLightsRunner,
      timeout: 0
    },
    emitterConfigs: {
      scary: [
        {
          name: emittersNames.hallwayLight6, // TODO: Change to open when button works
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.hallwayLight5,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.hallwayLight4, // TODO: Change to close when button works
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.hallwayLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.hallwayLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.hallwayLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight4,
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
        }, {
          name: emittersNames.airConditionerRelay,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.vitrinaLightsRelay,
          config: {
            method: relayMethods.close
          }
        }
      ],
      notScary: [
        {
          name: emittersNames.hallwayLight6,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.hallwayLight5,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.hallwayLight4,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.hallwayLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.hallwayLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.hallwayLight1,
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
        }, {
          name: emittersNames.airConditionerRelay,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.vitrinaLightsRelay,
          config: {
            method: relayMethods.close
          }
        }
      ],
      bigTeams: [
        {
          name: emittersNames.hallwayLight6,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.hallwayLight5,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.hallwayLight4,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.hallwayLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.hallwayLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.hallwayLight1,
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
        }, {
          name: emittersNames.airConditionerRelay,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.vitrinaLightsRelay,
          config: {
            method: relayMethods.close
          }
        }
      ]
    },
    emittersTimeouts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Close all lights and open light4 in living room
    expectedListeners: [],
    mp3Configs: [
      {
        name: mp3sNames.livingRoomSoundEffects,
        state:  {
          open: true,
          timeout: 0
        },
        tracks: ['4'],
        timeouts: [5000]
      }, {
        name: mp3sNames.kidsRoomSoundEffects,
        state:  {
          open: true,
          timeout: 7000
        },
        tracks: ['4'],
        timeouts: [12000]
      },  {
        name: mp3sNames.livingRoomSoundEffects,
        state:  {
          open: true,
          timeout: 15000
        }
      }
    ]
  }, {
    name: actionNames.EFFECTHallWay,
    runnerConfig: {

    },
    emitterConfigs: [
      {
        name: emittersNames.hallwayLight1,
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
          method: relayMethods.open
        }
      }, {
        name: emittersNames.hallwayLight2,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.hallwayLight3,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.hallwayLight3,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.hallwayLight4,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.hallwayLight4,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.hallwayLight5,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.hallwayLight5,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.hallwayLight6,
        config: {
          method: relayMethods.open
        }
      }
    ],
    emittersTimeouts: [
      0, 3000, 0, 3000, 0, 3000, // Open hallway lights
      0, 3000, 0, 1500, 0 // Close hallway lights
    ],
    expectedListeners: [
      {
        listenerName: listenersNames.hallwayButton,
        listenerValues: [0]
      }
    ],
    mp3Configs: []
  }, {
    name: actionNames.EFFECTstartGame,
    runnerConfig: {
      name: runnersNames.preGameZapLightsRunner,
      timeout: 57 * 1000
    },
    emitterConfigs: {
      scary: [
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
        }, {
          name: emittersNames.hallwayLight6,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.hallwayLight5,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.hallwayLight4,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.hallwayLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.hallwayLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.hallwayLight1,
          config: {
            method: relayMethods.open
          }
        }
      ],
      notScary: [
        {
          name: emittersNames.livingRoomLight3,
          config: {
            method: relayMethods.close
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
          name: emittersNames.livingRoomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight5,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight5,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight4,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight2,
          config: {
            method: relayMethods.open
          }
        },{
          name: emittersNames.livingRoomLight3,
          config: {
            method: relayMethods.close
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
          name: emittersNames.livingRoomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight5,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight5,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight4,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight2,
          config: {
            method: relayMethods.open
          }
        },{
          name: emittersNames.livingRoomLight3,
          config: {
            method: relayMethods.close
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
          name: emittersNames.livingRoomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight5,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight5,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight4,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight2,
          config: {
            method: relayMethods.open
          }
        },{
          name: emittersNames.livingRoomLight3,
          config: {
            method: relayMethods.close
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
          name: emittersNames.livingRoomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight5,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight5,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight4,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight2,
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
          name: emittersNames.livingRoomLight4,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight5,
          config: {
            method: relayMethods.close
          }
        }
      ]
    },
    emittersTimeouts: {
      scary:
        [1000 * 58, 200, 100, 150, 100, 250, 600, // Flash light 58 seconds
          1000, 200, 1000, 2000, // Drop vase
          2000, 150, 100, 200, // Flash light
          0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0],
      notScary: [
        60 * 1000,
        200, 300, 200, 300, 200, 300, 200, 300, 200, 300,
        200, 300, 200, 300, 200, 300, 200, 300, 200, 300,
        200, 300, 200, 300, 200, 300, 200, 300, 200, 300,
        200, 300, 200, 300, 200, 300, 200, 300, 200, 300,
        0, 200, 1000, 1000, // Drop vase
        200, 0, 0, 0, 0
      ]
    }, // Open living room lights
    expectedListeners: [],
    mp3Configs: {
      scary: [
        {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['i'],
          timeouts: [1000 * 58] // 58 seconds
        }
      ],
      notScary: [

      ]
    }
  }, {
    name: actionNames.EFFECTdropLettersEffect,
    emitterConfigs: {
      scary: [
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
        }, {
          name: emittersNames.lettersMagnetsRelay,
          config: {
            method: relayMethods.close
          }
        }
      ],
      notScary: [
        {
          name: emittersNames.lettersMagnetsRelay,
          config: {
            method: relayMethods.close
          }
        }
      ],
      bigTeams: [
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
          name: emittersNames.closetToBedroomRelay,
          config: {
            method: relayMethods.close
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
        }, {
          name: emittersNames.lettersMagnetsRelay,
          config: {
            method: relayMethods.close
          }
        }
      ]
    },
    actionDependencies: [
      actionNames.EFFECTstartGame
    ],
    emittersTimeouts: {
      scary: [
        100, 150, 100, 250, 600, // Flash light
        100, 0, 0 ,0,  // Drop lights
        2624, 150, 100, 250, 600, 0, // open lights
        2000 // dropLetters
      ],
      notScary: [
        500
      ],
      bigTeams: [
        100, 150, 100, 250, 600, // Flash light
        100, 0, 0 ,0,  // Drop lights

        0, // Open closet to bedroom

        2624, 150, 100, 250, 600, 0, // open lights
        2000 // dropLetters
      ]
    }, // Flash light and open 2 lights in the living room
    expectedListeners: [
      {
        listenerName: listenersNames.drawerMovementSensor,
        listenerValues: [0]
      }
    ],
    mp3Configs: {
      scary: [
        {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['k'],
          timeouts: [1300]
        }, {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['w'],
          timeouts: [3424]
        }
      ],
      notScary: [
        {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['w'],
          timeouts: [0]
        }
      ]
    }
  }, {
    name: actionNames.EFFECTopenBlueCabinToBedroom,
    emitterConfigs: {
      scary: [
        {
          name: emittersNames.vitrinaLightsRelay,
          config: {
            method: relayMethods.open
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
        }
      ],
      notScary: [
        {
          name: emittersNames.vitrinaLightsRelay,
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
        },  {
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
        },  {
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
          name: emittersNames.closetToBedroomRelay,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.vanityLightRelay,
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
      bigTeams: [
        {
          name: emittersNames.vitrinaLightsRelay,
          config: {
            method: relayMethods.open
          }
        },
        emittersNames.livingRoomLight4,
        emittersNames.livingRoomLight3,
        emittersNames.livingRoomLight1,
        emittersNames.livingRoomLight1,
        emittersNames.livingRoomLight1,
        emittersNames.livingRoomLight1,
        emittersNames.livingRoomLight1,
        emittersNames.livingRoomLight1,
        {
          name: emittersNames.fireplaceCutterMagnetRelay,
          config: {
            method: relayMethods.close
          }
        },
        emittersNames.livingRoomLight4,
        emittersNames.livingRoomLight3
      ]
    },
    runnerConfig: {
      name: runnersNames.zapFireplaceLight,
      timeout: 10250
    },
    emittersTimeouts: {
      scary: [
        0, 200, 0, 100, 0, 150, 0, 200, 0, 100, 0, // Flash lights
        500, 500, // Open closet and close magnet
        2800, 500, 800, 400, 300, 200, 0,  //Flash vanity light
        3500 // Open living room fireplace light
      ],
      notScary: [
        0, 250, 0, 0,
        250, 0, 0,
        220, 0, 0,
        170, 0, 0,
        540, 0, 0, // Dying lights
        1000, // Move closet
        0, 0 // Bedroom lights adjustments
      ],
      bigTeams: [
        0, 0, 0, // Close living room lights
        0, 400, 400, 400, 400, 400, // Flash living room light
        0, // Throw key from fireplace
        0, 0// open living room lights
      ]
    }, // Open light in living room
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
    ],
    mp3Configs: {
      scary: [
        {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['x'],
          timeouts: [0]
        }, {
          name: mp3sNames.kidsRoomSoundEffects,
          state:  {
            open: true,
            timeout: 5000
          },
          tracks: ['j'],
          timeouts: [22 * 1000],
          volumes: [8]
        }, {
          name: mp3sNames.livingRoomSoundEffects,
          state:  {
            open: true,
            timeout: 30 * 1000
          }
        }
      ],
      notScary: [
        {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['8'],
          timeouts: [0]
        }
      ],
      bigTeams: []
    }
  }, {
    name: actionNames.EFFECTopenMemorialLight,
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
    runnerConfig: {
      name: runnersNames.zapFireplaceLight,
      timeout: 0
    },
    actionDependencies: [
      actionNames.EFFECTdropLettersEffect
    ],
    emittersTimeouts: [0, 0, // close lights
      2000],// Open memorial light
    expectedListeners: [
      {
        listenerName: listenersNames.bedroomVanityPictureReadswitch, // TODO: Change to memorialLightReedswitch
        listenerValues: [1]
      }
    ], mp3Configs: [
      {
        name: mp3sNames.livingRoomSoundEffects,
        tracks: ['l'],
        timeouts: [0]
      }
    ]
  }, {
    name: actionNames.EFFECTopenBedroomLights,
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
      2900, 0, 0, 0, 0, 0,
      488, 0, 0, 0, 0,
      250, 0, 0, 0, 0
    ],
    expectedListeners: [
      {
        listenerName: listenersNames.bedroomMemorialLightReadswitch,
        listenerValues: [0]
      }
    ], mp3Configs: [
      {
        name: mp3sNames.livingRoomSoundEffects,
        tracks: ['g'],
        timeouts: [0],
        volumes: [9]
      }
    ]
  }, {
    name: actionNames.EFFECTopenBedroomCloset,
    emitterConfigs: {
      scary: [
        {
          name: emittersNames.suicidedCandleRelay,
          config: {
            method: relayMethods.open
          }
        },  {
          name: emittersNames.memorialLightRelay,
          config: {
            method: relayMethods.open
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
          name: emittersNames.livingRoomLight4,
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
          name: emittersNames.bedroomWallLight,
          config: {
            method: relayMethods.close
          }
        }, {
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
          name: emittersNames.nextToBedLightRight,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.nextToBedLightRight,
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
          name: emittersNames.nextToBedLightRight,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.nextToBedLightRight,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.nextToBedLightRight,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.bedroomWallLight,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.momClosetRelay,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.nextToBedLightRight,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.bedroomWallLight,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.nextToBedLightRight,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.bedroomWallLight,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.nextToBedLightRight,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.bedroomWallLight,
          config: {
            method: relayMethods.open
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
        }
      ],
      notScary: [
        {
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
          name: emittersNames.bedroomWallLight,
          config: {
            method: relayMethods.open
          }
        }, {
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
          name: emittersNames.bedroomWallLight,
          config: {
            method: relayMethods.close
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
          name: emittersNames.bedroomWallLight,
          config: {
            method: relayMethods.open
          }
        }, {
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
          name: emittersNames.bedroomWallLight,
          config: {
            method: relayMethods.close
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
          name: emittersNames.bedroomWallLight,
          config: {
            method: relayMethods.open
          }
        }, {
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
          name: emittersNames.bedroomWallLight,
          config: {
            method: relayMethods.close
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
          name: emittersNames.bedroomWallLight,
          config: {
            method: relayMethods.open
          }
        }, {
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
          name: emittersNames.momClosetRelay,
          config: {
            method: relayMethods.close
          }
        }

      ]
    },
    emittersTimeouts: {
      scary: [
        0, 0, 0, 0, 0, // Suicidal, memorial light, light and living room lights turn off
        0, 0, 0, 300, 0, 0, 700, 0, 0, // Flash bedroom lights
        3200, 300, // Claps Lights
        4500, 300,// Claps Lights
        4900, 300, // Claps Lights
        7700, 0, // Lights on + clap
        0, // Open bedroom closet
        300, 0, // Lights Off,  + clap
        1700, 0, // Flash with soundtrack
        300, 0, // Flash with soundtrack
        1500, 0 // Open Lights
      ],
      notScary: [
        0, 0, 0,
        500, 0, 0,
        500, 0, 0,
        500, 0, 0,
        500, 0, 0,
        500, 0, 0,
        500, 0, 0,
        500, 0, 0
      ]
    },
    expectedListeners: [
      {
        listenerName: listenersNames.momCandlestickReadswitch,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.closetCandlestickReadSwitch,
        listenerValues: [0]
      }, {
        listenerName: listenersNames.suicidedCandlestickReadswitch,
        listenerValues: [0]
      }
    ],
    actionDependencies: [
      actionNames.EFFECTopenBedroomLights
    ],
    mp3Configs: {
      scary: [
        {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['h'],
          timeouts: [0],
          volumes: [9]
        }, {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['0'],
          timeouts: [1000]
        }, {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['s'],
          timeouts: [4000],
          volumes: [7]
        }, {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['s'],
          timeouts: [9000],
          volumes: [7]
        }, {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['s'],
          timeouts: [14000],
          volumes: [8]
        }, {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['4'],
          timeouts: [17000],
          volumes: [9]
        }, {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['s'],
          timeouts: [22000],
          volumes: [10]
        }, {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['v'],
          timeouts: [23000]
        }
      ],
      notScary: [
        {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['h'],
          timeouts: [0],
          volumes: [9]
        }, {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['0'],
          timeouts: [1000]
        }
      ]
    }
  }, {
    name: actionNames.EFFECTthrowCutterEffect,
    emitterConfigs: {
      scary :[
        {
          name: emittersNames.nextToBedLightRight,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.nextToBedLightLeft,
          config: {
            method: relayMethods.open
          }
        },
          emittersNames.lettersMagnetsRelay,
          emittersNames.lettersMagnetsRelay,
        {
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
          name: emittersNames.livingRoomLight4,
          config: {
            method: relayMethods.close
          }
        },
         {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        },{
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        },{
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        },{
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        },{
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        },

        {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        },
        {
          name: emittersNames.airConditionerRelay,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.airConditionerServosRelay,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.airConditionerHatchServo,
          config: {
            to: 50
          }
        },{
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
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
        },{
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
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
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.airConditionerServosRelay,
          config: {
            method: relayMethods.close
          }
        },{
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight4,
          config: {
            method: relayMethods.close
          }
        },

        {
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
          name: emittersNames.livingRoomLight4,
          config: {
            method: relayMethods.open
          }
        },
        emittersNames.lettersMagnetsRelay,
        {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        },  {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.windowNoiser,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.windowNoiser,
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
      notScary: [
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
        }
      ]
    },
    emittersTimeouts: {
      scary: [
        0, 100, // close bed room
        1000, 1000, // Boom from living room
        1000, 300, 200, 200, 200, 200, 900, // Flash living room lights
        900, 500, 500, 300, 500, 300, 200, 800, 200, 1000, // Lights and noiser

        1000, 500, 1000, 500, 500, 300, 800, 400, // Flash kidsroom lights
        400, 600, // Flash kidsroom lights

        500, 500, 0, 500, 0, 500, 250, 250, 100, 0, 100, 500, 400, 100, // Throw cutter and flash kidsroom lights

        0, 0, // switch living room lights

        600, 0, 2000, 0, 200, 0, 2000, 0, 300, 0, 1000, 0,
        1000, 0, 500, 0, 2000, 0,
        200, 0, 1000, 0, 300, 0, 1000, 0, 500, 0, 2000, 0,
        1000, 0,  500, 0, 2000, 0, 500, 0, 1000, 0,// flash kidsroom light
        30.3 * 1000 + 1500, // Close living room light

        2000, // Boom from living room

        6500, 0, 100, 0, 100, 0, 100, 0, // Twinkle twinkle lights sync
        24100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0,
        13800, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0,
        4200, 0, 100, 0, 100, 0, 100, 0,
        4300, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0,
        700, 0, 100, 0,
        700, 0, 100, 0,
        900, 0, 100, 0,
        500, 0, 100, 0,
        200, 0, 100, 0, 100, 0,
        100, 0, // Drop lights

        21 * 1000, 200,  // Noiser
        2000, 0, 0, 0, 0 // Open lights
      ],
      notScary: [
        0, // close living room light
        1000, 0, 500, 500, 500, 0, 0, 100, 900, // Throw cutter and open living room light
        6300, 0, // Close bedroom lights

        700, 0, 2000, 0, 200, 0, 2000, 0, 300, 0, 1000, 0,
        1000, 0, 11500, 0, 500, 0, 2000, 0,
        200, 0, 1000, 0, 300, 0, 1000, 0, 500, 0, 3000, 0, 500, 0, 2000, 0,
        1000, 0, 5000, 0, 500, 0, 2000, 0, 500, 0, 1000, 0,// flash kidsroom light
        1000, 0, 0,// open kidsroom light

        120 * 1000
      ]
    },
    expectedListeners: [
      {
        listenerName: listenersNames.clockReadswitch1,
        listenerValues: [0]
      },  {
        listenerName: listenersNames.clockReadswitch2,
        listenerValues: [0]
      }
    ],
    actionDependencies: [
      actionNames.EFFECTopenBedroomCloset
    ],
    mp3Configs: {
      scary: [
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
          timeouts: [60 * 1000 + 15 * 1000]
        }, {
          name: mp3sNames.livingRoomSoundEffects,
          state:  {
            open: true,
            timeout: 60 * 1000 + 20 * 1000
          },
          tracks: ['1'],
          timeouts: [60 * 1000 + 74 * 1000]
        }, {
          name: mp3sNames.kidsRoomSoundEffects,
          state:  {
            open: true,
            timeout: 60 * 1000 + 90 * 1000
          },
          tracks: ['a', '-', '-', '-', '-'],
          timeouts: [
            60 * 1000 + 95 * 1000,
            60 * 1000 + 95.5 * 1000,
            60 * 1000 + 96 * 1000,
            60 * 1000 + 96.5 * 1000,
            60 * 1000 + 97 * 1000
          ],
          volumes: [5, 6, 7, 8, 9]
        }
      ],
      notScary: [
        {
          name: mp3sNames.livingRoomSoundEffects,
          tracks: ['m'],
          timeouts: [0]
        },{
          name: mp3sNames.kidsRoomSoundEffects,
          state:  {
            open: true,
            timeout: 10 * 1000
          },
          tracks: ['a', '-', '-', '-', '-'],
          timeouts: [
            52 * 1000,
            52 * 1500,
            52 * 2000,
            52 * 2500,
            52 * 3000
          ],
          volumes: [5, 6, 7, 8, 9]
        }
      ]
    }
  }, {
    name: actionNames.EFFECTopenHoleEffect,
    emitterConfigs: {
      scary: [
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
      notScary: [
        {
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
          name: emittersNames.holeRelay,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.livingRoomLight1,
          config: {
            method: relayMethods.close
          }
        }
      ]
    },
    emittersTimeouts: {
      scary:[
        0, 3000, 3000, 3000, 0,  // Fade lights out
        9500//Open hole door
      ],
      notScary: [
        0, 3000, 3000, 0, 0,  // Fade lights out
        6500, //Open hole door
        60 * 1000 // Open living room light
      ]
    },
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
    mp3Configs: {
      scary: [
        {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['c'],
          timeouts: [9 * 1000]
        }, {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['o'],
          timeouts: [18 * 1000]
        }
      ],
      notScary: [
        {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['-', '-', '-','-','-','-','-', '0'],
          timeouts: [
            0,
            500,
            500,
            500,
            500,
            500,
            500,
            500
          ],
          volumes: [7, 6, 5, 4, 3, 2, 1]
        },
        {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['c'],
          timeouts: [6 * 1000]
        }
      ]
    }
  }, {
    name: actionNames.EFFECTplayingBoxEffect,
    emitterConfigs: {
      scary: [
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
      notScary: [
        {
          name: emittersNames.kidsroomLight1,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
          config: {
            method: relayMethods.close
          }
        },  {
          name: emittersNames.playingBoxRelay,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.dollRelay,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.playingBoxRelay,
          config: {
            method: relayMethods.close
          }
        }
      ]
    },
    emittersTimeouts: {
      scary: [
        0, 0, 0, 200, 0, 0, // Zap kidsroom lights
        0, 15 * 1000 // Start playing box
      ],
      notScary: [
        0, 200,
        0, 500, 1000
      ]
    },
    expectedListeners: [
      {
        listenerName: listenersNames.kidsroomKillerPictureReadswitch,
        listenerValues: [0]
      }
    ],
    mp3Configs: {
      scary:[
        {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['0'],
          timeouts: [200]
        }
      ],
      notScary: [
        {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['n'],
          timeouts: [1700]
        }
      ]
    }
  }, {
    name: actionNames.EFFECTshowDollEffect,
    emitterConfigs: {
      scary: [
        {
          name: emittersNames.dollRelay,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.dollRelay,
          config: {
            method: relayMethods.open
          }
        }
      ],
      notScary: [

      ]
    },
    emittersTimeouts: {
      scary: [
        1000, // Break wall - depends on video length
        5000
      ],
      notScary: [

      ]
    },
    expectedListeners: [],
    mp3Configs: {
      scary: [
        {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['p', '-', '-'],
          timeouts: [0, 17 * 1000, 2000], // depends on video length
          volumes: [8, 9, 10]
        },  {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['n'],
          timeouts: [22 * 1000] // depends on video length
        }
      ],
      notScary: [

      ]
    }
  }, {
    name: actionNames.EFFECTopenHoleExitEffect,
    emitterConfigs: {
      scary: [
        {
          name: emittersNames.kidsroomLight1,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight1,
          config: {
            method: relayMethods.open
          }
        },  {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight1,
          config: {
            method: relayMethods.open
          }
        },  {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight1,
          config: {
            method: relayMethods.open
          }
        },  {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        },  {
          name: emittersNames.holeExitRelay,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.dollRelay,
          config: {
            method: relayMethods.close
          }
        }
      ],
      notScary: [
        {
          name: emittersNames.kidsroomLight1,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight1,
          config: {
            method: relayMethods.open
          }
        },  {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight1,
          config: {
            method: relayMethods.open
          }
        },  {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight1,
          config: {
            method: relayMethods.open
          }
        },  {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight1,
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
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight3,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.open
          }
        }, {
          name: emittersNames.kidsroomLight2,
          config: {
            method: relayMethods.close
          }
        }, {
          name: emittersNames.kidsroomLight1,
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
        }
      ]
    },
    emittersTimeouts: {
      scary:[
        0, 200, 500, 200, 200, 200, 0, 200, 0, 150, 600, 150, 300, 200, 500, 200, 0, 150, 600, 200, 1000, 150,
        300, 200, 400, 200, 100, 200, 300, 150, 0, 150, 0, 150, 0, 150, 300, 200, 600, 150, 200, 200, 400, 150,
        100, 200, 500, 150, 300, 150, 700, 200, 200, 200, 0, 200, 0, 150, 0, 150, 0, 150, 300, 150, 200, 100, 200,
        0,  // Open exit
        7000 // Drop doll wall
      ],
      notScary: [
        0, 200, 500, 200, 200, 200, 0, 200, 0, 150, 600, 150, 300, 200, 500, 200, 0, 150, 600, 200, 1000, 150,
        300, 200, 400, 200, 100, 200, 300, 150, 0, 150, 0, 150, 0, 150, 300, 200, 600, 150, 200, 200, 400, 150,
        100, 200, 500, 150, 300, 150, 700, 200, 200, 200, 0, 200, 0, 150, 0, 150, 0, 150, 300, 150, 200, 100, 200,
        200, 0, 0, // open kidsroom lights
        0  // Open exit
      ]
    },
    actionDependencies: [
      actionNames.EFFECTshowDollEffect
    ],
    expectedListeners: [
      {
        listenerName: listenersNames.railReadswitch,
        listenerValues: [0]
      }
    ],
    mp3Configs: {
      scary: [
        {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['-'],
          timeouts: [0],
          volumes: [9]
        }, {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['-'],
          timeouts: [500],
          volumes: [8]
        }, {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['-'],
          timeouts: [1000],
          volumes: [7]
        }, {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['-'],
          timeouts: [1500],
          volumes: [6]
        }, {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['-'],
          timeouts: [2000],
          volumes: [5]
        }, {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['-'],
          timeouts: [2500],
          volumes: [4]
        }, {
          name: mp3sNames.kidsRoomSoundEffects,
          tracks: ['r'],
          timeouts: [3000],
          volumes: [10]
        }
      ],
      notScary: [

      ]
    }
  }
];
