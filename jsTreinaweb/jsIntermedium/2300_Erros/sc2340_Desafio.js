var myObj={
    _a:0,
    get a(){
        return this._a;
    },
    set a(value){
        if(value %2 !==0){
           throw new Error();
        }else{
            this._a=value;
        }
    }
}

