import SerialPort from 'serialport';

export default class Mp3{
  constructor(config) {

    this.name = config.name;

    this.board = new SerialPort(config.port, {
      baudrate: 9600,
      dataBits: 8,
      parity: 'none',
      stopBits: 1,
      flowControl: false
    });

  }

  play(track) {
    console.log('playing ', track);
    this.board.write(track);
  }

  stop() {
    this.play(0);
  }

}
