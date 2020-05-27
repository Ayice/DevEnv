module.exports = (req, res, next) => {
	// console.log(req.session.passport)
	// console.log(req.user, 'user')
	// console.log(req.isAuthenticated(), 'isAuth')

	// isAuthenticated will look in our req.session.passport.user
	if (req.isAuthenticated()) {
		return next()
	} else {
		res.json({
			status: 'Error',
			msg: 'not authorized',
		})
	}
}
