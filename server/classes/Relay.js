import Emitter from './Emitter';
import arduino from '../services/Arduino';
import relayMethods from '../../constants/relayMethods';

export default class Relay extends Emitter {
  constructor(config) {
    super(config);

    this.relay = new arduino.Relay({pin: this.pin, board: this.board});
  }

  emit(config) {
    const relayMethod = config.method;

    switch (relayMethod) {
      case relayMethods.close:
        this.close();
        break;
      case relayMethods.open:
        this.open();
        break;
      default:
        this.toggle();
    }

  }

  toggle() {
    this.relay.toggle();
  }

  open() {
    this.relay.open();
  }

  close() {
    this.relay.close();
  }

}
