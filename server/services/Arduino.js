import five from 'johnny-five';
import Mp3 from '../classes/Mp3';

export default {

  Relay: (config) => {
    return five.Relay(config);
  },

  Servo: (config) => {
    return five.Servo(config);
  },

  Mp3: (config) => {
    return Mp3(config);
  },

  Pin: (config) => {
    return five.Pin(config);
  },

  Boards: (config) => {
    return five.Boards(config);
  }
}