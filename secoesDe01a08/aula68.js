//Declaracao de funcao (function hoisting)
//Pode ser chamada antes ou depois da declaracao
falaOi();
function falaOi() {
    console.log('Oi...')
}
falaOi();

//===========================
// First class objects
// Function expression
const funcaoComoDado = function () {
    console.log('Sou uma função executando.');
}

function executaUmaFuncao(funcao) {
    console.log('Vou executar o parâmetro como uma função, veja:');
    funcao();
}

executaUmaFuncao(funcaoComoDado);
//===========================
// Arrow function
const arrowFunction = () => {
    console.log('Sou uma arrow function...')
}
arrowFunction();

//===========================
//Dentro de um objeto
const objeto = {
    falar: function () {
        console.log('Estou falando de dentro de um objeto...');
    },
    rir() {
        console.log('Estou rindo de dentro de um objeto...');
    }
};
objeto.falar();
objeto.rir();


//===========================
function funcaoExemplo({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

funcaoExemplo({ nome: 'Leopoldo', sobrenome: 'Jardim', idade: 25 })

//===========================
//Rest operator
function fazConta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(`Resultado: ${acumulador}`)
}

fazConta('+', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

//===========================
console.log('//===========================');
function falaFrase(comecoDaFrase) {
    function falaRestanteDaFrase(restanteDaFrase) {
        return comecoDaFrase + ' ' + restanteDaFrase;
    }
    return falaRestanteDaFrase;
}

const olaMundo = falaFrase('Olá');

console.log('A "const olaMundo" é uma function.');
console.log(olaMundo);

console.log('Executando a "const olaMundo" passando como parâmetro o fim da frase, temos:');
console.log(olaMundo('mundo!!'));

const falaEstaFrase = falaFrase('Outro exemplo');
const resto = falaEstaFrase('para entender melhor.');
console.log(resto);

console.log('//===========================');
//===========================
console.log('Outro exemplo de função retornando função:')
function criaMultiplicador(valorA) {
    function multiplicaPor(valorB) {
        return valorA * valorB;
    }
    return multiplicaPor;
}

const multiplicarXporEste = criaMultiplicador(5);
const resultado = multiplicarXporEste(10);
console.log(`Resultado: ${resultado}`);
console.log('//===========================');
//===========================

console.log('Outro exemplo de da mesma coisa:')
function multiplica(valorA) {
    return (valorB) => {
        return valorA * valorB;
    }
}
const duplicaNumero = multiplica(2);
const duplicado = duplicaNumero(7);
console.log(`Duplicado: ${duplicado}`);


const triplicaNumero = multiplica(3);
const triplicado = duplicaNumero(7);
console.log(`Triplicado: ${triplicado}`);


const quadruplicaNumero = multiplica(4);
const quadruplicado = duplicaNumero(7);
console.log(`Quadruplicado: ${quadruplicado}`);

console.log('//===========================');

