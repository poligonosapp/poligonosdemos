let User        = require('../models/admin');
let JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt  = require('passport-jwt').ExtractJwt;
// @ts-ignore
let config      = require('../config/config');
 
let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}
 
module.exports = new JwtStrategy(opts, function (jwt_payload: { id: any; }, done: (arg0: null, arg1: boolean) => any) {
    User.findById(jwt_payload.id, function (err: null, user: boolean) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
});