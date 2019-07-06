class Animal{
 sleep()
{
    console.log('zzzzz');
}
}

class Dog extends Animal{
    bark(){
        console.log('woof.');
    }
    sleep(){
        console.log('The dog will sleep')

        //a keyword super chama o metodo definido na classe pai
        super.sleep();
    }
}

let myDog=new Dog;