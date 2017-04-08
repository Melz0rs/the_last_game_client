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
    expectedListeners: [],
  }, {
    name: actionNames.openClosetToBedroom,
    emitterConfigs: [
      emittersNames.closetToBedroomRelay
    ],
    timeouts: [3000],
    expectedListeners: [],
    runnerName: runnersNames.bedroomVanityLightRunner,
    mp3Config: {
      name: mp3sNames.soundsEffects,
      track: 'a'
    }
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
  }, {
    name : actionNames.openBedroomMemorialLight,
    emitterConfigs: [
      emittersNames.bedroomMemorialLightRelay
    ],
    timeouts: [0],
    expectedListeners: [{
      listenerName: listenersNames.bedroomVanityPictureReadswitch,
      listenerValues: [0]
    }],
    runnerName: runnersNames.bedroomVanityLightRunner
  }, {
    name : actionNames.placePictureOnMemorial,
    emitterConfigs: [
      {
        name: emittersNames.tempServo,
        config: {
          to: 45
        }
      }, {
        name: emittersNames.tempServo,
        config: {
          to: 90
        }
      }, {
        name: emittersNames.tempServo,
        config: {
          to: 135
        }
      },
    ],
    timeouts: [0, 2000, 2000],
    expectedListeners: [
      // { // TODO: Add listeners
      // listenerName: listenersNames.bedroomVanityPictureReadswitch,
      // listenerValues: [0]
    // }
    ]
  }, {
    name : actionNames.tempCloseRelay,
    emitterConfigs: [
      {
        name: emittersNames.tempRelay,
        config: {
          method: relayMethods.close
        }
      }
    ],
    timeouts: [0, 2000, 2000],
    expectedListeners: [
      // { // TODO: Add listeners
      // listenerName: listenersNames.bedroomVanityPictureReadswitch,
      // listenerValues: [0]
      // }
    ]
  }, {
    name : actionNames.resetServo,
    emitterConfigs: [
      {
        name: emittersNames.tempServo,
        config: {
          to: 0
        }
      }
    ],
    timeouts: [0],
    expectedListeners: [
      // { // TODO: Add listeners
      // listenerName: listenersNames.bedroomVanityPictureReadswitch,
      // listenerValues: [0]
      // }
    ]
  }
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
