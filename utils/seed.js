const connection = require('../config/connection')
const { User, Thought, Reaction,} = require('../models/index')
const { assignUsernames, getRandom, assignUserTothought, usernamesWithEmail } = require('./data')
const colors = require('colors')

connection.once('error', (error) => console.log(`${error}`.red))

connection.once('open', async () => {
	console.log('connected'.bgBlue)

	// let usersCheck = await connection.db.listCollections({usernames: 'usernames'}).toArray()
	await connection.db.dropDatabase()
	console.log('database dropped'.red)

	await seedFunction()
	console.log(`seeding complete`.bgBlack.white)
	process.exit(0)
})

// makinging Users Array w/emails
const userEmailSeed = async () =>{
	try {
		const users = usernamesWithEmail()
		const createdUsers = await User.insertMany(users)
		console.log(`userEmailSeed`.bgBlack.white)
		return createdUsers
	} catch (error) {
		console.log(error.red)
	}
}
	
// assinging usernames to thoughts
const userThoughtSeed = async () => {
	try {
		const userThoughtArray = assignUserTothought()
		const seededThoughtArray = await Thought.insertMany(userThoughtArray)
		console.log(`userThoughtSeeded`.bgCyan)
		return seededThoughtArray
	} catch (error) {
		console.log(error.red)
	}
}

// assigning usernames to reactions
const userReactionSeed = async () =>{
	try {
		const reactionsWithUsernames = assignUsernames()
		console.log(`reactionsWithUsernames ln48 seed.js ${JSON.stringify(reactionsWithUsernames)}`.green)
		const createdReactions = await Reaction.insertMany(reactionsWithUsernames)
		console.log(`createdReactions ln49 seed.js ${createdReactions}`.blue)
		console.log('userReactionSeeded'.bgBlack.white)
		return createdReactions		
	} catch (error) {
		console.log(`error! ${error}`.red)
	}
}

const thoughtReactionSeed = async (createdReactions, seededThoughtArray) => {
	try {
		console.log(`createdReactions ${createdReactions}`.red)
		const reactionIdArray = createdReactions.map(reaction => reaction._id)
		console.log(`reactionIdArray ln 61: ${JSON.stringify(reactionIdArray)}`.cyan);
		for(let i = 0; i < reactionIdArray.length; i++){
			const randomThought = await Thought.findOne({
				thoughtText: getRandom(seededThoughtArray).thoughtText
			})
			console.log(`randomThought ln65 seed.js ${randomThought}`.cyan)
			randomThought.reactions.push(reactionIdArray[i])
			randomThought.save()
		}
		console.log('reactions seeded to thoughts ln 85 seed.js'.bgYellow)
	} catch (error) {
		console.log(`${error}`.red)
	}
}

async function seedFunction(){
	
	await userEmailSeed()
	const seededThoughtArray = await userThoughtSeed()
	const createdReactions = await userReactionSeed()
	await thoughtReactionSeed(createdReactions, seededThoughtArray)

}


