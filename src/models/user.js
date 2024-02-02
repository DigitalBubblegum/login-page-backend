const mongoose = require('mongoose')
//do not save DB password to github ever
const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})
userSchema.set('toJSON',{
    transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	},
})

module.exports = mongoose.model('User',userSchema)