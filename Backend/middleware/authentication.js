const LocalStrategy = require('passport').Strategy;
// const User = require('../models/User'); Hvordan finder vi user i mongo?

module.exports = function(passport) {
    passport.use(
        // Authenticate the user
        new LocalStrategy((username, password, done) => {
            User.findOne({username: username})
                .then((user) => {
                    if (!user) {
                        return done(null, false, { error: 'User does not excist' });
                    }

                    if (user.password !== password) {
                        return done(null, false, { error: 'The password is not correct' });
                    }
                    console.log("User is logged in");

                    return done(null, user);
                })
                .catch((err) => console.log(err));
        })
    );
    // Give userID to cookie
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    // Deserialize user when loggin out
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}