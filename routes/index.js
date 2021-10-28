var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var habit = [
  {name:"Veste à carreaux",url:"/images/Vetement1.jpg",price:33},
  {name:"Veste en cuir",url:"/images/Vetement2.jpg",price:40},
  {name:"Ensemble street ",url:"/images/Vetement3.jpg",price:49},
  {name:"Jean bleu",url:"/images/Vetement4.jpg",price:15},
  {name:"T-Shirt",url:"/images/Vetement5.jpg",price:9},
  {name:"Combinaison",url:"/images/Vetement6.jpg",price:21},
  {name:"T-Shirt rouge",url:"/images/Vetement7.jpg",price:11},
  {name:"Jean",url:"/images/Vetement8.jpg",price:15},
  {name:"Pull",url:"/images/Vetement9.jpg",price:19},

]

var jouet = [
  {name:"Lego Batman",url:"/images/Jeux1.jpg",price:10},
  {name:"Xbox series x",url:"/images/Jeux2.jpg",price:499},
  {name:"Train lego ",url:"/images/Jeux3.jpg",price:20},
  {name:"Playstation 1",url:"/images/Jeux4.jpg",price:99},
  {name:"Xbox series s",url:"/images/Jeux5.jpg",price:299},
  {name:"Playstation 5",url:"/images/Jeux6.jpg",price:699},
  {name:"Figurine Mario Bros",url:"/images/Jeux7.jpg",price:39},
  

]

var bijoux = [
  {name:"Broche Abeille",url:"/images/Bijoux1.jpg",price:20},
  {name:"Bracelet de perle",url:"/images/Bijoux2.jpg",price:59},
  {name:"Bracelet ",url:"/images/Bijoux3.jpg",price:40},
  {name:"Collier",url:"/images/Bijoux4.jpg",price:199},
  {name:"Collier Soleil",url:"/images/Bijoux5.jpg",price:199},
  {name:"Bague coeur",url:"/images/Bijoux6.jpg",price:21},
  

]
var Chaussure = [
  {name:"Derby",url:"/images/Chaussure1.jpg",price:30},
  {name:"Converse",url:"/images/Chaussure2.jpg",price:50},
  {name:"New Balance ",url:"/images/Chaussure3.jpg",price:49},
  {name:"Nike air force",url:"/images/Chaussure4.jpg",price:95},
  {name:"Chaussure",url:"/images/Chaussure5.jpg",price:19},
  {name:"Chaussure de ville",url:"/images/Chaussure6.jpg",price:41},
  {name:"Nike sport",url:"/images/Chaussure7.jpg",price:109},
  {name:"Nike",url:"/images/Chaussure8.jpg",price:150},
  {name:"Bottine",url:"/images/Chaussure9.jpg",price:39},

]

var ajPanier = [
  {name:'name',url:'url',price:'price',quantité:'quantité'},
  {name:"Bracelet de perle",url:"/images/Bijoux2.jpg",price:59,quantité:2},
  {name:"Bottine",url:"/images/Chaussure9.jpg",price:39,quantité:5},
]



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('accueil', );
});

router.get('/accueil', function(req, res, next) {
  res.render('accueil', );
});

router.get('/samAmuse', function(req, res, next) {
  res.render('samAmuse', {jouet});
});

router.get('/samHabille', function(req, res, next) {
  res.render('samHabille',{habit} );
});

router.get('/samLocale', function(req, res, next) {
  res.render('samLocale',{bijoux} );
});

router.get('/samChausse', function(req, res, next) {
  res.render('samChausse', {Chaussure});
});

router.post('/inscription', function(req, res, next) {
  res.render('inscription', );
});

router.get('/panier', function(req, res, next) {
  res.render('panier',{ajPanier} );
});

router.post('/modification', function(req, res, next) {
  res.render('modification', );
});

module.exports = router;
