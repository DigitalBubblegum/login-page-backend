const express = require('express')
const loginRouter = require('./src/routes/login')
const signupRouter = require('./src/routes/signup')
const userRouter = require('./src/routes/user')
require('dotenv').config()
const PORT = process.env.PORT
const url = process.env.URL
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.set('strictQuery',false)
mongoose
	.connect(url)
	.then(() => {
		console.log('connected to MongoDB')
	})
	.catch((error) => {
		console.log('error connecting to MongoDB:', error.message)
	})
app.use(cors())
app.use(express.json())
app.get('/v1/',(req,res) => {
    res.send({info:'This is the v1 version of the endpoint'})
})
app.use('/v1/login',loginRouter)
app.use('/v1/signup',signupRouter)
app.use('/v1/users',userRouter)
app.listen(PORT,()=>[
    console.log(`Server running on port ${PORT}`)
])