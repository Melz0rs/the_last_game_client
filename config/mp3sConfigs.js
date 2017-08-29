import mp3sNames from '../constants/mp3sNames';
import states from '../constants/states';

export default [
  {
    name: mp3sNames.livingRoomSoundEffects,
    port: 'COM3',
    state: states.running
  },
  {
    name: mp3sNames.kidsRoomSoundEffects,
    port: 'COM4',
    state: states.stopped
  }
];
