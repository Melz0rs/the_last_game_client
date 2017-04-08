import boardsSetupService from '../services/boardsSetupService';
import utils from '../services/utils';
import states from '../../constants/states';


export default class Runner {
  constructor(config) {
    this.name = config.name;
    this.actionName = config.actionName;
    this.defaultState = config.defaultState;

    this.reset();
  }

  setAction() {
    this.action = boardsSetupService.getAction(this.actionName);
  }

  reset() {
    this.state = this.defaultState;
  }

  toggleState() {
    this.state = !this.state;

    this.runOrStop();
  }

  runOrStop() {
    this.state === states.running ?
      this.run() :
      this.stop();
  }

  run() {
    console.log('running!');
    const action = this.action;
    const actionTimeouts = action.timeouts;
    const intervalForExecutingAction = utils.sum(actionTimeouts);

    action.execute({ skipCondition: true });
    this.intervalPromise = setInterval(() => {
      action.execute({ skipCondition: true });
    }, intervalForExecutingAction)
  }

  stop() {
    clearInterval(this.intervalPromise);
    this.action.stop();
  }
}
