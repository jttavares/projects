$('.def');
$('#abc').on('click',function(){console.log('abc')},
$('#abc').on('click',function(){console.log('abc')}),
$.ajax('https://api.github.com/search/repositories?q=javascript')
.then(function(response){
    console.log(response)
}))