var mongoose = require('mongoose')

var articleSchema = mongoose.Schema({
    image:String,
    name: String,
    price:Number,

    });
    var ArticleModel = mongoose.model('article', articleSchema);




  
  