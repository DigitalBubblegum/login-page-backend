const bcrypt = require('bcrypt')
const signupRouter = require('express').Router()
// Add the user model here
const User = require('../models/user')
signupRouter.get('/',(req,res)=>{
    res.send({info:'signup router is working'})
})
signupRouter.post('/',async(req,res) =>{
    const {username,email,password} = req.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password,saltRounds)
    console.log(passwordHash)
    const user = new User({
        username,
        email,
        passwordHash
    })
    const savedUser = await user.save()
    console.log('saved new user')
    res.status(201).json(savedUser)
})
module.exports = signupRouter