// literal objects exercises
// base on penguins info in https://en.wikipedia.org/wiki/List_of_fictional_penguins

// #1 myPenguin literal object
var myPenguin = {

    character:  'Tacky the Penguin',
    origin:     'Tacky the Penguin',
    author:     'Helen Lester',
    notes:      'A penguin who does things differently than other penguins.',

    // #5 console print penguin name
    sayHello:    function() {
        console.log(`Hola, soy un pingüino y mi nombre es ${this.character}`);
    },

    // #7 add fly method
    fly:        function(){
        console.log(this.canFly == true ? '¡Puedo volar!' : 'No puedo volar :(');
    }
}

// #2 print penguin name
console.log(`Hola, soy un pingüino y mi nombre es ${myPenguin.character}`);

// #3 add new prop 'canFly' set default false
myPenguin.canFly = false;

// #4 add method squawk and console print some random f***** noises
myPenguin.squawk = () => {
    console.log('kaww kaww!!');
}
myPenguin.squawk();

// #6 change the penguin name to 'señor pingu' and print the result calling the method sayHello
myPenguin.character = 'Señor Pingu';
myPenguin.sayHello();

// #8 set canFly to true and print the result calling the method fly
myPenguin.canFly = true;
myPenguin.fly();

// #9 create new object for Mole recipe
var Mole = {
    portions:       2,
    ingredients:    ['canela','comino','cocoa']
}

// #10 create new array object for books and print them
// disclaimer: books from https://campus.devf.la/exercises/js/cintaroja/books
var books = [
    {
        title: 'Cien Años de Soledad',
        author: 'Gabriel García Márquez',
        read: true
    },
    {
        title: 'Do Androids Dream of Electric Sheep',
        author: 'Phillip K. Dick',
        read: false
    }
];

for (var i = 0; i < books.length; i++) {
    console.log(`Titulo: ${books[i].title}, Autor: ${books[i].author}, Leido: ${books[i].read == true ? 'si' : 'no'}`);    
}

// Objects
// #11 class person with some conditions

class Person {

    constructor(name, age, sex, weight, height, rfc){
        this.name   = name,
        this.age    = age,
        this.sex    = sex,
        this.weight = weight,
        this.height = height,
        this.rfc    = ''
    }    

    getIMC(){
        return this.weight / Math.pow(this.height, 2);
    }

    isAdult(){
        return this.age >= 18 ? true : false;
    }
}

// test person class ---------------------------

var person = new Person('Christian', 27, 'Male', 75, 1.70);
console.log(person);
console.log(person.getIMC());
console.log(person.isAdult());
// ----------------------------------------------

// #12 class account with some attr and methods
class Account {
    constructor(owner, amount, status){

        if (amount > 900 || amount < 10) {
            console.log('No se puede asignar esa cantidad, debe ser mayor a $10 y menor a $900');
            return;
        }

        this.owner  = owner,
        this.amount = amount,
        this.status = status

        console.log(`Cuenta creada, cliente ${this.owner}, cantidad de apertura: $${this.amount}`);
    }

    addAmount(value){
        if (value + this.amount > 900) {
            console.log('No se puede agregar esa cantidad, debe tener un maximo total de $900');
            return;
        }

        this.amount += value;
        console.log(`$${value} fueron agregados exitosamente a la cuenta`);
    }

    withdrawAmount(value){
        if (this.amount - value < 10) {
            console.log('No se puede retirar esa cantidad, debe tener un minimo total de $10');
            return;
        }

        this.amount -= value;
        console.log(`$${value} fueron retirados exitosamente a la cuenta`);
    }

}

// test Account class -----------------------------

// invalid account
var account = new Account('Christian', 5, true);

// valid account
var account = new Account('Christian', 50, true);

// valid add
account.addAmount(100);
// invalid add
account.addAmount(900);

// valid withdraw
account.withdrawAmount(5);
// invalid withdraw
account.withdrawAmount(300);

// ------------------------------------------------
