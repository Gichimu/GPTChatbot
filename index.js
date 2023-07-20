const express = require('express');
const socketIO = require('socket.io');
const path = require('path')
const {Configuration, OpenAIApi} = require('openai')
const cors = require('cors')
const http = require('http');
require('dotenv').config()
const config = new Configuration({
    apiKey: process.env.OPEN_AI_SECRET
})
const openai = new OpenAIApi(config)

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

async function getMessages(){
    const question = ""
    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: question}],
    })

    // console.log()
    io.on('connection', (socket)=> {
        // console.log("new connection...")
    
        // socket.emit("message", chatCompletion.data.choices[0].message.content) 
    
        socket.on("msg", (msg)=>{
            question = msg
            io.emit("message", chatCompletion.data.choices[0].message.content)
        })
    
        // socket.on('disconnect', ()=>{
        //     socket.disconnect()
        // })
    })
}


server.listen(PORT, ()=>{
    console.log(`Process running on port ${PORT}`)
})

getMessages()
