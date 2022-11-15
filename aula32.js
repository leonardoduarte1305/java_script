const pessoa1 = {
    nome: 'Leopoldo',
    sobrenome: 'Jardim',
    idade: 25,

    fala() {
        console.log(`Meu nome é: ${this.nome} ${this.sobrenome} e tenho ${this.idade}`)
    }
};

pessoa1.fala()

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

const pessoa2 = criaPessoa('Leopoldo', 'Leopoldino', 12)

console.log(pessoa2);