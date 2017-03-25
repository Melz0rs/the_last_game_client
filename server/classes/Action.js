import boardsSetupService from '../services/boardsSetupService';

export default class Action {
  constructor(config) {
    this.timeouts = config.timeouts;
    this.name = config.name;

    this.emitters = config.emitterNames.map(name => {
      return boardsSetupService.getEmitter(name);
    });
  }

  execute() {
    let timeouts = this.timeouts;
    let emitters = this.emitters;

    for(let i = 0; i< emitters.length; i++) {
      let emitter = emitters[i];
      let timeout = 0;

      if(timeouts) {
        for (let j = 0; j <= i; j++) {
          timeout += timeouts[j];
        }
      }

      setTimeout(() => {
        emitter.toggle();
      }, timeout);
    }
  }
}
