let i=0;

setInterval(()=>{
    i++;
    //result1.innerHTML=value1;
    postMessage(i);
},1000);