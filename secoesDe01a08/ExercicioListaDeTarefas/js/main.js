function app() {
    const inputTarefa = document.querySelector('.input-tarefa');
    const botaoTarefa = document.querySelector('.botao-tarefa');
    const tarefas = document.querySelector('.tarefas');

    inputTarefa.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            if (!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    })

    botaoTarefa.addEventListener('click', (event) => {
        if (!inputTarefa.value) {
            return;
        };

        criaTarefa(inputTarefa.value);
    })

    document.addEventListener('click', (event) => {
        const elemento = event.target;
        if (elemento.classList.contains('botao-apagar')) {
            elemento.parentElement.remove();
            salvaTarefa();
        }
    })

    function criaTarefa(inputText) {
        const li = criaLi(inputText);
        li.innerText = inputText;
        tarefas.appendChild(li);
        criaBotaoApagar(li);
        limpaInput();
        salvaTarefa();
    }

    function criaLi(text) {
        return document.createElement('li');
    }

    function criaBotaoApagar(li) {
        li.innerText += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar';
        // botaoApagar.classList.add('botao-apagar');
        botaoApagar.setAttribute('class', 'botao-apagar');
        botaoApagar.setAttribute('title', 'Apagar esta tarefa.');
        li.appendChild(botaoApagar);
    }

    const limpaInput = () => {
        inputTarefa.value = '';
        inputTarefa.focus();
    }

    function salvaTarefa() {
        const liTarefas = tarefas.querySelectorAll('li');
        const listaDeTarefas = [];

        for (const tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaDeTarefas.push(tarefaTexto);
        }

        const tarefasJSON = JSON.stringify(listaDeTarefas);
        // Só salva strings no localStrorage... por isso o JSON.stringify acima
        localStorage.setItem('tarefasSalvas', tarefasJSON);



        console.log(tarefasJSON);
    }

    function recuperaTarefasSalvas() {
        const tarefasRecuperadas = localStorage.getItem('tarefasSalvas');
        const listaDeTarefas = JSON.parse(tarefasRecuperadas);

        for (let tarefa of listaDeTarefas) {
            criaTarefa(tarefa);
        }
    }
    recuperaTarefasSalvas();
}

app();
