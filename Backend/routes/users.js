var express = require('express');
var router = express.Router();
var db = require('../db');
var mongodb = require('mongodb');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var collection = db.get().collection('users');

	collection.find().toArray().then(result => {
        res.send(result);
        console.log(result);
	});
});
/* POST user to db */
router.post('/', function(req, res, next) {
	var collection = db.get().collection('users');

	collection.insertOne({ 
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		address: req.body.address,
		zipCode: req.body.zipCode,
		city: req.body.city,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
		}, (err, result) => {
		if (err) throw err;
		res.send('User saved to db');
		console.log('User saved to db');
	})
	console.log(req.body)

});


module.exports = router;
