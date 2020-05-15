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

module.exports = router

module.exports = router;
