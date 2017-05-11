import Listener from './Listener';
import arduino from '../services/Arduino';

export default class Sensor extends Listener {
  constructor(config) {
    super(config);

    this.sensor = new arduino.Sensor({pin: this.pin, board: this.board, type: "digital"});
  }

  registerEvents(onChange) {

    super.registerEvents(onChange);

    const sensor = this.sensor;

    sensor.on("change", () => {
      const val = sensor.value;
      this.currentValue = val;

      onChange(this.name, val);
      this.executeAction(val);
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
