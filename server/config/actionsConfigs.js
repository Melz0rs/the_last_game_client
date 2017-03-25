import actionNames from '../constants/actionsNames';
import emittersNames from '../constants/emittersNames';

export default [
  {
    name: actionNames.dropLivingRoomVaseAndOpenClosetToBedroom,
    emitterNames: [emittersNames.livingRoomVase, emittersNames.closetToBedroom, emittersNames.livingRoomVase, emittersNames.closetToBedroom],
    timeouts: [0, 1000, 1000, 1000]
  }, {
    name: actionNames.openClosetToBedroomAndDropLivingRoomVase,
    emitterNames: [emittersNames.closetToBedroom, emittersNames.livingRoomVase, emittersNames.closetToBedroom, emittersNames.livingRoomVase],
    timeouts: [0, 500, 500, 500]
  }, {
    name: actionNames.toggleClosetToBedroom,
    emitterNames: [emittersNames.closetToBedroom]
  }, {
    name: actionNames.rapidToggleBedroomCloset,
    emitterNames: [emittersNames.closetToBedroom, emittersNames.closetToBedroom, emittersNames.closetToBedroom, emittersNames.closetToBedroom ,
      emittersNames.closetToBedroom , emittersNames.closetToBedroom , emittersNames.closetToBedroom, emittersNames.closetToBedroom,
      emittersNames.closetToBedroom, emittersNames.closetToBedroom],
    timeouts: [200, 200, 200, 200, 200, 200, 200, 200, 200 ,200]
  }, {
    name: actionNames.ransAction,
    emitterNames: [
      emittersNames.closetToBedroom,
      emittersNames.closetToBedroom,
      emittersNames.livingRoomVase,
      emittersNames.closetToBedroom,
      emittersNames.closetToBedroom,
      emittersNames.livingRoomVase,
      emittersNames.closetToBedroom,
      emittersNames.closetToBedroom,
      emittersNames.livingRoomVase,
      emittersNames.closetToBedroom,
      emittersNames.closetToBedroom,
      emittersNames.livingRoomVase,
      emittersNames.closetToBedroom,
      emittersNames.closetToBedroom,
      emittersNames.livingRoomVase,
      emittersNames.closetToBedroom,
      emittersNames.closetToBedroom,
      emittersNames.livingRoomVase,
      emittersNames.closetToBedroom,
      emittersNames.closetToBedroom,
      emittersNames.livingRoomVase,
      emittersNames.closetToBedroom,
      emittersNames.closetToBedroom,
      emittersNames.livingRoomVase,
      emittersNames.closetToBedroom,
      emittersNames.closetToBedroom,
      emittersNames.livingRoomVase,
      emittersNames.closetToBedroom,
      emittersNames.closetToBedroom,
      emittersNames.livingRoomVase,
    ],
    timeouts: [0, 300, 300,
      500, 300, 300,
      500, 300, 300,
      500, 300, 300,
      500, 300, 300,
      500, 300, 300,
      500, 300, 300,
      500, 300, 300,
      500, 300, 300,
      500, 300, 300,
    ]
  }
];
