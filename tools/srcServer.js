import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import io from 'socket.io';
import http from 'http';
import five from 'johnny-five';
import listenersConfigs from '../server/config/listenersConfigs';
import emittersConfigs from '../server/config/emittersConfigs';
import boardsSetupService from '../server/services/boardsSetupService';
import actionNames from '../server/constants/actionsNames';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
const server = http.createServer(app);
const ioServer = io(server);


const ports = [
  { id: "A" }
];

let clients = [];

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

ioServer.on('connection', function(client) {
  client.on('join', function (handshake) {
    console.log(handshake);
    clients.push(client);

    client.on('resetGame', function() {
      const listeners = boardsSetupService.getListeners();

      console.log('resetting game');

      listeners.forEach(listener => {
        listener.resetActionExecutedCounter();
      });
    });

    actionNames.forEach(actionName => {
      client.on(actionName, function() {
        const action = boardsSetupService.getAction(actionName);

        console.log('action called, action: ', actionName);

        action.execute();
      });
    });

  });
});

new five.Boards(ports).on("ready", function() {
  console.log('Arduinos are ready.');

  this.forEach((board, i) => {
    console.log('setupping arduino! ID:', board.id);
    // TODO: Create emitters
    const emittersConfig = emittersConfigs[i];

    boardsSetupService.createEmitters(board, emittersConfig);

    // TODO: Create actions
    boardsSetupService.createActions();

    // TODO: Create listeners
    const listenersConfig = listenersConfigs[i];

    boardsSetupService.createListeners(board, listenersConfig);
    
    // TODO: Register listeners pins
    boardsSetupService.registerPins();
  });

});

server.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
