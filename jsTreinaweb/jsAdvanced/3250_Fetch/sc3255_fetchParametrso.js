const texto=document.querySelector('.texto');
texto.innerHTML=`
Fetch aceita segundo parametro onde podemos configurar o tipo de requisição <br>
<br>

fetch('https://myexample.com', { <br>
    method: 'POST', <br>
    headers: {'Content-Type':'application/x-www-form-urlencoded'}, <br>
    body: 'foo=bar&blah=1' <br>
}) <br>
.then(response => response.json()) <br>
<br><br>
Onde: <br>

method - GET | POST | PUT | DELETE | HEAD <br>
url - URL da requisição <br>
headers - cabeçalho <br>
body - corpo da requisição <br>
referrer - referência da requisição <br>
mode - cors | no-cors | same-origin <br>
credentials - indica se os cookies devem ser enviados junto com a requisição <br>
redirect - follow | error | manual <br>
integrity - valor de integridade da fonte <br>
cache - modo do cache (default | reload | no-cache) <br>
`