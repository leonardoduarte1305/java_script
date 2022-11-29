function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', function (event) {
            const elemento = event.target;
            if (elemento.classList.contains('btn-num')) {
                this.btnParaDisplay(elemento.innerText);
            };

            if (elemento.classList.contains('btn-clear')) {
                this.clearDisplay();
            };

            if (elemento.classList.contains('btn-del')) {
                this.deletarUltimo();
            }

            if (elemento.classList.contains('btn-eq')) {
                this.realizaConta();
            }

        }.bind(this));
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.deletarUltimo = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);
            if (!conta) {
                alert('Conta inválida.');
                return;
            }

            this.display.value = conta;

        } catch (exception) {
            alert('Conta inválida.');
            return;
        }
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };
}

const calculadora = new Calculadora();
calculadora.inicia();