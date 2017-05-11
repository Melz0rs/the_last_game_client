import actionNames from '../constants/actionsNames';
import listenersNames from '../constants/listenersNames';
import listenerTypes from '../constants/listenerTypes';
export default [
  [
    {
      pin: 33,
      actionName: actionNames.toggleHoleDoor,
      name: listenersNames.kidsroomPicture1Readswitch
    }, {
      pin: 32,
      actionName: actionNames.toggleHoleDoor,
      name: listenersNames.kidsroomPicture2Readswitch
    }, {
      pin: 31,
      actionName: actionNames.toggleHoleDoor,
      name: listenersNames.kidsroomPicture3Readswitch
    }, {
      pin: 30,
      actionName: actionNames.toggleHoleDoor,
      name: listenersNames.kidsroomPicture4Readswitch
    }, {
      pin: 29,
      actionName: actionNames.toggleHoleDoor,
      name: listenersNames.kidsroomPicture5Readswitch
    }, {
      pin: 28,
      actionName: actionNames.toggleHoleDoor,
      name: listenersNames.kidsroomPicture6Readswitch
    }, {
      pin: 25,
      actionName: actionNames.toggleClosetToBedroomMagnet,
      name: listenersNames.drawer1Readswitch
    }, {
      pin: 24,
      actionName: actionNames.toggleClosetToBedroomMagnet,
      name: listenersNames.drawer2Readswitch
    }, {
      pin: 23,
      actionName: actionNames.toggleClosetToBedroomMagnet,
      name: listenersNames.drawer3Readswitch
    },
     {
       pin: 22,
       actionName: actionNames.toggleClosetToBedroomMagnet,
       name: listenersNames.drawer4Readswitch
     },
    {
      pin: 4,
      actionName: actionNames.throwCutter,
      name: listenersNames.clockReadswitch1
    }, {
      pin: 5,
      actionName: actionNames.throwCutter,
      name: listenersNames.clockReadswitch2
    }, {
      pin: 6,
      actionName: actionNames.toggleLettersMagnets,
      name: listenersNames.drawerMovementSensor,
      listenerType: listenerTypes.movementSensor
    }, {
      pin: 7,
      actionName: actionNames.toggleMomClosetMagnet,
      name: listenersNames.candlestickReadswitch1
    }, {
      pin: 8,
      actionName: actionNames.toggleMomClosetMagnet,
      name: listenersNames.candlestickReadswitch2
    }, {
      pin: 9,
      actionName: actionNames.toggleMomClosetMagnet,
      name: listenersNames.candlestickReadswitch3
    }, {
      pin: 10,
      actionName: actionNames.toggleHoleExitMagnet,
      name: listenersNames.railReadswitch
    }, {
      pin: 11,
      actionName: actionNames.toggleHoleExitMagnet,
      name: listenersNames.bedroomMemorialLightReadswitch
    }
  ]
];
