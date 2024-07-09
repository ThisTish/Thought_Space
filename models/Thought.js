const { model, Schema } = require('mongoose')
const  reactionSchema  = require('./Reaction')

const thoughtSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			min: [1, 'Please enter at least one character'],
			max: [280, 'Thought must be under 280 characters.']
		},

		createdAt:{
			type: Date,
			default: Date.now,
		},

		username: {
			type: String, 
			required: true
		},

		reactions: [reactionSchema]
	},
	{
		// ?
		toJSON: {
			virtuals: true,
			getters: true
		},
		id: false,
		
		virtuals: {
			reactionCount: {
				get(){
					return this.reactions.length
				}
			}	
		}
	}
)

thoughtSchema.path('createdAt').get(function(value){
	return value.toLocaleString()
})

// Really tried, maybe come back to it.
// thoughtSchema.statics.deleteByUser = async function(username) {
// 	return this.deleteMany({ username: username })
// }

const Thought = model('thought', thoughtSchema)

module.exports = Thought