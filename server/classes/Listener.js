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

    //   this.onChange = onChange; // TODO: Move to constructor when you've got power for that
  //   const that = this;
  //   let executeActionTimeout;
  //   this.pinPrevVal = null;
  //   this.actionExecutedCounter = 0;
  //
  //   this.pin.read(function(err, val) {
  //
  //       if (that.pinPrevVal !== null) {
  //         if (that.pinPrevVal !== val) {
  //           that.pinPrevVal = val;
  //           if(that.actionExecutedCounter >= 1) {
  //             if (!executeActionTimeout) {
  //               executeActionTimeout = setTimeout(() => {
  //                 onChange(that.name, val);
  //                 that.executeAction(val);
  //                 executeActionTimeout = null;
  //               }, 100);
  //             } else {
  //               console.log('pulse was detected from ', that.name);
  //               clearTimeout(executeActionTimeout);
  //               executeActionTimeout = null;
  //             }
  //           }
  //
  //           that.actionExecutedCounter++;
  //
  //         }
  //       } else {
  //         onChange(that.name, val);
  //         that.pinPrevVal = val;
  //       }
  //   });
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
