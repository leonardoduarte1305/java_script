function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(event) {
        event.preventDefault();

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        pessoas.push({ nome, sobrenome, peso, altura });

        resultado.innerHTML += `<p>${nome}, ${sobrenome}, ${peso}, ${altura}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();