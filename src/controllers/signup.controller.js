const User = require('../Schemas/user')
const { generateHash } = require ('../utils/generateHash')

async function saveUser (req, res) {

    let user = new User()
    
    user.name = req.body.name
    user.username = req.body.username
    user.email = req.body.email
    user.password = generateHash(req.body.password,10)

    try {
        await user.save((err, userStored )=> {
            if(err){
                console.log(err)
                res.status(500).send({message:`server cannot store this user`})
            }else{
                res.status(201).send({message:userStored})
            }
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
    saveUser
}