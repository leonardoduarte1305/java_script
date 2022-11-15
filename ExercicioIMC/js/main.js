const form = document.querySelector('.form');
const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(`Peso: ${peso}, Altura: ${altura}`)

    if (!peso) {
        setResultado('Peso inválido.', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida.', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc, nivel);

    setResultado(`Seu IMC é ${imc} (${nivelImc})`, true);
});

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('resultado-ok');
    } else {
        p.classList.add('resultado-erro')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

function criaParagrafo() {
    return document.createElement('p');
}

function getImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function getNivelImc(imc, nivel) {
    if (imc <= 18.5) return nivel[0];
    if (imc <= 24.9) return nivel[1];
    if (imc <= 29.9) return nivel[2];
    if (imc <= 34.9) return nivel[3];
    if (imc <= 39.9) return nivel[4];
    if (imc >= 40) return nivel[5];
}
