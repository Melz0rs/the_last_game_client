import Listener from './Listener';
import arduino from '../services/Arduino';

export default class Proximity extends Listener {
  constructor(config) {
    super(config);

    this.proximity = new arduino.Proximity({
      pin: this.pin,
      board: this.board,
      freq: 1000
    });
    this.actionExecutedCount = 0;
  }

  registerEvents(onChange) {

    super.registerEvents(onChange);

    const proximity = this.proximity;

    proximity.on("change", () => {
      if(this.actionExecutedCount >= 2) {
        const val = proximity.cm;
        this.currentValue = val;
        console.log(val);
        // onChange(this.name, val);
        // this.executeAction(val);
      }

      this.actionExecutedCount++;
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
