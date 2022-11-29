class ValidaFormulario {

    constructor() {
        this.formulario = document.querySelector('form');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.limparErrosDeTodosOsCampos();
        const senhasValidas = this.validaERenderizaErrosDeSenha();
        const camposValidos = this.validaERenderizaErrosDosCampos();

        if (senhasValidas && camposValidos) {
            console.log('Formulário enviado com sucesso.');
        }
    }

    limparErrosDeTodosOsCampos() {
        const camposDeErro = this.formulario.querySelectorAll('.error-text');

        for (let errorText of camposDeErro) {
            errorText.remove();
        }
    }

    validaERenderizaErrosDeSenha() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const labelSenha = senha.previousElementSibling.innerText;

        const repetirSenha = this.formulario.querySelector('.repetir-senha');
        const labelRepetirSenha = repetirSenha.previousElementSibling.innerText;

        valid = this.campoSenhaTemMaisDe6EMenosDe12Caracteres(senha, labelSenha);

        valid = this.campoRepetirSenhaTemMaisDe6EMenosDe12Caracteres(repetirSenha, labelRepetirSenha);

        valid = this.ambosOsCamposSaoIguais(senha, labelSenha, repetirSenha, labelRepetirSenha);

        return valid;
    }

    campoSenhaTemMaisDe6EMenosDe12Caracteres(senha, labelSenha) {
        if (!this.oNumeroDeCaracteresEstaEntre(6, 12, senha.value)) {
            this.criaErroEMensagem(senha, `A ${labelSenha} tem ${senha.value.length} caracteres o que é inválido.`);
            return false;
        }
        return true;
    }

    campoRepetirSenhaTemMaisDe6EMenosDe12Caracteres(repetirSenha, labelRepetirSenha) {
        if (!this.oNumeroDeCaracteresEstaEntre(6, 12, repetirSenha.value)) {
            this.criaErroEMensagem(repetirSenha, `A ${labelRepetirSenha} tem ${repetirSenha.value.length} caracteres o que é inválido.`);
            return false;
        }

        return true;
    }

    ambosOsCamposSaoIguais(senha, labelSenha, repetirSenha, labelRepetirSenha) {
        if (senha.value !== repetirSenha.value) {
            this.criaErroEMensagem(senha, `O campo ${labelSenha} não pode ser diferente do campo ${labelRepetirSenha}.`)
            this.criaErroEMensagem(repetirSenha, `O campo ${labelRepetirSenha} não pode ser diferente do campo ${labelSenha}.`)
            return false;
        }
        return true;
    }

    validaERenderizaErrosDosCampos() {
        let valid = true;
        const camposDoFormulario = this.formulario.querySelectorAll('.validar');

        for (let campo of camposDoFormulario) {
            const label = campo.previousElementSibling.innerText;

            valid = this.oCampoEstaEmBranco(campo, label);


            if (campo.classList.contains('cpf')) {
                if (!this.validaCpf(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }

        }

        return valid;
    }

    oCampoEstaEmBranco(campo, label) {
        if (!campo.value) {
            this.criaErroEMensagem(campo, `O campo ${label} não pode estar em branco.`);
            return false;
        }
        return true;
    }

    validaCpf(campo) {
        const validador = new ValidaCPF(campo.value);

        if (!validador.valida()) {
            this.criaErroEMensagem(campo, 'O CPF é inválido.');
            return false;
        }
        return true;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        valid = this.campoUsuarioTemMaisDe3EMenosDe13Caracteres(campo);

        valid = this.campoUsuarioContemApenasCaracteresAlfanumericos(campo);

        return valid;
    }

    campoUsuarioTemMaisDe3EMenosDe13Caracteres(campo) {
        if (!this.oNumeroDeCaracteresEstaEntre(3, 13, campo.value)) {
            this.criaErroEMensagem(campo, `O Usuário tem ${campo.value.length} caracteres o que é inválido.`);
            return false;
        };
        return true;
    }

    campoUsuarioContemApenasCaracteresAlfanumericos(campo) {
        if (!this.validaAlfanumericoComASCII(campo.value)) {
            this.criaErroEMensagem(campo, `O Usuário tem caracteres além dos alfanuméricos permitidos.`);
            return false;
        }
        return true;
    }

    criaErroEMensagem(campo, mensagem) {
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

    oNumeroDeCaracteresEstaEntre(minimo, maximo, valorDoCampo) {
        if (valorDoCampo.length < minimo || maximo < valorDoCampo.length) return false;
        return true;
    }

    validaAlfanumericoComRegex(valorDoCampo) {
        if (!valorDoCampo.match(/^[a-zA-Z0-9]*$/g)) return false;
        return true;
    };

    validaAlfanumericoComASCII(valorDoCampo) {
        var code, posicao, tamanho;

        for (posicao = 0, tamanho = valorDoCampo.length; posicao < tamanho; posicao++) {
            code = valorDoCampo.charCodeAt(posicao);
            if (!(47 < code && code < 58) && // numeric (0-9)
                !(64 < code && code < 91) && // upper alpha (A-Z)
                !(96 < code && code < 123)) { // lower alpha (a-z)
                return false;
            }
        }
        return true;
    };
}

const valida = new ValidaFormulario();