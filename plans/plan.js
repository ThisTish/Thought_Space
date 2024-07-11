// !GIVEN a social network API
// !WHEN I enter the command to invoke the application
// !THEN my server is started and the Mongoose models are synced to the MongoDB database
//// setup server.js with express, app.use & get mongoose connection
//// set up connection.js
//// make models for:
	// //User
	// //Thought
		// // Schemas
			// //Reaction

// // create seeds to start testing

// !WHEN I open API GET routes in Insomnia for users and thoughts
// !THEN the data for each of these routes is displayed in a formatted JSON
// todo create routes for:
	// *api/users
		// // Get all
		// // Get by id
		// // Post new user
		// // Put update user by _id
		// // Delete remove user by _id
			// ?//: remove user's associated thoughts when deleted
	// *api/users/:userId/friends/:friendId
		// // Post to add a friend
		// // // to remove from friend's list
	// *api/thoughts
		// // Get all thoughts
		// // Get thought by _id
		// // Post create new Thought
			// // push the created thought's _id to the associated user's "thoughts" array field
		// // Put update thought by _id
		// // Delete to remove thought by _id
	// *api/thoughts/:thoughtId/reactions
		// // Post create reation stored in a single thought's "reactions" array field
		// // Delete pull and remove a reaction by the reaction's _id

// !WHEN I test API POST, PUT, and DELETE routes in Insomnia
// !THEN I am able to successfully create, update, and delete users and thoughts in my database
	// // create all controller functions for users and thoughts mentioned above
	// // create collection to test all in insomnia
// !WHEN I test API POST and DELETE routes in Insomnia
// !THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
	// // create all controller functions for reactions and friends(virtuals?)
	// // add to collection in insomonia