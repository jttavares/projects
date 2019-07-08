let myNumber=1285;

let formatter=new Intl.NumberFormat('jp-JP',{
    style:'currency',
    currency: 'JPY'
});

console.log( formatter.format(myNumber));
