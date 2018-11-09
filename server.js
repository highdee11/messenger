const io=require('socket.io')();


io.on('connection',(client)=>{
    
    client.emit('data',{type:'emission'});
    client.on('client-data',(data)=>{
        client.emit('new_msg',data);
        client.broadcast.emit('new_msg',data);
    });
});

io.listen(8000);
console.log('Server started');