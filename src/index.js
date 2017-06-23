/* eslint-disable no-console */
import React from 'react';
import {render} from 'react-dom';
import App from './components/app/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import './styles/react-tabs.css';
import io from 'socket.io-client';

export const socket = io('http://localhost:3000');

socket.on('connect', function() {
  socket.emit('join', 'Client is connected!');
});

render(
    <App />,
  document.getElementById('app')
);
