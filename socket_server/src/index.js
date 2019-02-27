const http = require('http')
, path = require('path')
, socketIO = require('socket.io');

const server = http.createServer();

const io = socketIO(server);

server.listen(3000, (err) => {
    if (err) {
        console.log('error listening on 3000')
    } else {
        console.log("Socket server listening on port 3000")
    }
});

io.sockets.on('connection', function(socket) {
    console.log('A new user connected!');

    socket.emit('connected', {
        msg: 'welcome to MR'
    })
})