function saudacao(nome) {
    return `Bom dia ${nome}!!`;
}

const variavel = saudacao('Maria');
console.log(variavel)

//=================================

function soma(numEsquerda = 0, numDireita = 0) { //se não passar valores ele assumes estes
    return numEsquerda + numDireita;
}

console.log("soma: " + soma())
console.log("soma: 1 + : " + soma(1))
console.log("soma: 1 + 2: " + soma(1, 2))
console.log("soma: 2 + 3: " + soma(2, 3))
console.log("soma: 3 + 4: " + soma(3, 4))
console.log("soma: 4 + 5: " + soma(4, 5))

//=================================

// const raiz = (n) => {
//     return n ** 0.5;
// };
const raiz = n => n ** 0.5; //Arrow function

console.log("raiz: 9: " + raiz(9));
console.log("raiz: 16: " + raiz(16));
console.log("raiz: 25: " + raiz(25));
console.log("raiz: 36: " + raiz(36));