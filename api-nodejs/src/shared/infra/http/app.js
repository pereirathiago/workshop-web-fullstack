const express = require('express')
const cors = require('cors')
const { router } = require('../http/routes/index')
const { createConnection } = require('../typeorm/index')

createConnection()
const app = express()

app.use(express.json()) // faz com que o express entenda o formato json passado nas req e res

const allowedOrigins = '*' // aqui vai as urls que podem acessar a api
const options = {
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}

app.use(cors(options))

app.use(router)

module.exports = { app }