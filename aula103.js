const _velocidade = Symbol('velocidade');

class Veiculo {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`Seu ${this.nome} já está ligado.`);
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`Seu ${this.nome} já está desligado.`);
            return;
        }

        this.ligado = false;
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    desacelerar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }

    static imprimirDadosPadraoDeUmVeiculo() {
        console.log('Os atributos de um carro são: \nNome \nVelocidade \nEstado [ligado/desligado]');
    }

    get getVelocidade() {
        return this[_velocidade];
    }

    set setVelocidade(novaVelocidade) {
        if (typeof novaVelocidade !== 'number') return;

        if (typeof this === Ferrari) {
            this[_velocidade] = novaVelocidade;
            return;
        }

        if (novaVelocidade >= 100 || novaVelocidade <= 0) return;

        this[_velocidade] = novaVelocidade;
    }
}

class Fusca extends Veiculo {

    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }

    rangeTudo() {
        console.log('O carro todo está rangendo... rrinhec.. rrinhec...')
    }

    ligar() {
        console.log('Naturalmente este método ligar se sobrepõe ao método ligar da classe pai.')
    }
}

class Ferrari extends Veiculo {

    constructor(nome, cor, velocidadeMaxima) {
        super(nome);
        this.cor = cor;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    acelerarParaVelocidadeMaxima() {
        if (this[_velocidade] < this.velocidadeMaxima) this[_velocidade] = this.velocidadeMaxima;
        console.log(this[_velocidade]);
    }

    ligar() {
        console.log('Naturalmente o método ligar da classe filha se sobrepõe ao método ligar da classe pai.')
    }
}

const fusca = new Fusca('Fusquinha', 'preto');
const ferrari = new Ferrari('Ferrari', 'vermelha', 250);

console.log(fusca);
console.log('=========================');
console.log(ferrari);
console.log('=========================');

ferrari.ligar();
ferrari.acelerarParaVelocidadeMaxima();
console.log(ferrari);

Veiculo.imprimirDadosPadraoDeUmVeiculo();