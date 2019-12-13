const area = document.querySelector('textarea')

loadActions()


function formatter(text,act){
    if (act=='lowercase'){
        return text.toLowerCase()
    }
    else if(act=='uppercase'){
        return text.toUpperCase()
    }
    else if(act=='capitalize'){
        let result = []
        for (i of text.split(' ')) {
           a = i[0].toUpperCase()
           r = i.substr(1).toLowerCase()
          result.push(a + r)
        }
        return result.join(' ')
    }
    else if(act=='snake case'){
        return text.replace(/\s/g,'-')
    }
    else if(act=='reverse'){
      return text.split('').reverse().join('') 
    }
    else if(act=='character count'){
      return text.length
    }
    else if(act=='word count'){
      return text.split(' ').length
      
    }
    else if(act=='line count'){
      return text.split('\n').length
      
    }
}

function loadActions() {
    const actions = Array.from(document.querySelectorAll('button'))
    for(i of actions) {
      i.addEventListener('click', function(event) {
        const actionName = this.innerHTML.toLowerCase()
        area.value = formatter(area.value, actionName)
      })
    }
  }