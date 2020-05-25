var db = require('../db')
var mongodb = require('mongodb')
// const LocalStrategy = require('passport-local').Strategy;
const LocalStrategy = require('passport-local').Strategy
// const User = db.get().collection('users');

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
					if (!user) {
						return done(null, false, { error: 'User does not excist' })
					}

					if (user.password !== password) {
						return done(null, false, { error: 'The password is not correct' })
					}
					console.log('User is logged in')
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
			if (err) return err
		})
		db.get()
			.collection('users')
			.find({ _id: id }, (err, user) => {
				done(err, user)
			})
	})
}
