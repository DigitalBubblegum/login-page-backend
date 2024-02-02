const express = require('express');
const loginRouter = require('./src/routes/login');
const signupRouter = require('./src/routes/signup');
require('dotenv').config()
const PORT = process.env.PORT;
const app = express()
app.get('/v1/',(req,res) => {
    res.send({info:'This is the v1 version of the endpoint'})
})
app.use('/v1/login',loginRouter)
app.use('/v1/signup',signupRouter)
app.listen(PORT,()=>[
    console.log(`Server running on port ${PORT}`)
])