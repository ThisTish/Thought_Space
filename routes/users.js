const router = require('express').Router()
const { 
	getAllUsers,
	getUserById,
	addUser, 
	addFriend
} = require('../controllers/userController')

router.route('/')
	.get(getAllUsers)
	.post(addUser)

router.route('/:id')
	.get(getUserById)
	.put()
	.delete()

router.route('/:userId/friends/:friendId')
	.post(addFriend)
	.delete()

module.exports = router