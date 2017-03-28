import Module from './Module';
import five from 'johnny-five';
import boardsSetupService from '../services/boardsSetupService';

export default class Listener extends Module {
  constructor(config) {
    super(config);

    this.actionName = config.actionName;
    this.pin =new five.Pin({pin: this.pin, board: this.board});

  }

  registerPins() {
    let that = this;
    this.actionExecutedCounter = 0;

    this.pin.read(function(err, val) {
      that.actionExecutedCounter++;
      that.executeAction(val);
    });
  }

  setAction() {
    this.action = boardsSetupService.getAction(this.actionName);
  }

  executeAction(val) {
    this.action.execute({ value: val, listenerName: this.name });
  }

  resetActionExecutedCounter() {
    this.actionExecutedCounter = 1;
  }

  stop() {

  }
}
