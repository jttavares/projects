/*function Pencil(){
    this.color='red';
    this.write=function(text){
        console.log(text);
    }
}*/

class Pencil{
    constructor(color){
        this.color=color;
    }
    write(text){
        console.log(text);
    }
}

let myPencil=new Pencil('red');