import actionNames from '../constants/actionsNames';
import listenersNames from '../constants/listenersNames';
import listenerTypes from '../constants/listenerTypes';
export default [
  [
    {
      pin: 3,
      actionName: actionNames.toggleHoleDoor,
      name: listenersNames.kidsroomPicture1Readswitch
    }, {
      pin: 4,
      actionName: actionNames.toggleHoleDoor,
      name: listenersNames.kidsroomPicture2Readswitch
    },
    {
      pin: 5,
      actionName: actionNames.toggleHoleDoor,
      name: listenersNames.kidsroomPicture3Readswitch
    }, {
      pin: 6,
      actionName: actionNames.toggleHoleDoor,
      name: listenersNames.kidsroomPicture4Readswitch
    },
    {
      pin: 7,
      actionName: actionNames.toggleHoleDoor,
      name: listenersNames.kidsroomPicture5Readswitch
    }, {
      pin: 9,
      actionName: actionNames.toggleMemorialLight,
      name: listenersNames.bedroomVanityPictureReadswitch
    }
    // , {
    //   pin: 8,
    //   actionName: actionNames.openHole,
    //   name: listenersNames.kidsroomPicture2Readswitch
    // },  {
    //   pin: 9,
    //   actionName: actionNames.openHole,
    //   name: listenersNames.kidsroomPicture3Readswitch
    // },  {
    //   pin: 10,
    //   actionName: actionNames.openHole,
    //   name: listenersNames.kidsroomPicture4Readswitch

  ], [
    {
      pin: 6,
      actionName: actionNames.toggleClosetToBedroomMagnet,
      name: listenersNames.drawer1Readswitch
    }, {
      pin: 7,
      actionName: actionNames.toggleClosetToBedroomMagnet,
      name: listenersNames.drawer2Readswitch
    }, {
      pin: 8,
      actionName: actionNames.toggleClosetToBedroomMagnet,
      name: listenersNames.drawer3Readswitch
    }, {
      pin: 9,
      actionName: actionNames.toggleClosetToBedroomMagnet,
      name: listenersNames.drawer4Readswitch
    }, {
      pin: 11,
      actionName: actionNames.toggleMirror,
      name: listenersNames.tempMovementSensor,
      listenerType: listenerTypes.movementSensor
    }
  ], [

  ]
];
