import {MyClass,myVar, myFunc} from './sc3301b_calc.js';

//Para importar tudo vc precisa dar um nome, exemplo:
import * as MyModule from './sc3301b_calc.js';

myFunc();
console.log(MyClass.sum(4,8), myVar);
console.log(`myVar: ${MyModule.myVar}`)

const texto=document.querySelector('.texto');

texto.innerHTML=`
Para manter a organização do código, muitos padrões foram criados para se trabalhar com módulos.<br>
 Não vamos abordar esses padrões de projeto aqui.<br>

Até então, o JavaScript não possuía uma forma nativa para se separar módulos em arquivos e requisitá-los para serem usados em outro código.<br>
 Fazíamos uma simulação disso nos navegadores, o Node.<br>
js seguiu um padrão com carregamento síncrono (CommonJS) e ferramentas como Browserify e WebPack permitem a gente trabalhar com módulos, mas o resultado é um único arquivo que é carregado de uma só vez no navegador.<br>

Agora temos suporte a essa funcionalidade nativamente nos navegadores.<br>

Os módulos são separados por arquivos.<br>
 Dentro do arquivo nós indicamos o que queremos exportar, ou seja, tornar público.<br>
 O que não indicamos para a exportação ficará privado, ou seja, não poderemos acessar de fora do arquivo.<br>

Os principais novos comandos são “import” e “export”.<br>

`;

texto.innerHTML+=`
Para funcionar os Modulos na tag script precisa colocar type="module". <br>
<script src="sc3301_modulos.js" type="module"></script>
`;
texto.innerHTML+="Só funciona via servidor <br>";
texto.innerHTML+=`criar um novo script <br>`;
texto.innerHTML+=`
Voce pode exportar cada item ao faze-lo <br>
export let myVar=5; <br>
let myVar2=10;<br><br>

export function myFunc(){ <br>
    console.log('TreinaWeb');<br>
}<br><br>

export class Calc{<br>
    static sum(a,b){<br>
        return a+b;<br>
    }<br>
}<br>
//ou vc pode exportar tudo de uma vez
let myVar=5; <br>
let myVar2=10;<br><br>

 function myFunc(){ <br>
    console.log('TreinaWeb');<br>
}<br><br>

 class Calc{<br>
    static sum(a,b){<br>
        return a+b;<br>
    }<br>
}<br>
export{myVar, myFunc,Calc}<br>
`;
texto.innerHTML+=`
Vc ainda pode renomear o que deseja exportar <br>
export {Calc as MyClass}
`
;