
(async function(){
    let response= await fetch('https://api.github.com/search/repositories?q=javascript');
    let myData= await response.json()
    console.log(myData);
})()