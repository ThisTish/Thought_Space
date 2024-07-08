const router = require('express').Router()
const { 
	getAllUsers,
	getUserById,
	addUser, 
	addFriend,
	updateUser
} = require('../controllers/userController')

router.route('/')
	.get(getAllUsers)
	.post(addUser)

router.route('/:id')
	.get(getUserById)
	.put(updateUser)
	.delete()

router.route('/:userId/friends/:friendId')
	.post(addFriend)
	.delete()

module.exports = router