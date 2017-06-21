import SerialPort from 'serialport';
import states from '../../constants/states';
import volumesMapping from '../../constants/volumes';

export default class Mp3{
  constructor(config) {

    this.name = config.name;
    this.config = config;
    this.isOpen = false;
    this.defaultState = config.state;
  }

  play(track) {
    console.log('playing ', track);
    try {
      this.write(track);
    } catch (err) {
      console.log('Could not write to port: ', this.config.port);
    }
  }

  setVolume(volume) {
    const message = volumesMapping[volume];

    this.write(message);
  }

  write(message) {
      if (this.isOpen && this.board) {
        this.resetInterval();
        try {
          this.board.write(message);
        } catch(err) {
          console.log('Could not write to port: ', this.config.port);
        }
      } else {
        if (!this.writeInterval) {
          this.intervalIteration = 0;
          this.writeInterval = setInterval(() => {
            this.intervalIteration++;
            if (this.intervalIteration >= 15) {
              this.resetInterval();
            } else {
              this.write(message);
            }
          }, 200);
        }
      }

  }

  resetInterval() {
    clearInterval(this.writeInterval);
    this.writeInterval = null;
  }

  stop() {
    if(this.board && this.isOpen) {
      this.play('0');
    }
  }

  close() {
    if(this.board && this.isOpen) {
      try {
        this.board.close();
        this.isOpen = false;
      } catch (err) {
        console.log('Could not close port: ', this.config.port);
      }
    }
  }

  open() {
    if (!this.isOpen) {
      console.log('opening mp3', this.config.port);
      try {
        if(this.board && !this.board.isOpen()) {
          this.board.open();
        } else {
          this.board = new SerialPort(this.config.port, {
            baudrate: 9600,
            dataBits: 8,
            parity: 'none',
            stopBits: 1,
            flowControl: false
          });
        }

        this.isOpen = true;
      } catch (err) {
        console.log('Could not open port: ', this.config.port);
      }
    }
  }

  reset() {
    this.stop();
    if(this.defaultState === states.running) {
      this.open();
    } else {
      this.close();
    }
    this.resetInterval();
  }


}
