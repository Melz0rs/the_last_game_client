import emittersNames from '../constants/emittersNames';
import emitterTypes from '../constants/emitterTypes';

export default [
  [{
    pin: 12,
    name: emittersNames.closetToBedroomRelay,
    emitterType: emitterTypes.relay
  }, {
    pin: 3,
    name: emittersNames.bedroomVanityLightRelay,
    emitterType: emitterTypes.relay
  }, {
    pin: 5,
    name: emittersNames.bedroomMemorialLightRelay,
    emitterType: emitterTypes.relay
  }, {
      pin: 6,
      name: emittersNames.tempServo,
      emitterType: emitterTypes.servo,
      range: [0, 270]
  }, {
    pin: 7,
    name: emittersNames.tempRelay,
    emitterType: emitterTypes.relay
  }], [

  ], [

  ]
];
