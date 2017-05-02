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
    },
    {
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
  ], [
    {
      pin: 6,
      actionName: actionNames.toggleClosetToBedroomMagnet,
      name: listenersNames.drawer1Readswitch
    },
    {
      pin: 8,
      actionName: actionNames.toggleClosetToBedroomMagnet,
      name: listenersNames.drawer3Readswitch
    }, {
      pin: 9,
      actionName: actionNames.toggleClosetToBedroomMagnet,
      name: listenersNames.drawer4Readswitch
    }

  ], [
    {
      pin: 3,
      actionName: actionNames.throwCutter,
      name: listenersNames.clockReadswitch1
    }, {
      pin: 4,
      actionName: actionNames.throwCutter,
      name: listenersNames.clockReadswitch2
    }, {
      pin: 6,
      actionName: actionNames.toggleLettersMagnets,
      name: listenersNames.drawerMovementSensor,
      listenerType: listenerTypes.movementSensor
    }, {
      pin: 9,
      actionName: actionNames.toggleLettersMagnets,
      name: listenersNames.kidsroomPicture6Readswitch
    }
  ]
];
