import SerialPort from 'serialport';
import states from '../../constants/states';
export default class Mp3{
  constructor(config) {

    this.name = config.name;
    this.config = config;
    this.isOpen = false;
    this.defaultState = config.state;
  }

  play(track) {
    console.log('playing ', track);

    this.board.write(track);
  }

  stop() {
    this.play(0);
  }

  close() {
    if(this.board && this.isOpen) {
      this.board.close();

      this.isOpen = false;
    }
  }

  open() {
    if(!this.isOpen) {
      console.log('opening', this.config.port);
      this.board = new SerialPort(this.config.port, {
        baudrate: 9600,
        dataBits: 8,
        parity: 'none',
        stopBits: 1,
        flowControl: false
      });

      this.isOpen = true;
    }
  }

  reset() {
    if(this.defaultState === states.running) {
      this.open();
    } else {
      this.close();
    }
  }


}
