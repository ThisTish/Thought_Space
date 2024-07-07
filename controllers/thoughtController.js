const Thought = require('../models/Thought')

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
	}


}
