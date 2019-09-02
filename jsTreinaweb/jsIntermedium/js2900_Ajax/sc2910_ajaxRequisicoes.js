//install http-server: sudo npm install -g http-server
//abrir o servidor na pasta onde wstão os arquivos que quer manipular

let myReq=new XMLHttpRequest();

myReq.onload=function(){
    console.log(JSON.parse(this.responseText));
}

myReq.open('get','https://api.github.com/search/repositories?q=javascript',true);
myReq.send();