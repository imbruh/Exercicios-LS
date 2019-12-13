const pokedex = document.querySelector('section')
const nomepoke = document.querySelector('#filter-name')
const tipoPoke = document.querySelector('#filter-type')
let filter_name

function exibir(a){
  result=''
  for (pokemon of a){

    if (pokemon.type.length==1){
      pokemon.type[1]=''
    }

    result+= `<div class="pokemon" data-name="${pokemon.name}" data-type="${pokemon.type[0]},${pokemon.type[1]}" tabindex="1">
        <figure class="pokemon-figure">
          <img src="img/${pokemon.name}.png" alt="${pokemon.name}">
        </figure>
        <section class="pokemon-description">
          <span class="pokemon-id">${pokemon.id}</span>
          <h1 class="pokemon-name">${pokemon.name}</h1>
          <div class="pokemon-types">
            <span class="pokemon-type background-${pokemon.type[0]}">${pokemon.type[0]}</span>
            <span class="pokemon-type background-${pokemon.type[1]}">${pokemon.type[1]}</span>
          </div>
        </section>
        <section class="pokemon-stats">
          <div class="stat-row">
            <div>hp</div>
            <div class="stat-bar">
              <div class="stat-bar-bg" style="width: 18%">${pokemon.stats.hp}</div>
            </div>
          </div>
          <div class="stat-row">
            <div>attack</div>
            <div class="stat-bar">
              <div class="stat-bar-bg" style="width: 19.6%">${pokemon.stats.attack}</div>
            </div>
          </div>
          <div class="stat-row">
            <div>defense</div>
            <div class="stat-bar">
              <div class="stat-bar-bg" style="width: 19.6%">${pokemon.stats.defense}</div>
            </div>
          </div>
          <div class="stat-row">
            <div>sp-atk</div>
            <div class="stat-bar">
              <div class="stat-bar-bg" style="width: 26%">${pokemon.stats["sp-atk"]}</div>
            </div>
          </div>
          <div class="stat-row">
            <div>sp-def</div>
            <div class="stat-bar">
              <div class="stat-bar-bg" style="width: 26%">${pokemon.stats["sp-def"]}</div>
            </div>
          </div>
          <div class="stat-row">
            <div>speed</div>
            <div class="stat-bar">
              <div class="stat-bar-bg" style="width: 18%">${pokemon.stats.speed}</div>
            </div>
          </div>
        </section>
      </div>`
  }
  pokedex.innerHTML=result
}

exibir(pokemons)


nomepoke.addEventListener('keydown',function(){
    if (nomepoke==''){
      exibir(pokemons)
    }
    else{
      array=pokemons.filter(p=>p.name.includes(nomepoke.value))
      exibir(array)
    }
    if (event.key == 'Escape'){
      nomepoke.value=''
      exibir(pokemons)
    }
})


let result2=''
const tipos = ['All','bug','dragon','electric','fairy','fighting','fire','flying','ghost','grass','ground','ice','normal','poison','psychic','rock','steel','water']
for (i of tipos){
  result2 += `<option value="${i}">${i}</option>`
}
tipoPoke.innerHTML=result2

tipoPoke.addEventListener('click',function(){
  if (tipoPoke.value=='All'){
    exibir(pokemons)
  }
  else{
    filter_type=pokemons.filter(p=>p.type.includes(tipoPoke.value))
    exibir(filter_type)
  }
})

const ordenar2 = document.querySelector('#sort-type')
const options = ['Lowest Number (First)','Highest Number (First)','A-Z','Z-A']

function ordenar(valor){
  nomes=[]
  order=[]
  if (valor=='crescente'){
    for (i of pokemons){
      nomes.push(i.name)
    }
    nomes.sort()
    for (i of nomes){
      for (j of pokemons){
        if(i==j.name){
          order.push(j)
        }
      }
    }
  }      
  else if (valor=='decrescente'){
    for (i of pokemons){
      nomes.push(i.name)
    }
    nomes.sort()
    nomes.reverse()
    for (i of nomes){
      for (j of pokemons){
        if(i==j.name){
          order.push(j)
        }
      }
    }
  }
  return order
}

ordenar2.addEventListener('click',function(){
    if(ordenar2.value=='Lowest Number (First)'){
      exibir(pokemons)
    }
    else if(ordenar2.value=='Highest Number (First)'){
      exibir(pokemons.reverse())
    }
    else if(ordenar2.value=='A-Z'){
      exibir(ordenar('crescente'))
    }
    else if(ordenar2.value=='Z-A'){
      exibir(ordenar('decrescente'))
    }             
})

