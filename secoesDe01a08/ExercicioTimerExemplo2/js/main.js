function meuTimer() {
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    document.addEventListener('click', (event) => {
        const elemento = event.target;
        event.preventDefault();

        if (elemento.classList.contains('iniciar')) {
            iniciarRelogio();
        }

        if (elemento.classList.contains('pausar')) {
            pausarRelogio();
        }

        if (elemento.classList.contains('zerar')) {
            zerarRelogio();
        }
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