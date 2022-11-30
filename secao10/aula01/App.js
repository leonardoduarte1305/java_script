const modulo01 = require('./modulo01');

modulo01.falanome();
console.log(modulo01);


const falaNome = require('./modulo01').falanome;
falaNome();

const { nome, sobrenome, idade } = require('./modulo01');
console.log(nome);
console.log(sobrenome);
console.log(idade);

const path = require('path');

const { Pessoa } = require('./Pessoa');
const pessoa = new Pessoa('Leopardo', 'da Floresta');
console.log(pessoa);


