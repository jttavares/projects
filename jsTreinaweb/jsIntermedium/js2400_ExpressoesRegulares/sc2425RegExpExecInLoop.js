let myString='1234abc43 a42defcd',
regexp=/a.c/g,
match;

while (match=regexp.exec(myString)) {
    console.log(`${match[0]} - ${match.index}`)
}
