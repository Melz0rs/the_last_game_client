import Module from './Module';
import boardsSetupService from '../services/boardsSetupService';
import arduino from '../services/Arduino';

export default class Listener extends Module {
  constructor(config) {
    super(config);

    this.actionName = config.actionName;
    this.name = config.name;
    this.pin = new arduino.Pin({pin: this.pin, board: this.board});

  }

  registerPins() {
    const that = this;
    let executeActionTimeout;
    this.pinPrevVal = null;
    this.actionExecutedCounter = 0;

    this.pin.read(function(err, val) {

        if (that.pinPrevVal !== null) {
          if (that.pinPrevVal !== val) {
            that.pinPrevVal = val;
            if(that.pin.pin === 12) {
              console.log(val);
            }
            if(that.actionExecutedCounter >= 1) {
              if (!executeActionTimeout) {
                executeActionTimeout = setTimeout(() => {
                  that.executeAction(val);
                  executeActionTimeout = null;
                }, 100);
              } else {
                // console.log('pulse was detected from ', that.name);
                clearTimeout(executeActionTimeout);
                executeActionTimeout = null;
              }
            }

            that.actionExecutedCounter++;

          }
        } else {
          that.pinPrevVal = val;
        }
    });
  }

  setAction() {
    this.action = boardsSetupService.getAction(this.actionName);
  }

  executeAction(val) {
    console.log('pin ', this.name);
    console.log('executing ', val);
    this.action.execute({ value: val, listenerName: this.name });
  }

  reset() {
    this.actionExecutedCounter = 0;
  }
}
