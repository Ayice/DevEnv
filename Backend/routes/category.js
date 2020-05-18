var express = require('express')
var router = express.Router()
var db = require('../db')
var mongodb = require('mongodb')

/* GET category listing. */
router.get('/', function (req, res, next) {
	db.connect((err, result) => {
		if (err) {
			return
		} else {
			var collection = db.get().collection('hovedkategori')
			collection
				.find()
				.toArray()
				.then((result) => {
					res.status(200).json({
						status: 'success',
						result: result,
					})
				})
		}
	})
})

// router.post('/', (req, res, next) => {
// 	db.connect((err, result) => {
// 		if (err) {
// 			res.status(500).json({
// 				status: 'Error',
// 				msg: 'We cannot connect to db...',
// 			})
// 		} else {
// 			let collection = db.get().collection('hovedkategori')
// 			collection.insertOne(...req.body.data)
// 		}
// 	})
// })

module.exports = router
