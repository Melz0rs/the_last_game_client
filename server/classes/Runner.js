import boardsSetupService from '../services/boardsSetupService';
import utils from '../services/utils';
import states from '../constants/states';


export default class Runner {
  constructor(config) {
    super(config);

    this.name = config.name;
    this.actionName = config.actionName;
    this.defaultState = config.state;

    this.reset();
  }

  setAction() {
    this.action = boardsSetupService.getAction(this.actionName);
  }

  reset() {
    this.state = this.defaultState;

    this.runOrStop();
  }

  toggleState() {
    this.state = !this.state;

    this.runOrStop();
  }

  runOrStop() {
    if(this.state === states.running) {
      this.run();
    } else {
      this.stop();
    }
  }

  run() {
    const action = this.action;
    const actionTimeouts = action.timeouts;
    const intervalForExecutingAction = utils.sum(actionTimeouts);

    this.intervalPromise = setInterval(() => {
      action.execute({ skipCondition: true });
    }, intervalForExecutingAction)
  }

  stop() {
    clearInterval(this.intervalPromise);
    this.action.stop();
  }
}
