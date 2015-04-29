var hapi = require("hapi");

var server = new hapi.Server(); //initializing server

server.connection({ //configuring the server
  port: 8000 //listen on this port
});

server.start(function() {
  console.log(server.info);
});
