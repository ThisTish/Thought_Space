const Thought = require('../models/Thought')
const User = require('../models/User')

module.exports = {

	async getAllThoughts(req, res) {
		try {
			const thoughts = await Thought.find()
			res.json(thoughts)
		} catch (error) {
			console.log(error)
			res.json(error)
		}
	},

	async getthoughtById(req, res) {
		try {
			const thought = await Thought.findOne({
				_id: req.params.id
			})
			res.json(thought)
		} catch (error) {
			console.log(error)
			res.json(error)
		}
	},

	async addThought(req, res){
		let { thoughtText, username } = req.body

		const poster = await User.findOne({
			username: username
		})
		if(!poster){
			return console.log(`Error! User Not Found`.red)
		}
		const userId = poster._id


		try {
				const newThought = await Thought.create({
					thoughtText,
					username,
					userId
				})
				const thoughtOwner = await User.findByIdAndUpdate(
					userId,
					{$push: { thoughts: newThought._id } },
					{ new: true }
				)
				console.log('Successfully posted Thought'.yellow)
				res.status(201).json({ newThought: newThought, thoughtOwner: thoughtOwner })
			
		} catch (error) {
			console.log(`Error! - ${error}`.red)
			res.status(500).json(error)
		}
	},

	async addReaction (req, res){
		const thoughtId = req.params.thoughtId
		const reactionData = req.body

		try{
			if(!thoughtId) {
				console.log('ThoughtId not found'.red)
				res.status(400).json({message: 'thoughtId not found'})
			}else{
				const thought = await Thought.findByIdAndUpdate(
					{_id: thoughtId},
					{$addToSet: {reactions: reactionData }},
					{ new: true })

				if(!thought){
					console.log('Thought not found'.red)
				res.status(400).json({message: 'thought not found'})
				}else{
					res.status(201).json(thought)
				}
			}
		} catch (error) {
			console.log(`Error! - ${error}`.red)
			res.status(500).json(error)
		}
	},

	async updateThought(req, res){
		const thoughtId = req.params.id

		const thought = {
			thoughtText: req.body.thoughtText
		}

		try{
			const updatedThought = await Thought.findByIdAndUpdate(
				{ _id: thoughtId},
				{ $set: thought },
				{ runValidators: true, new: true}
			)

			if(!updatedThought){
				console.log('No Thought found')
				res.status(404).json({message: 'Thought not found'})
			}
				res.status(201).json(updatedThought)
		} catch (error) {
			console.log(`Error! - ${error}`.red)
			res.status(500).json(error)
		}
	}


}
