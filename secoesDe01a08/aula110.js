function simulaUmaChamadaCom(mensagem, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (typeof mensagem !== 'string') {
                reject(`O valor "${mensagem}" que foi passado é do tipo "${typeof mensagem}" e não é aceito por esta função. `);
                return;
            }

            resolve(mensagem);
        }, tempo);
    });
}

function tempoAleatorio(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// EXEMPLO 1 com encadeamento
simulaUmaChamadaCom('Fase 1', tempoAleatorio())
    .then(retorno => {
        console.log(retorno);
        return simulaUmaChamadaCom('Fase 2', tempoAleatorio());
    })
    .then(resposta => {
        console.log(resposta);
        return simulaUmaChamadaCom('Fase 3', tempoAleatorio());
    })
    .then(resposta => {
        console.log(resposta);
        return simulaUmaChamadaCom('Fase 4', tempoAleatorio());
    })
    .then(resposta => {
        console.log(resposta);
        return resposta;
    })
    .then(fase => {
        console.log(`Terminamos todas as chamadas na: ${fase}`);
    })
    .catch(erro => console.log(erro));


// EXEMPLO 2 com async
async function executa() {
    try {
        const fase1 = await simulaUmaChamadaCom('Nova fase 1', tempoAleatorio());
        console.log(fase1);

        const fase2 = await simulaUmaChamadaCom('Nova fase 2', tempoAleatorio());
        console.log(fase2);

        const fase3 = await simulaUmaChamadaCom(123, tempoAleatorio());
        console.log(fase3);

        const fase4 = await simulaUmaChamadaCom('Nova fase 4', tempoAleatorio());
        console.log(fase4);

        console.log(`Terminamos todas as chamadas na: ${fase4}`);
    } catch (error) {
        console.log(error);
    }
}

executa();

