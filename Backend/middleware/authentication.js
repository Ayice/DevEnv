var db = require('../db')
var mongodb = require('mongodb')

const LocalStrategy = require('passport-local').Strategy

module.exports = function (passport) {
	passport.use(
		// Authenticate the user
		new LocalStrategy((username, password, done) => {
			db.connect((err, result) => {
				if (err) return err
			})
			db.get()
				.collection('users')
				.findOne({ username: username })
				.then(user => {
					console.log(user, 'found user in LocalStrategy')
					if (!user) {
						return done(null, false, { error: 'User does not excist' })
					}

					if (user.password !== password) {
						return done(null, false, { error: 'The password is not correct' })
					}
					console.log('User is logged in')
					console.log(user)
					return done(null, user)
				})
				.catch(err => console.log(err))
		})
	)

	// Give userID to cookie
	passport.serializeUser((user, done) => {
		console.log('serializing user!', user)
		done(null, user._id)
	})

	// Deserialize user when loggin out
	passport.deserializeUser((id, done) => {
		console.log('Deserializing user', id)
		db.connect((err, result) => {
			if (err) return console.log(err)
			console.log('desirialize connected to db')
		})
		db.get()
			.collection('users')
			.find({ _id: id }, (err, user) => {
				if (err) return console.log(err)
				console.log(user, 'deserializing found user')
				done(err, user)
			})
	})
}
