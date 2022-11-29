const request = configObject => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(configObject.method, configObject.url, true);
        xhr.send();

        xhr.addEventListener('load', evento => {
            if (200 <= xhr.status && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText)
            }
        });
    });
}

document.addEventListener('click', event => {
    const elemento = event.target;
    const tag = elemento.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault();
        carregaPagina(elemento);
    }
});

async function carregaPagina(elemento) {
    const href = elemento.getAttribute('href');
    const configObject = {
        method: 'GET',
        url: href,
    };

    try {
        const response = await request(configObject);
        renderizaResultado(response);
    } catch (e) {
        console.log(`Algo de errado não está certo: ${e}.`)
    }
}

function renderizaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}