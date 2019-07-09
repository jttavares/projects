const search=document.getElementById('mySearch');
const list=document.getElementById('list');
const languageSelect=document.querySelector('#language-tags');

let languageTag=languageSelect.value;

languageSelect.addEventListener("change",changeLanguage);

function changeLanguage(){
    languageTag=languageSelect.value;
    render();
}



let listItems=[
    {
        name:'Javascript1',
        created_at: '2019-07-25T20:10:50Z',
        forks:12380
    },
    {
        name:'Javascript2',
        created_at: '2019-07-25T20:10:50Z',
        forks:15800
    },
    {
        name:'Javascript3',
        created_at: '2019-07-25T20:10:50Z',
        forks:2570
    }
]

function render(){
    let html='';
    const numberFormatter=new Intl.NumberFormat(languageTag);
    const dateFormatter=new Intl.DateTimeFormat(languageTag,{weekday:'long',year:'numeric',month:'long',day:'numeric'});

    listItems.forEach(item=>{
        const forks=numberFormatter.format(item.forks);
        const createdAt=dateFormatter.format(new Date(item.created_at));
        html+=`
        <li>
                
                <div><b>Name: </b> ${item.name}</div>
                    
                    <div><b>Created At:</b>${createdAt}</div>
                    
                    <div><b>Forks: </b>${forks}</div>
                    
                
            </li>
        `
    });
    list.innerHTML=html;
}

render();