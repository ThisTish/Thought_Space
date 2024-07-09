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

userSchema.pre('remove', async function(next){
	try {
		await Thought.deleteMany({ _id: { $in: this.user } })
		next()
	} catch (error) {
		console.log(`Error in deleting thoughts from user- ${error}`.red)
		next(error)
	}
})

const User = model('user', userSchema)

module.exports = User