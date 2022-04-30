const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser');

class AppController{
  constructor(){
    this.express = express()
    this.routesPath = require('./routes/controllers')
    this.routes()
    this.cors()
    this.parser()
    this.helmet()
    this.middlewares()
  }
  middlewares(){
    this.express.use(express.json())
    this.express.use(require('./middlewares/errorMiddleware'))
  }

  routes(){
    this.express.use('/api',this.routesPath)
  }

  cors(){
    this.express.use(cors())
  }

  helmet(){
    this.express.use(helmet())
  }

  parser(){
    this.express.use(bodyParser.urlencoded({ extended: true }));
  }
}

module.exports = new AppController().express
