const pokemons = [
    {
      "img": "img/001.png",
      "name": "Bulbasaur",
      "price": 1.50
    },
    {
      "img": "img/002.png",
      "name": "Ivysaur",
      "price": 1.50
    },
    {
      "img": "img/003.png",
      "name": "Venusaur",
      "price": 1.50
    },
    {
      "img": "img/004.png",
      "name": "Charmander",
      "price": 1.50
    },
    {
      "img": "img/005.png",
      "name": "Charmeleon",
      "price": 2.50
    },
    {
      "img": "img/006.png",
      "name": "Charizard",
      "price": 3.00
    },
    {
      "img": "img/007.png",
      "name": "Squirtle",
      "price": 2.50
    },
    {
      "img": "img/008.png",
      "name": "Wartortle",
      "price": 1.00
    },
    {
      "img": "img/009.png",
      "name": "Blastoise",
      "price": 2.50
    },
    {
      "img": "img/010.png",
      "name": "Caterpie",
      "price": 3.00
    },
    {
      "img": "img/011.png",
      "name": "Metapod",
      "price": 3.00
    },
    {
      "img": "img/012.png",
      "name": "Butterfree",
      "price": 2.50
    },
    {
      "img": "img/013.png",
      "name": "Weedle",
      "price": 1.00
    },
    {
      "img": "img/014.png",
      "name": "Kakuna",
      "price": 3.00
    },
    {
      "img": "img/015.png",
      "name": "Beedrill",
      "price": 2.50
    },
    {
      "img": "img/016.png",
      "name": "Pidgey",
      "price": 1.00
    },
    {
      "img": "img/017.png",
      "name": "Pidgeotto",
      "price": 1.00
    },
    {
      "img": "img/018.png",
      "name": "Pidgeot",
      "price": 3.00
    },
    {
      "img": "img/019.png",
      "name": "Rattata",
      "price": 1.00
    },
    {
      "img": "img/020.png",
      "name": "Raticate",
      "price": 2.50
    },
    {
      "img": "img/021.png",
      "name": "Spearow",
      "price": 1.00
    },
    {
      "img": "img/022.png",
      "name": "Fearow",
      "price": 3.00
    },
    {
      "img": "img/023.png",
      "name": "Ekans",
      "price": 3.00
    },
    {
      "img": "img/024.png",
      "name": "Arbok",
      "price": 2.50
    },
    {
      "img": "img/025.png",
      "name": "Pikachu",
      "price": 1.00
    },
    {
      "img": "img/026.png",
      "name": "Raichu",
      "price": 3.00
    },
    {
      "img": "img/027.png",
      "name": "Sandshrew",
      "price": 1.00
    },
    {
      "img": "img/028.png",
      "name": "Sandslash",
      "price": 2.50
    },
    {
      "img": "img/029.png",
      "name": "Nidoran♀",
      "price": 3.00
    },
    {
      "img": "img/030.png",
      "name": "Nidorina",
      "price": 1.00
    },
    {
      "img": "img/031.png",
      "name": "Nidoqueen",
      "price": 1.00
    },
    {
      "img": "img/032.png",
      "name": "Nidoran♂",
      "price": 3.00
    },
    {
      "img": "img/033.png",
      "name": "Nidorino",
      "price": 1.00
    },
    {
      "img": "img/034.png",
      "name": "Nidoking",
      "price": 1.00
    },
    {
      "img": "img/035.png",
      "name": "Clefairy",
      "price": 3.00
    },
    {
      "img": "img/036.png",
      "name": "Clefable",
      "price": 2.50
    },
    {
      "img": "img/037.png",
      "name": "Vulpix",
      "price": 1.00
    },
    {
      "img": "img/038.png",
      "name": "Ninetales",
      "price": 3.00
    },
    {
      "img": "img/039.png",
      "name": "Jigglypuff",
      "price": 1.00
    },
    {
      "img": "img/040.png",
      "name": "Wigglytuff",
      "price": 1.00
    },
    {
      "img": "img/041.png",
      "name": "Zubat",
      "price": 3.00
    },
    {
      "img": "img/042.png",
      "name": "Golbat",
      "price": 1.00
    },
    {
      "img": "img/043.png",
      "name": "Oddish",
      "price": 2.50
    },
    {
      "img": "img/044.png",
      "name": "Gloom",
      "price": 1.00
    },
    {
      "img": "img/045.png",
      "name": "Vileplume",
      "price": 3.00
    },
    {
      "img": "img/046.png",
      "name": "Paras",
      "price": 1.00
    },
    {
      "img": "img/047.png",
      "name": "Parasect",
      "price": 1.00
    },
    {
      "img": "img/048.png",
      "name": "Venonat",
      "price": 3.00
    },
    {
      "img": "img/049.png",
      "name": "Venomoth",
      "price": 3.00
    },
    {
      "img": "img/050.png",
      "name": "Diglett",
      "price": 2.50
    },
    {
      "img": "img/051.png",
      "name": "Dugtrio",
      "price": 1.00
    },
    {
      "img": "img/052.png",
      "name": "Meowth",
      "price": 3.00
    },
    {
      "img": "img/053.png",
      "name": "Persian",
      "price": 1.00
    },
    {
      "img": "img/054.png",
      "name": "Psyduck",
      "price": 1.00
    },
    {
      "img": "img/055.png",
      "name": "Golduck",
      "price": 1.00
    },
    {
      "img": "img/056.png",
      "name": "Mankey",
      "price": 2.50
    },
    {
      "img": "img/057.png",
      "name": "Primeape",
      "price": 1.00
    },
    {
      "img": "img/058.png",
      "name": "Growlithe",
      "price": 1.00
    },
    {
      "img": "img/059.png",
      "name": "Arcanine",
      "price": 1.00
    },
    {
      "img": "img/060.png",
      "name": "Poliwag",
      "price": 1.00
    },
    {
      "img": "img/061.png",
      "name": "Poliwhirl",
      "price": 1.00
    },
    {
      "img": "img/062.png",
      "name": "Poliwrath",
      "price": 2.50
    },
    {
      "img": "img/063.png",
      "name": "Abra",
      "price": 1.00
    },
    {
      "img": "img/064.png",
      "name": "Kadabra",
      "price": 1.00
    },
    {
      "img": "img/065.png",
      "name": "Alakazam",
      "price": 1.00
    },
    {
      "img": "img/066.png",
      "name": "Machop",
      "price": 1.00
    },
    {
      "img": "img/067.png",
      "name": "Machoke",
      "price": 1.00
    },
    {
      "img": "img/068.png",
      "name": "Machamp",
      "price": 2.50
    },
    {
      "img": "img/069.png",
      "name": "Bellsprout",
      "price": 1.00
    },
    {
      "img": "img/070.png",
      "name": "Weepinbell",
      "price": 1.00
    },
    {
      "img": "img/071.png",
      "name": "Victreebel",
      "price": 1.00
    },
    {
      "img": "img/072.png",
      "name": "Tentacool",
      "price": 1.00
    },
    {
      "img": "img/073.png",
      "name": "Tentacruel",
      "price": 2.50
    },
    {
      "img": "img/074.png",
      "name": "Geodude",
      "price": 1.00
    },
    {
      "img": "img/075.png",
      "name": "Graveler",
      "price": 1.50
    },
    {
      "img": "img/076.png",
      "name": "Golem",
      "price": 3.00
    },
    {
      "img": "img/077.png",
      "name": "Ponyta",
      "price": 3.00
    },
    {
      "img": "img/078.png",
      "name": "Rapidash",
      "price": 3.00
    },
    {
      "img": "img/079.png",
      "name": "Slowpoke",
      "price": 3.00
    },
    {
      "img": "img/080.png",
      "name": "Slowbro",
      "price": 1.00
    },
    {
      "img": "img/081.png",
      "name": "Magnemite",
      "price": 2.50
    },
    {
      "img": "img/082.png",
      "name": "Magneton",
      "price": 1.00
    },
    {
      "img": "img/083.png",
      "name": "Farfetch'd",
      "price": 3.00
    },
    {
      "img": "img/084.png",
      "name": "Doduo",
      "price": 3.00
    },
    {
      "img": "img/085.png",
      "name": "Dodrio",
      "price": 3.00
    },
    {
      "img": "img/086.png",
      "name": "Seel",
      "price": 1.00
    },
    {
      "img": "img/087.png",
      "name": "Dewgong",
      "price": 2.50
    },
    {
      "img": "img/088.png",
      "name": "Grimer",
      "price": 1.50
    },
    {
      "img": "img/089.png",
      "name": "Muk",
      "price": 1.00
    },
    {
      "img": "img/090.png",
      "name": "Shellder",
      "price": 1.50
    },
    {
      "img": "img/091.png",
      "name": "Cloyster",
      "price": 1.50
    },
    {
      "img": "img/092.png",
      "name": "Gastly",
      "price": 3.00
    },
    {
      "img": "img/093.png",
      "name": "Haunter",
      "price": 1.50
    },
    {
      "img": "img/094.png",
      "name": "Gengar",
      "price": 1.50
    },
    {
      "img": "img/095.png",
      "name": "Onix",
      "price": 2.50
    },
    {
      "img": "img/096.png",
      "name": "Drowzee",
      "price": 3.00
    },
    {
      "img": "img/097.png",
      "name": "Hypno",
      "price": 2.50
    },
    {
      "img": "img/098.png",
      "name": "Krabby",
      "price": 2.50
    },
    {
      "img": "img/099.png",
      "name": "Kingler",
      "price": 1.50
    },
    {
      "img": "img/100.png",
      "name": "Voltorb",
      "price": 2.50
    }
  ]

  