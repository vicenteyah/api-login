const User = require('../Schemas/user')

const { matchPassword } = require('../utils/matchPassword')
const { generateToken } = require('../utils/token')


async function login (req,res) {
   const userData = {
      username: req.body.username,
      password: req.body.password
    }

   let matchUser

    try {
        matchUser = await User.findOne({ username: userData.username })
    } catch (error) {
       console.log(error)
    }

    if (!matchUser){
        res.status(404).send({message:`User not found`})
        return;
    }
    const matchPass = await matchPassword(userData.password, matchUser.password)
    console.log(matchPass)

    if(!matchPass){
        res.status(403).send({message:`invalid Password`})
        return;
    }
    
    userData.password = matchUser.password

    const token = generateToken(userData)
    res.status(200).send({message:'Access Success',token})
}

module.exports = {
    login
}