let myPromise=new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(500);
    }, 2000);
})

myPromise
.then(value=>{
    console.log(`My Value: ${value}`)
    return 900
})
.then(value=>{
    console.log(`My Value: ${value}`)
    return 100
})
.then(value=>{
    console.log(`My Value: ${value}`)
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(400);
        }, 2000);
    })
})
.then(value=>{
    console.log(`My Value: ${value}`)
    return 300
})

let mypromise3=Promise.resolve(77);

setTimeout(() => {
    console.log('Método estático \'race\' retorna a primeira promise que finalizar');

    let p1=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(500)
        }, 1000)
    })

    let p2=Promise.resolve(88);

    Promise.race([p1,p2]).then((value)=>{
        console.log(`Resultado da race: ${value}`);
    })
    Promise.all([p1,p2]).then((value)=>{
        console.log(`Resultado da all: ${value}`);
    })

}, 5000);
