const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT;
const app = express()
app.get('/v1/',(request,response) => {
    response.send({info:'This is the v1 version of the endpoint'})
})
app.listen(PORT,()=>[
    console.log(`Server running on port ${PORT}`)
])