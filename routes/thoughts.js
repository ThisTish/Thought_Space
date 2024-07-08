const router = require('express').Router()
const { 
	getAllThoughts,
	getthoughtById,
	addThought,
	addReaction
} = require('../controllers/thoughtController')

router.route('/')
	.get(getAllThoughts)
	.post(addThought)

router.route('/:id')
	.get(getthoughtById)
	.put()
	.delete()

router.route('/:thoughtId/reactions')
	.post(addReaction)
	.delete()




module.exports = router
