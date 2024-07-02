const mongoose = require('mongoose')
// const reactionSchema = require('./Reaction')

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
			trim: true
		}
	},
	{
		email:{
			type: String,
			required: true,
			unique: true,
			// ! stopped here, need to validate that it is an email.
		}
	},
)