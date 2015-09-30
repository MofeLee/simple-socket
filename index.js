'use strict';

// var EventEmitter = require('events').EventEmitter;
var SocketIO = require('socket.io');
var app;

exports = module.exports = createApplication;

function createApplication(){
  var app = {
    listen: listen,
    use: use
  };

  return app;
}

function listen(port){
  app = SocketIO(port);
  app.on('connection', function(socket){
    socket.emit('ping');
  });
  return app;
}

function use(){

}
