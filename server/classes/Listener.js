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
    let pinPrevVal = null;
    this.actionExecutedCounter = 0;

    pin.read(function(err, val) {
      if(pinPrevVal !== null) {
        if (that.actionExecutedCounter < 2) {
          if (val !== pinPrevVal) {
            pinPrevVal = val;
            that.executeAction();
            that.actionExecutedCounter++;
            console.log('action executed!');
          }
        } else {
          pinPrevVal = val;
        }
      } else {
        console.log('here');
        pinPrevVal = val;
      }
    });
  }

  executeAction() {
    this.action.execute();
  }

  resetActionExecutedCounter() {
    this.actionExecutedCounter = 1;
  }
}
