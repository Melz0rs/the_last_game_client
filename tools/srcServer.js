import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import io from 'socket.io';
import http from 'http';
import five from 'johnny-five';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
const server = http.createServer(app);
const ioServer = io(server);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

five.Board().on('ready', function() {
  console.log('Arduino is ready.');
//
//   let relay = new five.Relay(11);
//
//   ioServer.on('connection', function(client) {
//     client.on('join', function (handshake) {
//       console.log(handshake);
//     });
//
//     client.on('open', function (data) {
//       console.log('open! got it!');
//       relay.open();
//       client.emit('bedroom', data);
//       client.broadcast.emit('bedroom', data);
//     });
//
//     client.on('close', function (data) {
//       console.log('close! got it!');
//       relay.close();
//       client.emit('bedroom', data);
//       client.broadcast.emit('bedroom', data);
//     });
//   });
});

server.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
