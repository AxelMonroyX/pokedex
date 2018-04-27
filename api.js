var express = require('express');
var router = express.Router();

router.get('/poke', function (req, res) {
  res.json({
    "count": 949,
    "previous": null,
    "results": [
      {
        "url": "https://pokeapi.co/api/v2/pokemon/1/",
        "name": "bulbasaur"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/2/",
        "name": "ivysaur"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/3/",
        "name": "venusaur"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/4/",
        "name": "charmander"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/5/",
        "name": "charmeleon"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/6/",
        "name": "charizard"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/7/",
        "name": "squirtle"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/8/",
        "name": "wartortle"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/9/",
        "name": "blastoise"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/10/",
        "name": "caterpie"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/11/",
        "name": "metapod"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/12/",
        "name": "butterfree"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/13/",
        "name": "weedle"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/14/",
        "name": "kakuna"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/15/",
        "name": "beedrill"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/16/",
        "name": "pidgey"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/17/",
        "name": "pidgeotto"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/18/",
        "name": "pidgeot"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/19/",
        "name": "rattata"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/20/",
        "name": "raticate"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/21/",
        "name": "spearow"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/22/",
        "name": "fearow"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/23/",
        "name": "ekans"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/24/",
        "name": "arbok"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/25/",
        "name": "pikachu"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/26/",
        "name": "raichu"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/27/",
        "name": "sandshrew"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/28/",
        "name": "sandslash"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/29/",
        "name": "nidoran-f"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/30/",
        "name": "nidorina"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/31/",
        "name": "nidoqueen"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/32/",
        "name": "nidoran-m"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/33/",
        "name": "nidorino"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/34/",
        "name": "nidoking"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/35/",
        "name": "clefairy"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/36/",
        "name": "clefable"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/37/",
        "name": "vulpix"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/38/",
        "name": "ninetales"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/39/",
        "name": "jigglypuff"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/40/",
        "name": "wigglytuff"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/41/",
        "name": "zubat"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/42/",
        "name": "golbat"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/43/",
        "name": "oddish"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/44/",
        "name": "gloom"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/45/",
        "name": "vileplume"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/46/",
        "name": "paras"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/47/",
        "name": "parasect"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/48/",
        "name": "venonat"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/49/",
        "name": "venomoth"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/50/",
        "name": "diglett"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/51/",
        "name": "dugtrio"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/52/",
        "name": "meowth"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/53/",
        "name": "persian"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/54/",
        "name": "psyduck"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/55/",
        "name": "golduck"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/56/",
        "name": "mankey"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/57/",
        "name": "primeape"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/58/",
        "name": "growlithe"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/59/",
        "name": "arcanine"
      },
      {
        "url": "https://pokeapi.co/api/v2/pokemon/60/",
        "name": "poliwag"
      }
    ],
    "next": "https://pokeapi.co/api/v2/pokemon/?limit=60&offset=60"
  })
});

module.exports = router;
