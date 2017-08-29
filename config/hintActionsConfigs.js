import relayMethods from '../constants/relayMethods';
import actionNames from '../constants/actionsNames';
import emittersNames from '../constants/emittersNames';

export default [
  {
    name: actionNames.lettersHint,
    emitterConfigs: [
      {
        name: emittersNames.lettersMagnetsRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.lettersMagnetsRelay,
        config: {
          method: relayMethods.close
        }
      },  {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      },
    ],
    emittersTimeouts: [0, 300, 200, 1000],
    expectedListeners: []
  }, {
    name: actionNames.memorialLightPictureHint,
    emitterConfigs: [
      {
        name: emittersNames.memorialLightRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.memorialLightRelay,
        config: {
          method: relayMethods.close
        }
      },  {
        name: emittersNames.memorialLightRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.memorialLightRelay,
        config: {
          method: relayMethods.close
        }
      },
    ],
    emittersTimeouts: [0, 500, 500, 500],
    expectedListeners: []
  }, {
    name: actionNames.memorialLightKeyHint,
    emitterConfigs: [
      {
        name: emittersNames.memorialLightNoiser,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.memorialLightNoiser,
        config: {
          method: relayMethods.close
        }
      },  {
        name: emittersNames.memorialLightNoiser,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.memorialLightNoiser,
        config: {
          method: relayMethods.close
        }
      },
    ],
    emittersTimeouts: [0, 500, 500, 500],
    expectedListeners: []
  }, {
    name: actionNames.forgotFlashLights,
    emitterConfigs: [
     {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.close
        }
      },  {
        name: emittersNames.vanityLightRelay,
        config: {
          method: relayMethods.close
        }
      }, {
        name: emittersNames.vanityLightRelay,
        config: {
          method: relayMethods.open
        }
      }, {
        name: emittersNames.livingRoomLight1,
        config: {
          method: relayMethods.open
        }
      }
    ],
    emittersTimeouts: [0, 0, 25 * 1000, 0],
    expectedListeners: []
  }
];
