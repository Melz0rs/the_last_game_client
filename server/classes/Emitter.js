import Module from './Module';
import five from 'johnny-five';

export default class Emitter extends Module {
  constructor(config) {
    super(config);

    this.pinType = config.pinType || 'digital';
    this.name = config.name;
  }

  emit() {

  }

  reset() {

  }
}
