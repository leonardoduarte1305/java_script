function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Lambari', 'Dourado');
console.log(p1);

const chaveVindaDoDB = 'nome';
console.log(p1['nome']);
console.log(p1[chaveVindaDoDB]);



console.log('========================================')
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave quando percorrer ou imprimir o objeto
        value: estoque, // valor da chave estoque
        writable: true, // pode ou não alterar o valor
        configurable: false // pode ou não pode reconfigurar a chave
    });

    // Object.defineProperties(this, {
    //     outroAtributo: {
    //         enumerable: true,
    //         value: outroAtributoQlqr,
    //         writable: true,
    //         configurable: false
    //     },
    //     outroAtributoDiferente: {
    //         enumerable: true,
    //         value: outraCoisaQlqr,
    //         writable: true,
    //         configurable: false
    //     }
    // });
    // Object.freeze(this);
}

const prod1 = new Produto('Queijo', 20, 50);
console.log(prod1);
console.log('Object.keys: ' + Object.keys(prod1));