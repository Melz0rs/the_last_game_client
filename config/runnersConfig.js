import runnersNames from '../constants/runnersNames';
import actionsNames from '../constants/actionsNames';
import states from '../constants/states';

export default [
  {
    name: runnersNames.bedroomVanityLightRunner,
    actionName: actionsNames.flashBedroomVanityLight,
    defaultState: states.stopped
  },  {
    name: runnersNames.lightningRunner,
    actionName: actionsNames.flashLightnings,
    defaultState: states.stopped
  }
];
