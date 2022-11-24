console.log("\n\n Aula 81 ============================");

console.log('delete() ============================');
const exemploDelete = ['delete1', 'delete2'];
delete exemploDelete[0];
console.log(exemploDelete);

console.log('\n\npop() ============================');
const exemploPop = ['pop1', 'excluiUltimoItemDoArray'];
const removidoPeloPop = exemploPop.pop();
console.log(removidoPeloPop);

console.log('\n\n...spread ============================');
const arrayComum = ['espalhar1', 'espalhar2'];
const arrayEspalhado = [...arrayComum];
console.log(arrayEspalhado);

console.log('\n\nshift() ============================');
const exemploShift = ['removeOPrimeiroElementoDoArray', 'shift2'];
const removidoPeloShift = exemploShift.shift();
console.log(removidoPeloShift);

console.log('\n\npush() ============================');
const exemploPush = ['push1', 'push2'];
exemploPush.push('adicionadoNoFinalDoArray');
console.log(exemploPush);

console.log('\n\nunshift() ============================');
const exemploUnshift = ['unshift1', 'unshift2'];
exemploUnshift.unshift('adicionadoNoComeçoDoArray');
console.log(exemploUnshift);

console.log('\n\n slice(x, y) ============================');
const arrayReferencia = ['elem1', 'comecaAquiInclusive', 'elem3', 'terminaAquiPqExcluiuOIndice4', 'elem5'];
const arrayCriadoUsandoSlice = arrayReferencia.slice(1, 4);
console.log(arrayCriadoUsandoSlice);

console.log("\n\n split('') ============================");
const stringEUmArray = 'uma frase de exemplo';
const arrayDePalavras = stringEUmArray.split(' ');
console.log(arrayDePalavras);



console.log("\n\n Aula 82 splice(x, y, ...elementos) ============================");

const nomes = ['Leopoldo', 'Leocádio', 'Leôncio', 'Leonel', 'Leonardo'];

const removidos = nomes.splice(1, 2);
console.log(nomes, removidos);

removidos.splice(4, 0, 'Leonor', 'Leomar', 'Leopoldina', 'Leonora');
console.log(nomes, removidos);



console.log("\n\n Aula 83 concat(...elementos) ============================");

const primeiroArray = [3, 2, 1];
const segundoArray = [6, 5, 4];

const arrayConcatenado = primeiroArray.concat(segundoArray);
console.log(arrayConcatenado);

const arrayConcatenado2 = arrayConcatenado.concat([10, 11, 12], 'String tbm vale');
console.log(arrayConcatenado2);

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, 'Leomar', ...a2, ...[7, 8, 9]];
console.log(a3);



console.log("\n\n Aula 84 filter() ============================");
const numerosAleatorios = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];
const numerosMenoresQue45 = numerosAleatorios.filter(e => e < 45);
console.log(numerosMenoresQue45);


//Retonar as pessoas que tem nome com 6 letras ou mais
//Retornar as pessoas que tem menos de 25 anos
//Retornar pessoas cujo nome termina com o
const pessoas = [
    { nome: 'Leopoldo', idade: 15 },
    { nome: 'Leomar', idade: 17 },
    { nome: 'Leoôncio', idade: 19 },
    { nome: 'Leopoldina', idade: 21 },
    { nome: 'Leonardo', idade: 23 },
    { nome: 'Leonel', idade: 25 },
    { nome: 'Leonora', idade: 27 },
    { nome: 'Leonor', idade: 29 },
    { nome: 'Leocádio', idade: 31 },
];

const arrayPronto = pessoas.filter(e => e.idade <= 25 && e.nome.length >= 5 && e.nome.endsWith('a'));
console.log(arrayPronto);



console.log("\n\n Aula 85 map() ============================");
const numerosParaMultiplicar = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];
const numerosMultiplicados = numerosParaMultiplicar.map((e) => e * 2);
console.log(numerosMultiplicados);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const outrasPessoas = [
    { nome: 'Leopoldo', idade: 31 },
    { nome: 'Leomar', idade: 29 },
    { nome: 'Leoôncio', idade: 27 },
    { nome: 'Leopoldina', idade: 25 },
    { nome: 'Leonardo', idade: 23 },
    { nome: 'Leonel', idade: 21 },
    { nome: 'Leonora', idade: 19 },
    { nome: 'Leonor', idade: 17 },
    { nome: 'Leocádio', idade: 15 },
];

const somenteOsNomes = outrasPessoas.map(pessoa => pessoa.nome);
console.log(`Somente os nome: ${somenteOsNomes}\n`);



const idades = outrasPessoas.map(function (pessoa) {
    return { idade: pessoa.idade };
});
console.log(' Somente as idades: ');
console.log(idades);



const idadesOutraOpcaoOrdenada = outrasPessoas.map(pessoa => ({ idade: pessoa.idade }))
    .sort((a, b) => a.idade - b.idade);
console.log('\n\n Somente as idades ordenadamente: ');
console.log(idadesOutraOpcaoOrdenada);



/*Usando o map() são modificados os dados originais do array...
para isso não acontecer devemos criar um novo objeto como abixo:
*/
const pessoasComIds = outrasPessoas.map(function (pessoa, indice) {
    newPessoa = { ...pessoa };
    newPessoa.id = indice;
    return newPessoa;
});
console.log('\n\n Pessoas com IDs: ');
console.log(pessoasComIds);

console.log('\n\n Array original sem modificações: ');
console.log(outrasPessoas);



console.log("\n\n Aula 86 reduce() ============================");

// Some todos os números (reduce)
const numerosParaReduzir = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];
const somaDosNumeros = numerosParaReduzir.reduce((acumulador, valorAtual, indice, arrayOriginal) => {
    return acumulador += valorAtual;
}, 0);
console.log('\n\n Soma dos numeros do array usando reduce()');
console.log(somaDosNumeros);


// Retorne um array apenas com os numeros pares (filter)
const numerosParaFiltrar = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];
const numerosPares = numerosParaFiltrar.filter(valor => valor % 2 === 0);
console.log('\n\n Numeros pares usando filter()');
console.log(numerosPares);



// Retorne um array com o dobro dos valores (map)
const numerosParaMultiplicarExemplo = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];
const numerosMultiplic = numerosParaMultiplicarExemplo.map((e) => e * 2);
console.log(numerosMultiplic);


// Retorne a pessoa mais velha do grupo
const pessoasComIdadesDiferentes = [
    { nome: 'Leonora', idade: 19 },
    { nome: 'Leopoldina', idade: 35 },
    { nome: 'Leonor', idade: 17 },
    { nome: 'Leopoldo', idade: 31 },
    { nome: 'Leomar', idade: 29 },
    { nome: 'Leoôncio', idade: 27 },
    { nome: 'Leonel', idade: 21 },
    { nome: 'Leonardo', idade: 23 },
    { nome: 'Leocádio', idade: 15 },
];

const pessoaMaisVelha = pessoasComIdadesDiferentes.reduce((acumulador, valorAtual) => {
    if (acumulador.idade > valorAtual.idade) {
        return acumulador;
    }
    return valorAtual;
});

console.log("Pessoa mais velha: " + pessoaMaisVelha.idade)



console.log("\n\n Aula 87 juntando tudo em um stream apenas ============================");
// Retorne um array com o dobro dos valores (map)
const arrayDeNumeros = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];
const numerosOrganizados = arrayDeNumeros
    .filter((e) => e % 2 === 0)
    .map((e) => e * 2)
    .reduce((acumulador, valorAtual) => acumulador += valorAtual);
console.log(numerosOrganizados);