import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import io from 'socket.io';
import http from 'http';
import listenersConfigs from '../config/listenersConfigs';
import emittersConfigs from '../config/emittersConfigs';
import boardsSetupService from '../server/services/boardsSetupService';
import actionNames from '../constants/actionsNames';
import arduino from '../server/services/Arduino';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
const server = http.createServer(app);
const ioServer = io(server);


const ports = [
  { id: "A", port: 'COM21' },
  { id: "B", port: 'COM22' }
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

function stopActions() {
  const actions = boardsSetupService.getActions();
  const mp3s = boardsSetupService.getMp3s();

  console.log('stopping actions');

  actions.forEach(action => {
    action.stop();
  });

  mp3s.forEach(mp3 => {
    mp3.stop();
  });
}

function resetGame() {
  const listeners = boardsSetupService.getListeners();
  const emitters = boardsSetupService.getEmitters();
  const runners = boardsSetupService.getRunners();
  const mp3s = boardsSetupService.getMp3s();
  const actions = boardsSetupService.getActions();

  listeners.forEach(listener => {
    listener.reset();
  });

  runners.forEach(runner => {
    runner.reset();
  });

  emitters.forEach(emitter => {
    emitter.reset();
  });

  mp3s.forEach(mp3 => {
      mp3.reset();
  });

  actions.forEach(action => {
    action.reset();
  });
}

function emitRelayStateToClient(emitterName, emitterAction) {
  clients.forEach(client => {
    client.emit(emitterName, emitterAction);
  });
}

function emitChangesToClient(listenerName, listenerValue) {
  // console.log(listenerName, listenerValue);
  clients.forEach(client => {
    client.emit(listenerName, listenerValue);
  });
}

ioServer.on('connection', function(client) {
  client.on('join', function (handshake) {
    console.log(handshake);
    clients.push(client);

    const listeners = boardsSetupService.getListeners();

    listeners.forEach(listener => {
       listener.emitSignalValue();
    } );

    client.on('resetGame', function() {
      resetGame();
    });

    client.on('stopActions', function() {
      stopActions();
    });

    client.on('setGameMode', function(gameModeName) {
      boardsSetupService.setGameMode(gameModeName);
    });

    for (let actionName in actionNames) {

      actionName = actionNames[actionName];

      client.on(actionName, () => {
        const action = boardsSetupService.getAction(actionName);

        console.log('action called, action: ', actionName);

        action.execute({ skipCondition: true });
      });
    }

  });
});

new arduino.Boards(ports).on("ready", function() {
  console.log('Arduinos are ready.');

  this.forEach((board, i) => {
    console.log('setupping arduino! ID:', board.id);

    const emittersConfig = emittersConfigs[i];
    boardsSetupService.createEmitters(board, emittersConfig, emitRelayStateToClient);

    const listenersConfig = listenersConfigs[i];
    boardsSetupService.createListeners(board, listenersConfig);
  });

  boardsSetupService.createRunners();
  boardsSetupService.createActions();
  boardsSetupService.createMp3s();

  boardsSetupService.setActionsForListeners();
  boardsSetupService.setActionsForRunners();
  boardsSetupService.setRunnersForActions();
  boardsSetupService.setEmittersForActions();
  boardsSetupService.SetMp3ForActions();
  boardsSetupService.setActionDependenciesForActions();

  boardsSetupService.registerEvents(emitChangesToClient);
  boardsSetupService.resetRunners();

  resetGame();

});

server.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
