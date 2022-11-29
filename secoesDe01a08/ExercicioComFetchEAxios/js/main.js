// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => this.renderizaElementosNaPagina(json));

axios('pessoas.json')
    .then(resposta => this.renderizaElementosNaPagina(resposta.data))

function renderizaElementosNaPagina(json) {
    const tabela = document.createElement('table');

    const cabecalho = this.criaTableRow('cabecalho');
    cabecalho.appendChild(criaTableData('Nome: '));
    cabecalho.appendChild(criaTableData('Empresa: '));
    cabecalho.appendChild(criaTableData('Sexo: '));
    tabela.appendChild(cabecalho);

    for (const pessoa of json) {

        const tr = this.criaTableRow();
        tr.appendChild(criaTableData(pessoa.nome));
        tr.appendChild(criaTableData(pessoa.empresa));
        tr.appendChild(criaTableData(pessoa.sexo));

        tabela.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(tabela);
}

function criaTableRow(className) {
    const linha = document.createElement('tr');
    linha.classList.add(className);
    return linha;
}

function criaTableData(valorParaExibir) {
    let td = document.createElement('td');
    td.innerHTML = valorParaExibir;
    return td;
}
