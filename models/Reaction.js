const { Schema, Types, model} = require( 'mongoose')

const reactionSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId()
		},
		reactionBody: {
			type: String,
			required: true,
			default: ':)',
			max: [ 280, 'Reactions must be under 280 characters']
		},

		username: {
			type: String,
			required: true
		},

		createdAt: {
			type: Date,
			default: Date.now,
			get: function(){
				return this.createdAt.toLocaleString()
			}
		}
		
	},
	{
		toJSON: {
			getters: true,
		},
		id: false
	}
)

const Reaction = model('reaction', reactionSchema)

module.exports = Reaction