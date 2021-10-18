//Voor het maken van de connectie kiest hij ofwel voor de online versie of de port:5000
var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

//inladen van express
app.use(express.static('client'));

//opstarten van de server
server.listen(PORT, function () {
  console.log('Chat server running');
});

var io = require('socket.io')(server);

//opstarten van socket.io
io.on('connection', function (socket) {
  socket.on('message', function (msg) {
    io.emit('message', msg);
  });
});