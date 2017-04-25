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
    timeouts: [0],
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
    timeouts: [0, 300, 400, 300, 500, 400, 200, 500],
    expectedListeners: []
  },  {
    name: actionNames.toggleMirror,
    emitterConfigs: [
      emittersNames.mirrorRelay,
      emittersNames.mirrorRelay
    ],
    timeouts: [0, 10000]
  }, {
    name: actionNames.toggleMemorialLight,
    emitterConfigs: [
      emittersNames.memorialLightRelay
    ],
    timeouts: [0],
    expectedListeners: [
      {
        listenerName: listenersNames.bedroomVanityPictureReadswitch,
        listenerValues: [0]
      }
    ]
  }, {
    name: actionNames.toggleHoleDoor,
    emitterConfigs: [
      emittersNames.holeRelay
    ],
    timeouts: [0],
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
    timeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleClosetToBedroomMagnet,
    emitterConfigs: [
      emittersNames.closetToBedroomRelay
    ],
    timeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleDollMagnet,
    emitterConfigs: [
      emittersNames.dollRelay
    ],
    timeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleHoleExitMagnet,
    emitterConfigs: [
      emittersNames.holeExitRelay
    ],
    timeouts: [0],
    expectedListeners: []
  }, {
    name: actionNames.toggleOperativeWallKidsRoom,
    emitterConfigs: [
      emittersNames.operativeWallKidsRoomRelay,
      emittersNames.operativeWallKidsRoomRelay
    ],
    timeouts: [0, 1000],
    expectedListeners: []
  },{
    name: actionNames.toggleLettersMagnets,
    emitterConfigs: [
      emittersNames.lettersMagnetsRelay
    ],
    timeouts: [0],
    expectedListeners: []
  },{
    name: actionNames.toggleVanityLight,
    emitterConfigs: [
      emittersNames.vanityLightRelay
    ],
    timeouts: [0],
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
          to: 180
        }
      }, {
        name: emittersNames.airConditionerHatchServo,
        config: {
          to: 0
        }
      },
      emittersNames.airConditionerRelay
    ],
    timeouts: [0, 500, 1000, 1000, 1000, 0]
  }
  // {
  //   name : actionNames.tempCloseRelay,
  //   emitterConfigs: [
  //     {
  //       name: emittersNames.tempRelay,
  //       config: {
  //         method: relayMethods.close
  //       }
  //     }
  //   ],
  //   timeouts: [0, 2000, 2000],
  //   expectedListeners: [
  //     // { // TODO: Add listeners
  //     // listenerName: listenersNames.bedroomVanityPictureReadswitch,
  //     // listenerValues: [0]
  //     // }
  //   ]
  // },
  // {
  //   name : actionNames.resetServo,
  //   emitterConfigs: [
  //     {
  //       name: emittersNames.tempServo,
  //       config: {
  //         to: 0
  //       }
  //     }
  //   ],
  //   timeouts: [0],
  //   expectedListeners: [
  //     // { // TODO: Add listeners
  //     // listenerName: listenersNames.bedroomVanityPictureReadswitch,
  //     // listenerValues: [0]
  //     // }
  //   ]
  // }
  // , {
  //   name : actionNames.bedroomVanityLightRunner,
  //   emitterNames: [
  //     emittersNames.closetToBedroomEmitter,
  //     emittersNames.closetToBedroomEmitter
  //   ],
  //   timeouts: [0, 300],
  //   expectedListeners: [{
  //     listenerName: listenersNames.closetKnobListener,
  //     listenerValues: [0]
  //   }]
  // }
];
