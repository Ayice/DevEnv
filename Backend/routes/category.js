var express = require('express')
var router = express.Router()
var db = require('../db')
var mongodb = require('mongodb')

/* GET category listing. */
router.get('/', function (req, res, next) {
	db.connect((err, result) => {
		if (err) throw err

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
	})
})

/**
 * Create new Hovedkategori
 * Brug postman
 */
router.post('/', (req, res) => {
	db.connect((err, result) => {
		if (err) throw err
		db.get()
			.collection('hovedkategori')
			.insertOne({ ...req.body })
			.then(() => {
				res.json({
					status: 'Success',
					msg: 'The Category is inserted!',
				})
			})
			.catch((err) => {
				res.json({
					status: 'Error',
					msg: 'There was a problem',
				})
			})
	})
})

router.get('/:id', (req, res) => {
	db.connect((err, result) => {
		if (err) throw err
		db.get()
			.collection('emner')
			.find({ kategori: req.params.id })
			.toArray()
			.then((result) => {
				res.json({
					status: 'Success',
					msg: 'Fetched Data',
					data: result,
				})
			})
			.catch((err) => {
				res.json({
					status: 'Error',
					msg: 'There was a problem',
				})
			})
	})
})

module.exports = router
