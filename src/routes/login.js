const loginRouter = require('express').Router()

loginRouter.get('/',(req,res)=>{
    res.send({info:'login router is working'})
})
module.exports = loginRouter