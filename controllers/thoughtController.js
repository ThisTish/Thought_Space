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
	}


}
