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

/* Iza prøver at lave login funktion  */
// Authenticate the user when logging in
router.post('/login', (req, res, next) => {
	passport.authenticate('local', {
		successRedirect: '/category',
		failedRedirect: '/login',
	})(req, res, next)
})

// Renders dashboard if user is logged in
router.get('/hovedkategori', userIsLoggedIn, async (req, res) => {})

// Log out the user when pressing the log out link in the header
router.get('/logout', (req, res) => {
	req.logout()
	res.redirect('/login')
})

module.exports = router
