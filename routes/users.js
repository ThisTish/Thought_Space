const router = require('express').Router()
const { 
	getAllUsers,
	getUserById
} = require('../controllers/userController')

router.route('/').get(getAllUsers).post()

router.route('/:id').get(getUserById).put().delete()

router.route('/:userId/friends/:friendId').post().delete()

module.exports = router