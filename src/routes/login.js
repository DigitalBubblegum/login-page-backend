const loginRouter = require('express').Router()

loginRouter.get('/',(req,res)=>{
    res.send({info:'login router is working'})
})
// loginRouter.post('/',async(req,res)=>{
//     const { username, password } = request.body
// })
module.exports = loginRouter