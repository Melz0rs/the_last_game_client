import actionNames from '../constants/actionsNames';
import emittersNames from '../constants/emittersNames';
import listenersNames from '../constants/listenersNames';


export default [
  {
    name: actionNames.wekslerAction,
    emitterNames: [
      emittersNames.closetToBedroom,
      emittersNames.closetToBedroom,
      emittersNames.closetToBedroom
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
    name : 'carmelAction',
    emitterNames: [
      emittersNames.closetToBedroom
    ],
    timeouts: [],
    expectedListeners: [{
      listenerName: listenersNames.closetKnobListener,
      listenerValues: [0]
    }]
  }
];
