import runnersNames from '../constants/runnersNames';
import actionsNames from '../constants/actionsNames';
import states from '../constants/states';

export default [
  {
    name: runnersNames.preGameZapLightsRunner,
    actionName: actionsNames.zapPreGameLight,
    defaultState: states.stopped
  }
];
