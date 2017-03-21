/* eslint-disable no-console */

import io from 'socket.io-client';

const socket = io('localhost:3000');

socket.on('connect', function(){
  console.log('Joined server!');
});

const buttons = [
  {
    onClick: function() {
      socket.emit('open');
      console.log('open');
    },

    text: 'Open the magnet!'
  } , {
    onClick: function() {
      socket.emit('close');
      console.log('close');
    },

    text: 'Close the magnet!'
  }
];

export default buttons;
