import actionNames from '../constants/actionsNames';
import emittersNames from '../constants/emittersNames';
import listenersNames from '../constants/listenersNames';
import runnersNames from '../constants/runnersNames';


export default [
  {
    name: actionNames.wekslerAction,
    emitterNames: [
      emittersNames.closetToBedroomEmitter,
      emittersNames.closetToBedroomEmitter,
      emittersNames.closetToBedroomEmitter
    ],
    timeouts: [0, 500, 500],
    expectedListeners: [{
      listenerName: listenersNames.kidsroomPicture2Listener,
      listenerValues: [0]
    }, {
      listenerName: listenersNames.kidsroomPicture1Listener,
      listenerValues: [0]
    }]
  }, {
    name : actionNames.carmelAction,
    emitterNames: [
      emittersNames.closetToBedroomEmitter
    ],
    timeouts: [],
    expectedListeners: [{
      listenerName: listenersNames.closetKnobListener,
      listenerValues: [0]
    }],
    runnerName: runnersNames.bedroomVanityLightRunner
  }, {
    name : actionNames.bedroomVanityLightRunner,
    emitterNames: [
      emittersNames.closetToBedroomEmitter,
      emittersNames.closetToBedroomEmitter
    ],
    timeouts: [0, 300],
    expectedListeners: [{
      listenerName: listenersNames.closetKnobListener,
      listenerValues: [0]
    }]
  }
];
