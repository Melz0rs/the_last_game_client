import Emitter from './Emitter';
import arduino from '../services/Arduino';
import relayMethods from '../../constants/relayMethods';

export default class Relay extends Emitter {
  constructor(config) {
    super(config);
    this.defaults = config.defaults;
    this.stateChangeCallback = config.stateChangeCallback;

    this.relay = new arduino.Relay({pin: this.pin, board: this.board});

    this.reset();
  }

  emit(config) {
    const relayMethod = config ? config.method : null;

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
    // this.stateChangeCallback(this.name, relayMethods.toggle);
  }

  open() {
    this.relay.open();
    // this.stateChangeCallback(this.name, relayMethods.open);

  }

  close() {
    this.relay.close();
    // this.stateChangeCallback(this.name, relayMethods.close);
  }

  reset() {
    if (this.defaults) {
      const defaultRelayMethod = this.defaults.method;

      this.emit({method: defaultRelayMethod});
    }
  }

}
