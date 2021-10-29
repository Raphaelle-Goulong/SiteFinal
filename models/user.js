var userSchema = mongoose.Schema({
    lastname: String,
    firstname: String,
    date:Number,
    email: String,
    password :String,
    adress:String,
    city:String,
    zip:Number,

    });
    var UserModel = mongoose.model('users', userSchema);