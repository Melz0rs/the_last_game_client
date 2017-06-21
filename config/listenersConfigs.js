import actionNames from '../constants/actionsNames';
import listenersNames from '../constants/listenersNames';
import listenerTypes from '../constants/listenerTypes';
export default [
  [
    {
      pin: 33,
      actionName: actionNames.EFFECTopenHoleEffect,
      name: listenersNames.kidsroomPictureDadReadswitch
    }, {
      pin: 32,
      actionName: actionNames.EFFECTopenHoleEffect,
      name: listenersNames.kidsroomMomPictureReadswitch
    }, {
      pin: 31,
      actionName: actionNames.EFFECTopenHoleEffect,
      name: listenersNames.kidsroomDollPictureReadswitch
    }, {
      pin: 30,
      actionName: actionNames.EFFECTplayingBoxEffect,
      name: listenersNames.kidsroomKillerPictureReadswitch
    }, {
      pin: 29,
      actionName: actionNames.EFFECTopenHoleEffect,
      name: listenersNames.kidsroomFamilyReadswitch
    }, {
      pin: 28,
      actionName: actionNames.EFFECTopenHoleEffect,
      name: listenersNames.kidsroomGhostPictureReadswitch
    }, {
      pin: 25,
      actionName: actionNames.EFFECTopenClosetToBedroomEffect,
      name: listenersNames.drawer1Readswitch
    }, {
      pin: 24,
      actionName: actionNames.EFFECTopenClosetToBedroomEffect,
      name: listenersNames.drawer2Readswitch
    }, {
      pin: 23,
      actionName: actionNames.EFFECTopenClosetToBedroomEffect,
      name: listenersNames.drawer3Readswitch
    },
     {
       pin: 22,
       actionName: actionNames.EFFECTopenClosetToBedroomEffect,
       name: listenersNames.drawer4Readswitch
     },
    {
      pin: 4,
      actionName: actionNames.EFFECTthrowCutterEffect,
      name: listenersNames.clockReadswitch1,
      debounceTime: 100 // TODO: Change to 100

    }, {
      pin: 5,
      actionName: actionNames.EFFECTthrowCutterEffect,
      name: listenersNames.clockReadswitch2,
      debounceTime: 100 // TODO: Change to 100
    },
    {
      pin: 6,
      actionName: actionNames.EFFECTdropLettersEffect,
      name: listenersNames.drawerMovementSensor,
      listenerType: listenerTypes.movementSensor
    },
    {
      pin: 7,
      actionName: actionNames.EFFECTopenBedroomCloset,
      name: listenersNames.candlestickReadswitch1
    }, {
      pin: 8,
      actionName: actionNames.EFFECTopenBedroomCloset,
      name: listenersNames.candlestickReadswitch2
    }, {
      pin: 9,
      actionName: actionNames.EFFECTopenBedroomCloset,
      name: listenersNames.candlestickReadswitch3
    }, {
      pin: 11,
      actionName: actionNames.EFFECTopenMemorialLight,
      name: listenersNames.bedroomVanityPictureReadswitch,
      debounceTime: 100
    }, {
      pin: 10,
      actionName: actionNames.EFFECTopenHoleExitEffect,
      name: listenersNames.railReadswitch
    }
  ], [
    {
      pin: '35',
      actionName: actionNames.EFFECTopenBedroomLights,
      name: listenersNames.bedroomMemorialLightReadswitch
    }
    // , {
    //   pin: '34',
    //   actionName: actionNames.toggleHoleExitMagnet,
    //   name: listenersNames.hallwayProximitySensor,
    //   listenerType: listenerTypes.proximity
    // }
  ]
];
