// ES6

// function getAge(x){
//     console.log(`la edad que escribiste es ${x}`);
// }

getAge(5);

// puede cambiar
let name = 'Christian';

// constante
const pi = 3.1416;

// Arrow functions
const getAge = (x) => {
    return `la edad que escribiste es ${x}`;
}

console.log(getAge(5));

const operation = (type, x, y) => type(x,y);

const plus = (x, y) => x + y;

console.log(operation(plus, 5, 5));

const mayorEdad = (edad, mayor, menor) => {
    return edad >= 18 ? mayor() : menor();
}

const menorDeEdad = () => 'Eres menor de edad';
const mayorDeEdad = () => 'Eres mayor de edad';

console.log(mayorEdad(28, mayorDeEdad(), menorDeEdad()));

// Promesas
// Pendiente
// Se cumple
// No se cumple y la razon

const birthday = (money, love) => {
    return new Promise((ok, notok) => money && love ? ok('Ok') : notok('NotOk'));
}

birthday(true, true)
    .catch((value) => console.log(value))
    .then((value) => console.log(value));

