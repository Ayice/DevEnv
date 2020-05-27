var express = require('express')
var router = express.Router()
var db = require('../db')
var mongodb = require('mongodb')
const passport = require('passport')

const userIsLoggedIn = require('../middleware/userIsLoggedIn')

/* GET users listing. */
router.get('/', function (req, res, next) {
	var collection = db.get().collection('users')

	collection
		.find()
		.toArray()
		.then(result => {
			res.send(result)
			console.log(result)
		})
})

/* POST user to db */
router.post('/', function (req, res, next) {
	var collection = db.get().collection('users')
	collection.insertOne(
		{
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			address: req.body.address,
			zipCode: req.body.zipCode,
			city: req.body.city,
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
		},
		(err, result) => {
			if (err) {
				res.status(500).json({
					status: 'Error',
					msg: 'There was a problem with the server',
				})
			} else {
				res.status(200).json({
					status: 'Success',
					msg: 'User saved to db',
				})
			}
		}
	)
})

// Authenticate the user when logging in
router.post('/login', passport.authenticate('local', {}), (req, res) => {
	res.json({
		status: 'Success',
		msg: "You're logged in",
	})
})

// Log out the user when pressing the log out link in the header
router.get('/logout', (req, res) => {
	console.log(req.user, 'req.user here')
	req.logout()
	res.status(200).json({ status: 'success', msg: "You're logged out" })
})

module.exports = router
