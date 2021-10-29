var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    lastname: String,
    firstname: String,
    date:Date,
    email: String,
    password :String,
    adress:String,
    city:String,
    zip:String,

    });
    var UserModel = mongoose.model('users', userSchema);