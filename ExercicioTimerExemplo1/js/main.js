function meuTimer() {
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    iniciar.addEventListener('click', (event) => {
        event.preventDefault();
        iniciarRelogio()
    });

    pausar.addEventListener('click', (event) => {
        event.preventDefault();
        pausarRelogio();
    });

    zerar.addEventListener('click', (event) => {
        event.preventDefault();
        zerarRelogio();
    });

    function iniciarRelogio() {
        relogio.classList.remove('pausado');

        clearInterval(timer);

        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = mostraHoraAPartirDosSegundos(segundos);
        }, 1000);
    }

    function pausarRelogio() {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

    function zerarRelogio() {
        relogio.classList.remove('pausado');

        clearInterval(timer);

        relogio.innerHTML = mostraHoraAPartirDosSegundos(0);

        timer = 0;
        segundos = 0;
    }

    function mostraHoraAPartirDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
}
meuTimer();