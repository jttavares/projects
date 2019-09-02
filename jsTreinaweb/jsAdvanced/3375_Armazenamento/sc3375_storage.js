var myObj={
    name:'Treinaweb',
    curso: 'JavaScript - Avançado',
    secao: 'LocalStorage'
}
localStorage.setItem('salvandoObjeto',JSON.stringify(myObj))

var myObjL= JSON.parse(localStorage.getItem('salvandoObjeto'))

localStorage.removeItem('salvandoObjeto');
