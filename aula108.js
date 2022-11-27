function simulaUmaChamadaComTempoAleatorio(mensagem, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (typeof mensagem !== 'string') {
                reject(`Valor que foi passado é ${mensagem} do formato "${typeof mensagem}" e não é aceito. `);
                return;
            }

            resolve(mensagem.toUpperCase() + ' - passei na promise.');
        }, tempo);
    });
}

function tempoAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


// ====================================================================
simulaUmaChamadaComTempoAleatorio('Frase... 1', tempoAleatorio(1, 3))
    .then(resposta => {
        console.log(resposta); // este print é da chamada anterior
        return simulaUmaChamadaComTempoAleatorio('Frase... 2', tempoAleatorio(1, 2));
    })
    .then(resposta => {
        console.log(resposta); // este print é da chamada anterior
        return simulaUmaChamadaComTempoAleatorio('Frase... 3', tempoAleatorio(1, 2));
    })
    .then(resposta => {
        console.log(resposta); // este print é da chamada anterior
        return simulaUmaChamadaComTempoAleatorio(Number(123), tempoAleatorio(1, 2));
    })
    .then(resposta => {
        console.log(resposta); // este print é da chamada anterior
    })
    .catch(erro => {
        console.log('Catch da corrente com 4 funções:', erro);
    });

// ====================================================================
// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    simulaUmaChamadaComTempoAleatorio('Promise 1 ...', tempoAleatorio(1, 10)),
    simulaUmaChamadaComTempoAleatorio('Promise 2 ...', tempoAleatorio(1, 10)),
    simulaUmaChamadaComTempoAleatorio(1000, tempoAleatorio(1, 10)),
    simulaUmaChamadaComTempoAleatorio('Promise 3 ...', tempoAleatorio(1, 10)),
    simulaUmaChamadaComTempoAleatorio(123456, tempoAleatorio(1, 10)),
];

// Promise.all => Resolve todas as promises
Promise.all(promises)
    .then(valor => {
        console.log(valor)
    })
    .catch(erro => {
        console.log(`Catch do Promise.all(): ${erro}`);
    });


// Promise.race => Tenta resolver todas as promises mas entrega a primeira que for resolvida

Promise.race(promises)
    .then(resposta => {
        console.log(resposta);
    })
    .catch(erro => {
        console.log(`Catch do Promise.race() ${erro}`);
    })

// ====================================================================
// Promise.resolve - Exemplo de caso de Cache... se já temos determinado dado em cache podemos devolvê-lo

const paginasParaEntregar = [
    simulaUmaChamadaComTempoAleatorio('Carregando dados...', tempoAleatorio(1, 2)),
    simulaUmaChamadaComTempoAleatorio('Montando a página...', tempoAleatorio(1, 10)),
    simulaUmaChamadaComTempoAleatorio('A página foi entregue, pegue ela aqui.', tempoAleatorio(4, 7)),
];

function baixaUmaPagina(flag) {
    const estaCacheada = flag;

    if (estaCacheada) {
        return Promise.resolve('A página já está no cache, pegue ela aqui.');
    } else {
        return Promise.all(paginasParaEntregar)
            .then(dadosRecebidos => {
                console.log(dadosRecebidos);
            })
            .catch(erro => {
                console.log('Ops, não consegui carregar a página.');
            });
    }
}

baixaUmaPagina(false)
    .then(dadosDaPagina => console.log(dadosDaPagina))
    .catch(erro => console.log(erro));
















