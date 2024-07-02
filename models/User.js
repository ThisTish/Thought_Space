const { model, Schema} = require('mongoose')
const validator = require('validator')




const userSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
			trim: true
		},

		email:{
			type: String,
			lowercase: true,
			required: true,
			unique: true,
			validate:{//need to test this, if problems, try isAsync: true or use RegEx in a function
				validator: validator.isEmail,
				message: props=> `${props.value} is not a valid email`
			}
		},

		thoughts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'thought'
			}
		],
		
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: 'user'
			}
		]
	},
	{
		// ?
		toJSON: {
			virtuals: true
		},
		id: false,
	
		virtuals: {
			friendsCount:{
				get(){
					return this.friends.length
				}
			}
		}
	}
)

const User = model('user', userSchema)

module.exports = User