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

// todo create seeds to start testing

// !WHEN I open API GET routes in Insomnia for users and thoughts
// !THEN the data for each of these routes is displayed in a formatted JSON
// todo create routes for:
	// *api/users
		// todo Get all
		// todo Get by id
		// todo Post new user
		// todo Put update user by _id
		// todo Delete remove user by _id
			// ?bonus: remove user's associated thoughts when deleted
	// *api/users/:userId/friends/:friendId
		// todo Post to add a friend
		// todo Delete to remove from friend's list
	// *api/thoughts
		// todo Get all thoughts
		// todo Get thought by _id
		// todo Post create new Thought
			// ? push the created thought's _id to the associated user's "thoughts" array field
		// todo Put update thought by _id
		// todo Delete to remove thought by _id
	// *api/thoughts/:thoughtId/reactions
		// todo Post create reation stored in a single thought's "reactions" array field
		// todo Delete pull and remove a reaction by the reaction's _id

// !WHEN I test API POST, PUT, and DELETE routes in Insomnia
// !THEN I am able to successfully create, update, and delete users and thoughts in my database
	// todo create all controller functions for users and thoughts mentioned above
	// todo create collection to test all in insomnia
// !WHEN I test API POST and DELETE routes in Insomnia
// !THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
	// todo create all controller functions for reactions and friends(virtuals?)
	// todo add to collection in insomonia