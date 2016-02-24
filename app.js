var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io',io);

var porta = process.env.PORT || 3000;
var server  = http.listen(porta, function(){
	
	console.log(new Date() + "KopNutri App is running...");
});
