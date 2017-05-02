import Emitter from './Emitter';
import arduino from '../services/Arduino';

export default class Servo extends Emitter {
  constructor(config) {
    super(config);
    this.startAt = config.startAt;
    this.servo = new arduino.Servo({pin: this.pin,
      board: this.board,
      range: config.range});

  }

  emit(config) {
    const to = config.to;
    if (to === -1) {
      this.reset();
    } else {
      console.log('moving to ', to)
      this.servo.to(to);
    }
  }

  reset() {
    const startAt = this.startAt;

    this.emit({
      to: startAt
    });

  }

}
