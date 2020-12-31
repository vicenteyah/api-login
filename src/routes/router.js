'use strict'

const express = require('express')
const signIn = require('../controllers/login.controller')
const user = require('../controllers/signup.controller')
//const { verifySignUp } = require('../middlewares')
const api = express.Router()

api.post('/v1/signup', user.saveUser)
api.post('/v1/login', signIn.login)

module.exports = api