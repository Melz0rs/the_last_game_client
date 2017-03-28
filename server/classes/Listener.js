import Module from './Module';
import five from 'johnny-five';
import boardsSetupService from '../services/boardsSetupService';

export default class Listener extends Module {
  constructor(config) {
    super(config);
    this.action = boardsSetupService.getAction(config.actionName);
  }

  registerPins() {
    let pin = new five.Pin({pin: this.pin, board: this.board});
    let that = this;
    this.actionExecutedCounter = 0;

    pin.read(function(err, val) {
        that.executeAction(val);
    });
  }

  executeAction(val) {
    this.action.execute({ value: val, listenerName: this.name });
  }

  resetActionExecutedCounter() {
    this.actionExecutedCounter = 1;
  }
}
