var socket=io.connect('http://localhost:4000');



var message=document.getElementById('message');
var handle=document.getElementById('handle');
var btn=document.getElementById('send');
var output=document.getElementById('output');
var feedback=document.getElementById('feedback');

function clicked(){
socket.emit('chat',{
	message:message.value,
	handle:handle.value
});
console.log("clicked");
}

message.addEventListener('keypress',()=>{
	socket.emit('typing',handle.value);
});


socket.on('chat',(data)=>{
message.value='';
feedback.innerHTML="";
output.innerHTML+='<p><strong>'+data.handle+'</strong> '+data.message+'</p>';
console.log("clicked");
})

socket.on('typing',(data)=>{
	feedback.innerHTML='<P><em>'+data+' is typing a message...</em></p>';
});