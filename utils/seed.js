const connection = require('../config/connection')
const { User, Thought, Reaction,} = require('../models/index')
const { assignUsernames, assignReactions, assignUserTothought, usernamesWithEmail } = require('./data')
const colors = require('colors')

connection.once('error', (error) => console.log(`${error}`.red))

connection.once('open', async () => {
	console.log('connected'.bgBlue)

	let usersCheck = await connection.db.listCollections({usernames: 'usernames'}).toArray()
	if(usersCheck.length) {
		await connection.dropCollection('usernames')
	}
	console.log(`drop username successful`.yellow)

	let thoughtCheck = await connection.db.listCollections({thoughtText: 'thoughtsText'}).toArray()
	if(thoughtCheck.length) {
		await connection.dropCollection('usernames')
	}
	console.log(`drop thoughts successful`.yellow)
})

// makinging Users Array w/emails
const userEmailSeed = async () =>{
	const users = []
try {
		users.push(usernamesWithEmail({
			usernames, 
			emails
			})
		)
		await User.create(users)
		console.log(`userEmailSeed`.cyan)

	} catch (error) {
		console.log(error.red)
	}
}
	
// assinging usernames to thoughts
const userThoughtSeed = async () => {
	try {
		const userThoughtArray = assignUserTothought()
		await Thought.create(userThoughtArray)
		console.log(`userThoughtSeed`.cyan)
		
	} catch (error) {
		console.log(error.red)
	}
}


// assigning usernames to reactions
const userReactionSeed = async () =>{
	try {
		const reactionsWithUsernames = assignUsernames()
		await Reaction.create(reactionsWithUsernames)
		console.log(`userReactionSeed`.cyan)
		
	} catch (error) {
		console.log(error.red)
	}
}

const thoughtReactionSeed = async () => {
	try {
		const thoughtsReactions = assignReactions(reactions, thoughts)
		await Thought.save({
			thoughtsReactions
		})
		console.log(`thoughtReactionSeeded`.cyan)
	} catch (error) {
		console.log(error.red)
	}
}


userEmailSeed()
userThoughtSeed()
userReactionSeed()
thoughtReactionSeed()



