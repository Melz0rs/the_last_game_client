import boardsSetupService from '../services/boardsSetupService';
import utils from '../services/utils';
import states from '../../constants/states';


export default class Runner {
  constructor(config) {
    this.name = config.name;
    this.actionName = config.actionName;
    this.defaultState = config.defaultState;
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
    if (this.action) {
      this.state === states.running ?
        this.run() :
        this.stop();
    }
  }

  run() {
    this.stop();
    const action = this.action;
    const actionTimeouts = action.emittersTimeouts;
    const intervalForExecutingAction = utils.sum(actionTimeouts);
    action.execute({ skipCondition: true });

    this.intervalPromise = setInterval(() => {
      action.execute({ skipCondition: true });
    }, intervalForExecutingAction);
  }

  stop() {
      clearInterval(this.intervalPromise);
      this.action.stop();
  }
}
