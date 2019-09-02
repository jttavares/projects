function planeta(){
    function pais(){
        function estado(){
            function cidade(){
                function bairro(){
                    function rua(){
                        function suaCasa(){
                            
                        }
                    }
                }
            }
        }
    }
}

console.log('Quando a função filho ainda consegue acessar o valor da função pai após sua execução, chamamos isso de closure.')
var add=(function(){
    let counter=0;
    return function(){
        return counter++;
    }
})();