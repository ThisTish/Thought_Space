const router = require('express').Router()
const { 
	getAllThoughts,
	getthoughtById,
	addThought
} = require('../controllers/thoughtController')

router.route('/').get(getAllThoughts).post(addThought)

router.route('/:id').get(getthoughtById).put().delete()

router.route('/:thoughtId/reactions').post().delete()




module.exports = router
