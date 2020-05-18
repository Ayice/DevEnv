var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../app')
var should = chai.should()

chai.use(chaiHttp)

describe('Category route', () => {
	// describe('DELETE ALL', function () {
	// 	it('should remove all first', (done) => {
	// 		chai
	// 			.request(server)
	// 			.delete('/category')
	// 			.send({})
	// 			.end((err, res) => {
	// 				//console.log (res)
	// 				// console.log("err",err);
	// 				res.should.have.status(200)
	// 				console.log('Response Body:', res.body)
	// 				// console.log (result);
	// 				done()
	// 			})
	// 	})
	// })

	describe('/ GET categories', () => {
		it('It should get all categories', (done) => {
			chai
				.request(server)
				.get('/category')
				.end((err, res) => {
					res.should.have.status(200)
					done()
				})
		})
	})
})
