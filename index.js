const express = require('express');
const socketIO = require('socket.io');
const path = require('path')
const cors = require('cors')
const http = require('http');
require('dotenv').config()


const app = express()
app.use(cors())
// app.use(express.static(path.join(__dirname, "./chat")));
const PORT = process.env.PORT
const server = http.createServer(app)
const io = socketIO(server, {
    cors: {
      origin: "http://localhost:4200"
    }}
)

io.on('connection', (socket)=> {
    // console.log("new connection...")

    socket.emit("message", "Welcome, please ask a question")

    socket.on("msg", (msg)=>{
        io.emit("message", "socket answer")
    })

    // socket.on('disconnect', ()=>{
    //     socket.disconnect()
    // })
})

server.listen(PORT, ()=>{
    console.log(`Process running on port ${PORT}`)
})
