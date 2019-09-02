let myDate=new Date('2020-12-31T12:00:00');

let formatter=new Intl.DateTimeFormat('en-GB',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
});

console.log(formatter.format(myDate));