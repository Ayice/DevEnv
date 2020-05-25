var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const cors = require('cors')
const db = require('./db')
const session = require('express-session')
const isAuth = require('./middleware/userIsLoggedIn')

db.connect(() => {
	console.log('connected to this shit')
})

var app = express()

const passport = require('passport')
app.use(passport.initialize())
app.use(passport.session())
require('./middleware/authentication')(passport)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// Middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

//Initialize session with some options
app.use(
	session({
		secret: 'secret',
		resave: false,
		saveUninitialized: false,
		expires: new Date(Date.now() + 3600000),
	})
)

// Routes
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var categoryRouter = require('./routes/category')

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/category', isAuth, categoryRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

module.exports = app
