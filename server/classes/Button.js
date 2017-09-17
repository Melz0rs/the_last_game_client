import Listener from './Listener';
import arduino from '../services/Arduino';

export default class Button extends Listener {
  constructor(config) {
    super(config);

    this.button = new arduino.Button({pin: this.pin, board: this.board});
    this.actionExecutedCount = 0;
    this.debounceTime = 50 || config.debounceTime;
  }

  registerEvents(onChange) {

    super.registerEvents(onChange);

    const button = this.button;

    button.on("hold", () => {
      clearTimeout(this.timeoutPromise);

        this.timeoutPromise = setTimeout(() => {
          onChange(this.name, 0);
          this.executeAction(0);
        }, this.debounceTime);
      }

    );
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
