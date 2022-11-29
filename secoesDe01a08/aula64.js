function mostraHoraAtual() {
    const data = new Date();

    data.toLocaleTimeString('pt-BR', {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });
    console.log(data);
}

//Executa uma ação em X tempo
const timer = setInterval(() => mostraHoraAtual(), 1000);

setTimeout(() => clearInterval(timer), 20000);

setTimeout(() => console.log('Exibe esta mensagem depois de 5 segundos'), 5000);