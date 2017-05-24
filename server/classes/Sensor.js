import Listener from './Listener';
import arduino from '../services/Arduino';

export default class Sensor extends Listener {
  constructor(config) {
    super(config);

    this.sensor = new arduino.Sensor({pin: this.pin, board: this.board, type: "digital"});
    this.actionExecutedCount = 0;
  }

  registerEvents(onChange) {

    super.registerEvents(onChange);

    const sensor = this.sensor;

    sensor.on("change", () => {
      if(this.actionExecutedCount >= 2) {
        const val = sensor.value;
        this.currentValue = val;

        onChange(this.name, val);
        this.executeAction(val);
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
