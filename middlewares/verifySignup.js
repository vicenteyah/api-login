const User = require('../Schemas/user')

checkDuplicateUsernameOrEmail = async (req , res , next )=> {

    try {
        await User.findOne(
            {
                username: req.body.username 
            }).then(data => {
            if(data){
                res.status(400).send({message: "Failed! This Username is already in use!"})
                return;
            }
        })
    }catch (error){
        throw error
    }

    try {
        await User.findOne(
            {
                email: req.body.email
            }).then(data => {
                if(data){
                    res.status(400).send({ message: "Failed! Email is already in use!"})
                    return;
                }
            })
    } catch (error) {
        throw error
    }

    next()
}

const verifySignUp ={
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail  
}

module.exports = verifySignUp;