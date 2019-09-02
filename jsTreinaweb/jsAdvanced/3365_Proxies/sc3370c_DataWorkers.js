import * as $ from './sc3370b_templateWorkers.js';

    const searchInput = document.getElementById('mySearch');

    searchInput.addEventListener('keyup', search);

    //#region Fetch tardicional
   /* function search(event) {
        if (event && event.keyCode === 13) {
           const searchQuery=searchInput.value;
           fetch(`https://api.github.com/search/repositories?q=${searchQuery}`)
           .then(response=>response.json())
           .then(response=>response.items)
           .then($.setList);
        }
    }*/
    //#endregion

    //#region com metodo async

    export default async function search(event) {
        if (event && event.keyCode === 13) {
           const searchQuery=searchInput.value;
          let response=await fetch(`https://api.github.com/search/repositories?q=${searchQuery}`)
           response=await response.json();
           $.setList(response.items);
        }
    }
    //#endregion
