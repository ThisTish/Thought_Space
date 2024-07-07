const User = require('../models/User')
const colors = require('colors')

module.exports = {

	async getAllUsers(req, res) {
		try {
			const users = await User.find()
			res.json(users)
		} catch (error) {
			console.log(`Error! - ${error}`.red)
			res.status(500).json(error)
		}
	},

	async getUserById(req, res) {
		try {
			const user = await User.findOne({
				_id: req.params.id
			})
			res.json(user)
		} catch (error) {
			console.log(`Error! - ${error}`.red)
			res.json(error)
		}
	},

	async addUser(req, res){
		let { username, email, thoughts, friends } = req.body
		username = username.trim()
		email = email.trim()

		try {
			const usernameTaken = await User.findOne({
				username: username
			})

			if(usernameTaken !== null){
				console.log('username already taken'.red)
				res.status(400).json({message: 'username already taken'})
			}else{
				const newUser = await User.create({
					username,
					email,
					thoughts,
					friends
				})
				
				res.status(201).json(newUser)
			}
		} catch (error) {
			console.log(`Error! - ${error}`.red)
			res.status(500).json(error)
		}
	}


	
}
