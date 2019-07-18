let db;

function getObjectStore(){
    return db.transaction(['Courses'],'readwrite').objectStore('Courses');
}

const DB={
    start(){
        return new Promise(resolve=>{
            //abrir banco
            //funcao .open
                //nome do banco'treinaweb'
                // versão do banco: 1, após uma alteração, modifique o numero do banco para 2 e assim por diante
            let request=indexedDB.open('Treinaweb',1);
            request.onsuccess=(event)=>{
                db = request.result;
                resolve(this);
            }
            //qunado atualiza banco precisa indicar para fazer a atualização
            request.onupgradeneeded=(event)=>{
                db=event.target.result;
                //criar store que indica onde nosso objeto será armazenado
                db.createObjectStore('Courses',{keyPath: 'id'})
            }
        })
    },
    find(id){
        return new Promise(resolve=>{
            let request=getObjectStore().get(id);
            request.onsuccess=()=>{
                resolve(request.result);
            }
        });
    },
    findAll(){
        return new Promise(resolve=>{
            let request=getObjectStore().getAll();
            request.onsuccess=()=>{
                resolve(request.result);
            }
        });
    },
    insert(item){
        return new Promise(resolve=>{
            item.id=(new Date()).getTime();

            let request=getObjectStore().add(item);
            request.onsuccess=()=>{
                resolve(item);
            }
        });
    },
    update(item){
        return new Promise(resolve=>{
            let request=getObjectStore().put(item);
            request.onsuccess=()=>{
                resolve(item);
            }
        });
    },
    remove(id){
        return new Promise(resolve=>{
            let request=getObjectStore().delete(id);
            request.onsuccess=()=>{
                resolve(id);
            }
        });
    }
}

DB.start();