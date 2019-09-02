function readForm(){
    const form=document.myForm,
 text=form.textContent.value,
select=form.select.value,
checkBox=form.myCheck.checked;

return {text, select, checkBox};
}

function writeForm(obj) {
    var form = document.myForm;

    form.textContent.value=obj.text;
        form.select.value=obj.select;
        form.myCheck.checked=obj.checkBox;
}


function writeFile(content){
    const element=document.createElement('a');

    element.setAttribute('href','data:plain/text;charset=utf-8,'+encodeURIComponent(content));
    element.setAttribute('download','formContent.txt');
    element.click();
}

function readFile(callback){
    const element=document.createElement('input');

    element.setAttribute('type','file');
    element.onchange=function(){
        let reader=new FileReader();

        reader.onload=function(){
            let content=reader.result;
            callback(content);
        }
        reader.readAsText(element.files[0]);
    }
    element.click();
}

function save(){
    let formContent=JSON.stringify(readForm());
    writeFile(formContent);
}

function load(){
    readFile(function(content){
        writeForm(JSON.parse(content));
    });
}