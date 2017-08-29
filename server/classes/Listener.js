import Module from './Module';
import boardsSetupService from '../services/boardsSetupService';


export default class Listener extends Module {
  constructor(config) {
    super(config);

    this.actionName = config.actionName;
    this.name = config.name;

  }

  registerEvents(onChange) {
    this.onChange = onChange;
    this.currentValue = 1;
  }

  emitSignalValue() {
    this.onChange(this.name, this.currentValue);
  }

  setAction() {
    this.action = boardsSetupService.getAction(this.actionName);
  }

  executeAction(val) {
    console.log('pin ', this.name);
    console.log('executing ', val, this.action.name);
    this.action.execute({ value: val, listenerName: this.name });
  }

  reset() {

  }

}
