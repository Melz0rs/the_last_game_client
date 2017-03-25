import io from 'socket.io-client';

let socket = io('http://localhost:3000');

socket.on('connect', function() {
  socket.emit('join', 'Client is connected!');
});

const buttons =  [{
  onClick: function() {
    socket.emit('resetGame');
  },

  description: 'Reset game',

  text: 'Reset'
}, {
  onClick: function() {
    socket.emit('toggleClosetToBedroom');
  },

  description: 'Toggle closet to bedroom',

  text: 'Toggle'
}, {
  onClick: function() {
    socket.emit('dropLivingRoomVaseAndOpenClosetToBedroom');
  },

  description: 'drop drop living room vase and open closet to bedroom',

    text: 'Click'
  }

  , {
    onClick: function() {
      socket.emit('openClosetToBedroomAndDropLivingRoomVase');
    },

    description: 'openClosetToBedroomAndDropLivingRoomVase',

    text: 'Click'
  }

  , {
    onClick: function() {
      socket.emit('rapidToggleBedroomCloset');
    },

    description: 'rapidToggleBedroomCloset',

    text: 'Click'
  }
];

export default buttons;
