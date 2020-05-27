var db = require('../db')
var mongodb = require('mongodb')

const LocalStrategy = require('passport-local').Strategy

module.exports = function (passport) {
	passport.use(
		// Authenticate the user
		new LocalStrategy((username, password, done) => {
			// Create connection to db
			db.connect((err, result) => {
				if (err) return err
			})
			// Find a user with the username given from the request
			db.get()
				.collection('users')
				.findOne({ username: username })
				.then(user => {
					console.log(user, 'found user in LocalStrategy')

					// If there's no user return false
					if (!user) {
						return done(null, false, { error: 'User does not excist' })
					}

					// If the password from the user is not the same as given
					if (user.password !== password) {
						return done(null, false, { error: "The password and username doesn't match" })
					}

					// If we get here, the login datas are correct and we can now serialize the user
					console.log('User is logged in')
					console.log(user)
					return done(null, user)
				})
				.catch(err => {
					res.json({
						status: 'Error',
						msg: err,
					})
				})
		})
	)

	// https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize

	// Insert the user into our req.session.passport
	// So we can access this later when we want to find the logged in user
	passport.serializeUser((user, done) => {
		console.log('serializing user!', user._id)

		// Tell the session what to store in the session (user._id)
		done(null, user._id)
	})

	// This will run everytime, we are trying to go into a restricted route
	// It will find the user we are logged in as.
	passport.deserializeUser((id, done) => {
		console.log('Deserializing user', id)
		// Create connection to the db
		db.connect((err, result) => {
			if (err) return console.log(err)
			console.log('deserialize connected to db')
		})

		// Find the user we have stored in our session
		// this will be found in req.user (hopefully :D )
		db.get()
			.collection('users')
			.find({ _id: id }, (err, user) => {
				if (err) return res.send(err)
				console.log(user, 'deserializing found user')
				done(err, user)
			})
	})
}
