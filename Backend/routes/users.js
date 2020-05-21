var express = require('express');
var router = express.Router();
var db = require('../db');
var mongodb = require('mongodb');
const passport = require("passport");

const userIsLoggedIn = require("../middleware/userIsLoggedIn");


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
	collection.insertOne({ name: req.body.name}, (err, result) => {
		if (err) throw err;
		res.send('User saved to db');
		console.log('User saved to db');
	})

});

/* Iza prøver at lave login funktion  */
// Authenticate the user when logging in
router.post("/login", (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/category",
        failedRedirect: "/login"
    })(req, res, next);
});

// Renders dashboard if user is logged in
router.get("/hovedkategori", userIsLoggedIn, async (req, res) => {

    
});

// Log out the user when pressing the log out link in the header
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
})

module.exports = router;
