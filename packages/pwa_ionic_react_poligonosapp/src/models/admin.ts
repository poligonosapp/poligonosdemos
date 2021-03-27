// let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
  
let UserSchema = new mongoose.Schema({
  email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
  password: {
        type: String,
        required: true
    }
});
 
UserSchema.pre('save',  function(next: (arg0: undefined) => void) {
    let user = this;
 
     if (!user.isModified('password')) return next();
 
     bcrypt.genSalt(10, function(err: undefined, salt: any) {
         if (err) return next(err);
 
         bcrypt.hash(user.password, salt, function(err: boolean, hash) {
             if (err) return next(err);
 
             user.password = hash;
             next();
         });
     });
});
 
UserSchema.methods.comparePassword = function (candidatePassword: any, cb: (arg0: null, arg1: undefined) => void) {
    bcrypt.compare(candidatePassword, this.password, (err: null, isMatch: undefined) => {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
 
module.exports = mongoose.model('User', UserSchema);