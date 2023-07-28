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
const PORT = process.env.PORT || 5000
const server = http.createServer(app)
const io = socketIO(server, {
    cors: {
      origin: "http://localhost:4200"
    }}
)
 
function getMessages(){
    const prompts = []
    
    io.on('connection', (socket)=> {
        
        socket.emit("message", "Hello, how may i assist you?")  

        messages = prompts.map(([role, content]) => {role, content})

        socket.on("msg", async (msg)=>{
    
            messages.push({role: "user", content: msg})
            chatCompletion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: messages,
                temperature: 0
            })
            io.emit("message", chatCompletion.data.choices[0].message.content)
            messages.push({role: "assistant", content: chatCompletion.data.choices[0].message.content}) //store a record of the conversation
        })
    
        socket.on('disconnect', ()=>{
            socket.disconnect()
        })
    })

    
}


server.listen(PORT, ()=>{
    console.log(`Process running on port ${PORT}`)
})

getMessages()
