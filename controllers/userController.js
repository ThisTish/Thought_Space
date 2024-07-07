const User = require('../models/User')

module.exports = {

	async getAllUsers(req, res) {
		try {
			const users = await User.find()
			res.json(users)
		} catch (error) {
			console.log(error)
			res.json(error)
		}
	},

	async getUserById(req, res) {
		try {
			const user = await User.findOne({
				_id: req.params.id
			})
			res.json(user)
		} catch (error) {
			console.log(error)
			res.json(error)
		}
	}

	


}
