const express = require('express')
const app = express()
const cors = require('cors')
const port = 8888
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const uuidv1 = require('uuid/v1')

app.use(cors())

app.get('/', (req, res) => {
  res.send("Hello world")
})

let watingSockets = [];

io.on('connection', (socket) => {
  console.log('connected')
  socket.emit('connected', { socketId: socket.id })

  socket.on('start-chat', (config) => {
    socket.config = config;
    let availableSockets = watingSockets.filter((watingSocket) => (
      socket.id !== watingSocket.id &&
      (socket.config.partnerGender === 0 || watingSocket.config.yourGender === socket.config.partnerGender) &&
      (watingSocket.config.partnerGender === 0 || socket.config.yourGender === watingSocket.config.partnerGender)
    ))
    let partner = availableSockets[0]
    if (partner) {
      let roomId = uuidv1()
      socket.join(roomId, () => {
        partner.join(roomId, () => {
          socket.roomId = roomId
          partner.roomId = roomId
          watingSockets = watingSockets.filter(x => x.id != partner.id)
          io.to(roomId).emit('pair-success')
        })
      })
    } else {
      watingSockets.push(socket)
    }

  })

  socket.on('message', (message) => {
    io.to(socket.roomId).emit('receive-message', { socketId: socket.id, content: message })
  })

  socket.on('leave-chat', () => {
    socket.leave(socket.roomId)
    io.to(socket.roomId).emit('partner-leave-chat');
  })

  socket.on('start-typing', () => {
    socket.broadcast.to(socket.roomId).emit('partner-start-typing');
  })
  socket.on('stop-typing', () => {
    socket.broadcast.to(socket.roomId).emit('partner-stop-typing');
  })

  socket.on('disconnect', () => {
    console.log('disconnect')
    watingSockets = watingSockets.filter(x => x.id != socket.id)
    socket.leave(socket.roomId)
    io.to(socket.roomId).emit('partner-leave-chat');
  });
});

http.listen(port, () => {
  console.log('App is running')
});
