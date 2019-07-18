
    const languageSelect = document.querySelector('#language-tags');
    const listElement = document.getElementById('list');
    const templateWorker= new Worker('./sc3370d_renderWork.js');

    const config= new Proxy({
        listItems:[],
        languageTag:'en-US'
    }, {
        set:function(target, prop, value, receiver){
            if(prop==='listItems' || prop=='languageTag'){
                Reflect.set(...arguments);
                render();
                return true;
            }
            return false;
        }
    })

    //let listItems = [];

    //let languageTag = 'en-US';

    languageSelect.addEventListener("change", changeLanguage);

    function changeLanguage() {
        //alterar de languageTag para o abaixo
       config.languageTag = languageSelect.value;
        //como o proxy ja chama o render, não precisa mais chamá-lo aqui.
       //render();
    }

    export function setList(list) {
       config.listItems = list;
       //como o proxy ja chama o render, não precisa mais chamá-lo aqui.
        //render();
    }

    function render() {
        //ao trabalhar co  proxy, é necessário converter os valores 
        //para que ele possa trabalhar corretamente com os mesmos
        const configParam=JSON.parse (JSON.stringify(config));
        templateWorker.postMessage(configParam);
    
        //templateWorker.postMessage(config);

        templateWorker.onmessage=function({data}){
            listElement.innerHTML=data;
        }
       // listElement.innerHTML = html;
    }
    /*depois de exportar o return setList não é mais necessário
    return {
        setList
    }*/
