var express=require('express');
var socket=require('socket.io');

//App Setup
var app=express();
app.use(express.static('public'));
var server=app.listen(4000,function(){
	console.log('listining to port 4000')
})

//Socket Setup
var io=socket(server);
io.on('connection',(socket)=>{
	console.log('connection made to server');
	socket.on('chat',(data)=>{
		io.sockets.emit('chat',data);
	});

	socket.on('typing',(data)=>{
	socket.broadcast.emit('typing',data);
})
})

