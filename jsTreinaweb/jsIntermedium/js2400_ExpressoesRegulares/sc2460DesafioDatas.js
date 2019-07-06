

function replaceData(data){
    let regexp=/(\d{2})\/(\d{2})\/(\d{4})/;
console.log(data.replace(regexp, "$3-$2-$1"));
}

replaceData("05/07/2019")

