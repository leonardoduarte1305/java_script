// Desestruturação
console.log('============ Exemplo:');
let a = 'A';
let b = 'B';
let c = 'C';

const letras = [c, b, a];
[a, b, c] = letras;

console.log(a, b, c);

// ==============================
console.log('============ Outro exemplo:');

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, , sete, oito, nove] = numeros;

console.log(um, tres, cinco, sete, oito, nove);

// ==============================

console.log('============ Outro exemplo:');
const outrosNumeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

const [grupo1, grupo2, grupo3] = outrosNumeros;

const [num1, num2, num3] = grupo1;
const [num4, num5, num6] = grupo2;
const [num7, num8, num9] = grupo3;

console.log(num1, num2, num3);
console.log(num4, num5, num6);
console.log(num7, num8, num9);

const [, [, numero5]] = outrosNumeros;
const [, [, , numero6]] = outrosNumeros;
console.log(numero5);
console.log(numero6);

// ==============================

console.log('============ Outro exemplo:');
const pessoa = {
    nome: 'Leopoldo',
    sobrenome: 'Jardim',
    idade: 33,
    endereco: {
        rua: 'Av Brasil',
        numero: 123
    },
    corDoCabelo: 'verde'
}

const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade)