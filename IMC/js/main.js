const altura=document.querySelector('#altura')
const peso=document.querySelector('#peso')
const sexo=document.querySelector('input:checked')
let resultado=document.querySelector('#imc')
const warning = document.querySelector('#warning')


function Imc(altura,peso,sexo){
    imc = peso / altura ** 2
    result=''
    imc2 = document.querySelector('#imc')
    if (sexo=='masculino'){
        if (imc < 20.7){
            imc2.setAttribute('class','form-control form-control-lg border border-warning bg-warning text-white')
            result='Abaixo do peso'
        }
        else if (imc < 26.4){
            imc2.setAttribute('class','form-control form-control-lg border border-sucess bg-success text-white')
            result='Peso Normal'
        }
        else if (imc < 27.8){
            imc2.setAttribute('class','form-control form-control-lg border border-warning bg-warning text-white')
            result='Marginalmente Acima do Peso'
        }
        else if (imc < 31.1){
            imc2.setAttribute('class','form-control form-control-lg border border-warning bg-warning text-white')
            result='Acima do Peso Ideal'
        }
        else{
            imc2.setAttribute('class','form-control form-control-lg border border-danger bg-danger text-white')
            result='Obeso'
        }
    }
    else{
        if (imc < 19.1){
            imc2.setAttribute('class','form-control form-control-lg border border-warning bg-warning text-white')
            result='Abaixo do peso'
        }
        else if (imc < 25.8){
            imc2.setAttribute('class','form-control form-control-lg border border-sucess bg-success text-white')
            result='Peso Normal'
        }
        else if (imc < 27.3){
            imc2.setAttribute('class','form-control form-control-lg border border-warning bg-warning text-white')
            result='Marginalmente Acima do Peso'
        }
        else if (imc < 32.3){
            imc2.setAttribute('class','form-control form-control-lg border border-warning bg-warning text-white')
            result='Acima do Peso Ideal'
        }
        else{
            imc2.setAttribute('class','form-control form-control-lg border border-danger bg-danger text-white')
            result='Obeso'
        }
    }
    return result
}

function calculadoraDeIMC(){
    resultado.value=Imc(altura.value,peso.value,sexo.value)
}


document.addEventListener('keyup',function(){
    if(event.key=='Enter'){
        calculadoraDeIMC()
    }
    else if(event.key=='Escape'){
        altura.value=''
        peso.value=''
        resultado.value=''
        resultado.setAttribute('class','form-control form-control-lg')
    }
})
    
