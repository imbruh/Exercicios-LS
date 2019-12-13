const cep = document.querySelector('#cep')

const cepError = document.querySelector('#cepError')


function getCep(url){
    fetch(url)
    .then(res => res.json())
    .then(json => showContent(json))
}

function showContent(cep){
    street.value = cep.logradouro
    neighborhood.value = cep.bairro
    state.value = cep.uf
    city.value = cep.localidade
}

const street = document.querySelector('#street')
const neighborhood = document.querySelector('#neighborhood')
const state = document.querySelector('#state')
const city = document.querySelector('#city')

cep.addEventListener('blur', function(event){
    getCep(`https://viacep.com.br/ws/${cep.value}/json/`)
    if (cep.value.length != 8){
        cepError.style.display='inline'
    }
    else{
        cepError.style.display='none'
    }
})

