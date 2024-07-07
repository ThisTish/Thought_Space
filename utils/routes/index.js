const app = require('express')
const usersRoutes = require('./users')
const thoughtsRoutes = require('./thoughts')

app.use('/users', usersRoutes)
app.use('/thoughts', thoughtsRoutes)

// ?module.exports = ?