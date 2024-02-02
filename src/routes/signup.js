const bcrypt = require('bcrypt')
const signupRouter = require('express').Router()
// Add the user model here
signupRouter.get('/',(req,res)=>{
    res.send({info:'signup router is working'})
})
module.exports = signupRouter