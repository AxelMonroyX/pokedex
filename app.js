'use strict';

var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars')
var api = require('./api')

var port = process.env.PORT || 8080;

app.engine('handlebars', exphbs({ defaultLayout: 'index' }));
app.set('view engine', 'handlebars');

app.use(express.static('views'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());
app.use(api)

var defaultPokemon = {
  id: 54,
  height: '2"072',
  weight: '43.2',
  type: 'water',
  name: 'Psyduck',
  img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/200653/psykokwak.gif',
  title: 'the duck pokemon',
  desc: 'Uses mysterious powers to perform various attacks.'
},
  defaultImg = 'https://media.giphy.com/media/JukJD3YfnXPkA/giphy.gif';


app.get('/', function (req, res) {
  res.render('pokedexInfo', { pokemon: defaultPokemon });
});



app.post('/', function (req, res) {
  var input = req.body.input;
  getPokemonData(input, res);

});

function getPokemonData(input, res) {
  var pokemon

  var err = err || "Pokemon not found",
    pokemon = { img: defaultImg };

  res.render('pokedexInfo', { err: err, pokemon: pokemon });

};


app.listen(port);
console.log('Pokedex things are happening on port ' + port);

