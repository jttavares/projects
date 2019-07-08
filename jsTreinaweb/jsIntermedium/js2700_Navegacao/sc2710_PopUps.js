var text=document.getElementById('textInput'),
button=document.getElementById('button'),
myWindow=null;

function newPage(){
    let adress='http://'+ text.value;
    if(myWindow && myWindow.closed){
        myWindow.location.href=adress;
    }else{
        myWindow=window.open(adress);
    }
    
}

button.addEventListener("click",newPage);
