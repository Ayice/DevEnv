var MongoClient = require('mongodb').MongoClient

var state = { db: null }

exports.connect = function (done) {
	if (state.db) return done()

	MongoClient.connect('mongodb+srv://group:group123@devenv-swzwi.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true })
		.then((client) => {
			state.db = client.db('devenv')
			done()
		})
		.catch((err) => console.log(err))
}

exports.get = function () {
	return state.db
}
