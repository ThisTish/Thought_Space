const connection = require('../config/connection')
const { User, Thought, Reaction,} = require('../models/index')
const { assignUsernames, assignReactions, assignUserTothought, usernamesWithEmail } = require('./data')
const colors = require('colors')

connection.once('error', (error) => console.log(`${error}`.red))

connection.once('open', async () => {
	console.log('connected'.bgBlue)

	let usersCheck = await connection.db.listCollections({usernames: 'usernames'}).toArray()
	if(usernames.length) {
		await connection.dropCollection('usernames')
	}
	console.log(`drop username successful`.yellow)

	let toughtsCheck = await connection.db.listCollections({thoughtText: 'thoughtsText'}).toArray()
	if(usernames.length) {
		await connection.dropCollection('usernames')
	}
	console.log(`drop thoughts successful`.yellow)
})

// makinging Users Array w/emails
const users = []

users.push(usernamesWithEmail(usernames, emails))

const userData = await User.create(users)
// ?not 100% sure stopped here.


assignUsernames(usernames)

assignReactions(reactions)

assignUserTothought(thoughts, usernames)// probably need capitalized