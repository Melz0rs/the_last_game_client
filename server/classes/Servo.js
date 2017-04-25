import Emitter from './Emitter';
import arduino from '../services/Arduino';

export default class Servo extends Emitter {
  constructor(config) {
    super(config);
    this.servo = new arduino.Servo({pin: this.pin, board: this.board, range: config.range, startAt: config.startAt || 0});

  }

  emit(config) {
    const to = config.to;

    this.stop();

    this.intervalPromise = setInterval(() => {
      this.servo.to(to);
    }, 1);
  }

  stop() {
    clearInterval(this.intervalPromise);
  }

  reset() {
    const startAt = this.servo.startAt;

    this.emit({
      to: startAt
    });
  }

}
