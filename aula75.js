//Factory function
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        peso: 80,
        fala: function (assunto) {
            return `${nome} que tem ${this.peso}Kg está falando sobre ${assunto}...`
        },
        altura,
        peso,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Leonor', 'Leopoldina', 65, 1.70);
console.log(p1.fala('emagrecimento'));
// console.log(`IMC da pessoa: ${p1.nome}: ${p1.imc()}`);
console.log(`IMC da pessoa: ${p1.nomeCompleto}: ${p1.imc}`);
console.log(`IMC da pessoa: ${p1.nome}: ${p1.imc}`);