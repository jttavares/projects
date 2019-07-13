
    const languageSelect = document.querySelector('#language-tags');
    const listElement = document.getElementById('list');
    const templateWorker= new Worker('./sc3360d_renderWork.js');

    const config={
        listItems:[],
        languageTag:'en-US'
    }

    //let listItems = [];

    //let languageTag = 'en-US';

    languageSelect.addEventListener("change", changeLanguage);

    function changeLanguage() {
        //alterar de languageTag para o abaixo
       config.languageTag = languageSelect.value;
        render();
    }

    export function setList(list) {
       config.listItems = list;
        render();
    }

    function render() {
        templateWorker.postMessage(config);

        templateWorker.onmessage=function({data}){
            listElement.innerHTML=data;
        }
       // listElement.innerHTML = html;
    }
    /*depois de exportar o return setList não é mais necessário
    return {
        setList
    }*/
