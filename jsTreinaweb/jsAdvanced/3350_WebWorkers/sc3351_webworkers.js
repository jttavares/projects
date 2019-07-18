let result1=document.querySelector('#result1'),
result2=document.querySelector('#result2');
value1=0,
value2=0,
//importando o worker
worker;

function start(){
    setInterval(()=>{
        value1++;
        result1.innerHTML=value1;
    },1000);

    worker=new Worker('sc3351b_webworkers.js');
    worker.onmessage=function(event){
        value2=event.data;
        result2.innerHTML=value2;
    }
}