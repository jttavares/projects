const search=document.getElementById('mySearch');
const list=document.getElementById('list');

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
    listItems.forEach(item=>{
        html+=`
        <li>
                
                <div><b>Name: </b> ${item.name}</div>
                    
                    <div><b>Created At:</b>${item.created_at}</div>
                    
                    <div><b>Forks: </b>${item.forks}</div>
                    
                
            </li>
        `
    });
    list.innerHTML=html;
}

render();