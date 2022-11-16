// Escreva dois numeros e retorne o maior deles
const imprimeOMaiorNumero = (...numeros) => console.log(Math.max(...numeros));
imprimeOMaiorNumero(25, 22, 35, 50);


/*
    Escreva uma funcao chamada ePaisagem que
    recebe alrgura e altura e retorne true
    se a imagem estiver no modo paisagem
*/
const ePaisagem = (largura, altura) => console.log(largura >= altura);
ePaisagem(50, 20);

/*
    Escreva uma funcao que recebe um numero e
    retorne o seguinte:
    Se for divisivel por 3 = Fizz
    Se for divisivel por 5 = Buzz
    Se for divisivel por 3 e 5 = FizzBuzz

    Não for divisivel por 3 ou 5 = O proprio numero
    Checar se o número é mesmo um numero = O proprio numero

    Use numeros de 0 a 100
*/
checaNumero = (numero) => {

    const divisivelPor3 = (numero % 3) === 0;
    const divisivelPor5 = (numero % 5) === 0;

    if (divisivelPor3 && divisivelPor5) {
        console.log(`${numero} - FizzBuzz`);
        return;
    }

    if (divisivelPor3) {
        console.log(`${numero} - Fizz`);
        return;
    }

    if (divisivelPor5) {
        console.log(`${numero} - Buzz`);
        return;
    }

    typeof numero !== 'number' ? console.log(false) : console.log(`${numero}`);
}
for (let index = 0; index <= 100; index++) {
    checaNumero(index);
}