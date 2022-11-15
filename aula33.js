/*
Tipos primitivos (Imutáveis): string, number, boolean, undefined,
    null (bigint, symbol)

Tipos referência (Mutáveis): array, object, function
*/
console.log('Primeiro exemplo');
let a = 'A';
let b = a;

console.log(a, b);
a = 'outra coisa';

console.log(a, b);

// ========================= d aponta para o memo valor na memória que o c
console.log('Segundo exemplo');
let c = [1, 2, 3];
let d = c;

console.log(c, d);
c.push(4);

console.log(c, d);

// ========================= Assim mesmo alterando o valor de e, o f é independente de e
console.log('Terceiro exemplo');
let e = [1, 2, 3, 4];
let f = [...e];

console.log(e, f);
e.push(5);

console.log(e, f);