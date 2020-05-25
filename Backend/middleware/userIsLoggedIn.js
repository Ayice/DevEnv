module.exports = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next()
	} else {
		console.log(req._passport)
		res.json({
			status: 'Error',
			msg: 'not authorized',
		})
	}
}
