const router = require('express').Router()

router.get('/', (req, res) =>{
	res.send('This is  thoughts home')
})

module.exports = router