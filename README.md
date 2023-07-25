Welcome to the documentation for the GPTChatBot, developed using Angular v16, Node.js, Socket.IO, and ChatGPT v3.5-turbo.

## Table of Contents ##
1. Introduction
2. Features
3. Requirements
4. Installation
5. Usage
6. Technologies Used
7. Contributing
8. License

### 1. Introduction ###
The Chat Application is a real-time chat platform that allows users to connect with each other and have live conversations. It utilizes Angular v16 on the front-end for a seamless user interface, Node.js on the back-end for server-side logic, Socket.IO for real-time communication, and ChatGPT v3.5 for intelligent chat responses.

### 2. Features ###
+ Real-time chat with multiple users.
+ Seamless integration of ChatGPT v3.5 for natural and intelligent chat responses.
+ User authentication and authorization.
+ Chat history storage.

##### 3. Requirements #####
To run the Chat Application, ensure you have the following installed:

+ Node.js (v14 or higher)
+ npm (v6 or higher)
+ Angular CLI (v12 or higher)
+ ChatGPT API key (sign up on OpenAI to obtain the API key)

##### 4. Installation #####
Follow these steps to install and set up the Chat Application:

+ Clone the repository from GitHub.

`git clone https://github.com/your-username/chat-application.git`  

`cd chat-application`

`Install the dependencies for both the front-end (Angular) and the back-end (Node.js).`


`cd frontend`

`npm install`


`cd ../backend`

`npm install`

+ Set up environment variables:
Create a .env file in the backend directory and add the following:

`CHAT_GPT_API_KEY=your_chat_gpt_api_key_here`

+ Start the application:

###### Start the Angular development server (front-end) ######
`cd chat`
`ng serve`

###### Start the Node.js server (back-end) ######
`npm start`
`Access the Chat Application at http://localhost:4200 in your web browser.`

##### 5. Usage #####
+ Open Application
+ Start typing on the prompt.
+ ChatGPT will respond intelligently to the messages in the conversation.
+ Utilize emojis and file sharing for enhanced communication.

##### 6. Technologies Used #####
+ Angular v16: A powerful front-end framework for building user interfaces.
+ Node.js: A JavaScript runtime for server-side development.
+ Socket.IO: A library that enables real-time, bidirectional communication between clients and the server.
+ ChatGPT v3.5: The AI model developed by OpenAI, used for intelligent chat responses.

#####7. Contributing#####
We welcome contributions to enhance the Chat Application. If you find any bugs or have ideas for new features, please submit an issue or create a pull request on the GitHub repository.

#####8. License#####
The Chat Application is licensed under the **MIT** License. Feel free to use, modify, and distribute the application as per the terms of the license.

Please note that the technologies mentioned above (Angular v16, ChatGPT v3.5) may not be the latest versions as of the knowledge cutoff date in September 2021. Make sure to use the most recent versions available at the time of implementation.






