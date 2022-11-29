//Factory function
function Pessoa(nome, sobrenome, peso, altura) {
    const ID = 123;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.peso = peso;
    this.altura = altura;
    this.peso = peso;

    this.fala = (assunto) => {
        return `${nome} que tem ${this.peso}Kg está falando sobre ${assunto}...`
    };

    this.imc = () => {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
    };

    this.nomeCompleto = () => {
        return `${this.nome} ${this.sobrenome}`
    };
}

const p1 = new Pessoa('Leonor', 'Leopoldina', 65, 1.70);
console.log(p1.fala('emagrecimento'));
// console.log(`IMC da pessoa: ${p1.nome}: ${p1.imc()}`);
console.log(`IMC da pessoa: ${p1.nomeCompleto()}: ${p1.imc()}`);
// console.log(`IMC da pessoa: ${p1.nome}: ${p1.imc}`);