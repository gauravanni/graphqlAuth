const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    // social: {
    //     facebookProvider: {
    //         id: String,
    //         token: String,
    //     },
    //     googleProvider: {
    //         id: String,
    //         token: String
    //     }
    // },
    avatar:{
        type:String
    }
  
});

userSchema.methods.generateJWT = function () {
  return jwt.sign({
      email: this.email,
      id: this._id
  }, 'secret');
}

module.exports = mongoose.model('User', userSchema);