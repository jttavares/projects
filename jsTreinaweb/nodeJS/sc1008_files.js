var fs=require('fs');

//Parametros:
//1-nome do arquivo
//2-conteudo a ser escrito
//3-retorno de erro se houver
/*fs.writeFile('my_file.txt','Treina Web', function(err){
    if(err){
        console.error(err);
    }
    console.log('Arquivo criado');
});*/
fs.appendFile('my_file.txt','Linhas adicionais para este arquivo', function(err){
    if(err){
        console.error(err);
    }
    console.log('Arquivo editado');
});