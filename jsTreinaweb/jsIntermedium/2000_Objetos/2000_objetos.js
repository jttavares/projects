function Pencil(color, length){
    this.color=color;
    this.length=length;
    this.write=(text)=>{
        console.log(text);
    }
}

let myPencil=new Pencil('red',15);

let myPencil2=new  Pencil('blue',20);