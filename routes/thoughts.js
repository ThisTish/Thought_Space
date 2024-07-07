const router = require('express').Router()
const { 
	getAllThoughts,
	getthoughtById
} = require('../controllers/thoughtController')

router.route('/').get(getAllThoughts).post()

router.route('/:id').get(getthoughtById).put().delete()

router.route('/:thoughtId/reactions').post().delete()




module.exports = router
