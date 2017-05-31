 import Listener from './Listener';
import arduino from '../services/Arduino';


export default class MovementSensor extends Listener { // TODO: Inherit from listener !!!
  constructor(config) {
    super(config);

    this.motion = new arduino.Motion({pin: this.pin, board: this.board});
  }

  registerEvents(onChange) {

    super.registerEvents(onChange);

    let executeActionTimeout;

    this.motion.on("motionstart", () => {
      if (!executeActionTimeout) {
        executeActionTimeout = setTimeout(() => {
          console.log('movementstart');
          onChange(this.name, 0);
          this.executeAction(0);
          executeActionTimeout = null;
        }, 100);
      } else {
        // console.log('pulse was detected from ', that.name);
        clearTimeout(executeActionTimeout);
        executeActionTimeout = null;
      }
    });

    this.motion.on("motionend", () => {
      if (!executeActionTimeout) {
        executeActionTimeout = setTimeout(() => {
          console.log('movementend');
          onChange(this.name, 1);
          this.executeAction(1);
          executeActionTimeout = null;
        }, 100);
      } else {
        // console.log('pulse was detected from ', that.name);
        clearTimeout(executeActionTimeout);
        executeActionTimeout = null;
      }
    });

  }

  emitSignalValue() {
    super.emitSignalValue();
  }

  setAction() {
    super.setAction();
  }

  executeAction(val) {
    super.executeAction(val);
  }

  reset() {
    super.reset();
  }

}
