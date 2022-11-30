const nome = 'Leopoldo';
const sobrenome = 'Leopardo';
const idade = 33;
const cor = 'azul';

const falaNome = () => {
    console.log(nome + ' ' + sobrenome);
}

module.exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falanome = falaNome;
this.idade = idade;
exports.COR = cor;

// console.log(module)