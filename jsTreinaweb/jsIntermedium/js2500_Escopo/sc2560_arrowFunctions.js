console.log('arrow functions não perdem o contexto do this, o escopo permanece');
let myObj={
    name:'Treinaweb',
    sayname(){
        console.log(this.name);
        setTimeout(()=>{
            console.log(this.name);
        },1000);
    },
    sayNameAgain:()=>{
        console.log(this.name);
        setTimeout(()=>{
            console.log(this.name);
        },1000);
    }
}

myObj.sayname();

myObj.sayNameAgain();