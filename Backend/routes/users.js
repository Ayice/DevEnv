var express = require('express')
var router = express.Router()
var db = require('../db')
var mongodb = require('mongodb')

/* GET users listing. */
router.get('/', function (req, res, next) {
	var collection = db.get().collection('users')

	collection
		.find()
		.toArray()
		.then((result) => {
			res.send(result)
			console.log(result)
		})
})

/* POST user to db */
router.post('/', function (req, res, next) {
	var collection = db.get().collection('users')

	collection.insertOne({ name: req.body.name }, (err, result) => {
		if (err) throw err
		res.send('User saved to db')
		console.log('User saved to db')
	})
})

module.exports = router
