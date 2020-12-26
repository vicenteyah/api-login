'use strict'
const mongoose = require('mongoose')
const app = require('./app')
const config = require ('./config')


mongoose.connect(config.db,{ useUnifiedTopology: true ,useNewUrlParser: true},(err,res)=> {
    if(err){
        console.log(err)
    }else {
        console.log("mongodb is connected.....")
    }
    
    app.listen(config.port, () => {
        console.log(`Rest api running on http://localhost:${config.port}`)
    })
})