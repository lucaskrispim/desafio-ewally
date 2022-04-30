require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.test":".env" 
})
const app = require('./app')

const server = require('http').createServer(app) 
server.listen(process.env.PORT || 3333)