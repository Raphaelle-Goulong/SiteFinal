var mongoose = require('mongoose')

var commandeSchema = mongoose.Schema({
    produit:String,
    name: String,
    quantité:Number,
    price:Number,
    total:Number,

    });
    var CommandeModel = mongoose.model('commande', commandeSchema);

