const pokemonArea= document.querySelector('#pokemons')

let result=''
for (i of pokemons){
    result+=`<div class="pokemon-view">
        <img class="pokemon-view-img" src=${i.img} alt="Voltorb">
        <span class="pokemon-view-name">${i.name}</span>
        <span class="pokemon-view-price">R$ ${i.price.toFixed(2)}</span>
        <button class="pokemon-view-shop">COMPRAR</button>
    </div>`
}  
pokemonArea.innerHTML=result


const botao = document.querySelector('.nav-top')

botao.addEventListener('scroll',function(){
    if (window.scroll(Y) > window.innerHeight * 1/3 ){
        botao.style.display='inline'
    }
    else{
        botao.style.display='none'
    }
})


botao.addEventListener('click',function(event){
    window.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: 0
    })
})


const carrinho = document.querySelector('.cart-count')
const compra = document.querySelectorAll('.pokemon-view-shop')
cont=0
carrinho.style.display='none'

for (i of compra){
    i.addEventListener('click',function(event){
        cont++
        carrinho.style.display='inline'
        carrinho.innerHTML=cont
    })
}
