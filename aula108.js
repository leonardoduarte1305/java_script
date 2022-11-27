function esperaAi(mensagem, tempo) {
    return new Promise((resolve, reject) => {

        if (typeof mensagem !== 'string') {
            reject('Bad value.');
        }

        setTimeout(() => {
            // console.log(mensagem);
            resolve(mensagem);
        }, tempo);
    });
}

function tempoAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

esperaAi('Frase... 1', tempoAleatorio(1, 3))
    .then(resposta => {
        console.log(resposta); // este print é da chamada anterior
        return esperaAi('Frase... 2', tempoAleatorio(1, 2));
    })
    .then(resposta => {
        console.log(resposta); // este print é da chamada anterior
        return esperaAi('Frase... 3', tempoAleatorio(1, 2));
    })
    .then(resposta => {
        console.log(resposta); // este print é da chamada anterior
        return esperaAi(Number(123), tempoAleatorio(1, 2));
    })
    .then(resposta => {
        console.log(resposta); // este print é da chamada anterior
    })
    .catch(erro => {
        console.log('errou:', erro);
    });