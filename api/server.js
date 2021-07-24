const express = require('express')
const server = express()

server.use(express.json())

// get user route configurations
const todos = require('./routes/todos')

// when the api endpoint is hit, handle it by using the following route configurations 
server.use('/api/todos', todos)

module.exports = server 