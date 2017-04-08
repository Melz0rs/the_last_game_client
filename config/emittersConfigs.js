import emittersNames from '../constants/emittersNames';
import emitterTypes from '../constants/emitterTypes';
import relayMethods from '../constants/relayMethods';

export default [
  [{
    pin: 12,
    name: emittersNames.closetToBedroomRelay,
    emitterType: emitterTypes.relay,
    defaults: {
      method: relayMethods.open
    }
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
      range: [0, 180]
  }, {
    pin: 7,
    name: emittersNames.tempRelay,
    emitterType: emitterTypes.relay
  }], [

  ], [

  ]
];
