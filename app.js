'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes/router')
const app = express()

//middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api',api)


module.exports = app