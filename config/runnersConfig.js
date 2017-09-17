import runnersNames from '../constants/runnersNames';
import actionsNames from '../constants/actionsNames';
import states from '../constants/states';

export default [
  {
    name: runnersNames.preGameZapLightsRunner,
    actionName: actionsNames.zapPreGameLight,
    defaultState: states.stopped
  }, {
    name: runnersNames.zapFireplaceLight,
    actionName: actionsNames.zapFireplaceLight,
    defaultState: states.stopped
  }
];
