const socketIO = require('socket.io');
const express = require('express');
const http = require('http');
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', (socket)=> {
    console.log("new connection")

    socket.on('disconnect', ()=>{
        socket.disconnect()
    })
})

server.listen(PORT, ()=>{
    console.log(`Process running on port ${PORT}`)
})
