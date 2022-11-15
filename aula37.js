/*
    Operadores de comparação
    >
    >=

    <
    <=

    ==
    === (igualdade estrita: checa valor e tipo)

    !=
    !== (diferença estrita: checa valor e tipo)
*/

/*
    Operadores lógicos

    &&
    ||
    !

*/

/*
    Curto circuito

    && -> false && true -> false "o valor mesmo"
    ||

    - FALSY
    false
    0
    '' "" ``
    null
    undefined
    Nan
*/

function falaOi() {
    return 'Oi...';
}

const vaiExecutar = false; //true

console.log(vaiExecutar && falaOi());


// ====================
// Exemplos com ||

console.log(0 || '' || null || NaN || 'Devolve este valor' || true);


const corDoUsuario = null; //'azul'
const corPadrao = corDoUsuario || 'corPadrao preta';
console.log(`Cor padrão: ${corPadrao}`);