var hapi = require("hapi");

var server = new hapi.Server(); //initializing server

server.connection({ //configuring the server
  port: 8000 //listen on this port
});

server.start(function() {
  console.log(server.info);
});

server.route({
  method: "GET",
  path: "/{name}",
  handler: function(request, reply) {
    //console.log(request.headers);
    console.log(request.params);
    reply("Hello, " + request.params.name + ", from Hapi.js.");
  }
});
