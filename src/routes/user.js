const userRouter = require('express').Router()
// const { response } = require('express')
const User = require('../models/user')
userRouter.get('/',async(req,res)=>{
    const users =  await User.find({})
    if(!users){
        return res.json({info:'no users yet'})
    }
    res.json(users)
})
userRouter.get('/:id',async(req,res)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        return res.json({info:'no user by that id yet'}).status(401)
    }
    res.json(user)
})
module.exports = userRouter