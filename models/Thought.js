const { model, Schema } = require('mongoose')
const  Reaction  = require('./Reaction')

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
			get: function(){
				return this.createdAt.toLocaleString()
			}
		},

		username: {
			type: String, 
			required: true
		},

		reactions: [{type: Schema.Types.ObjectId, ref: 'reaction'}]
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

const Thought = model('thought', thoughtSchema)

module.exports = Thought