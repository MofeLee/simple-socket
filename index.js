var SocketIO = require('socket.io');
var app;

module.exports = function SSocket(){
  var services = {
    listen: listen
  };

  return services;
};

function listen(port){
  app = SocketIO(port);
  return app;
}
