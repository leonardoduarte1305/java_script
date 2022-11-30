const { funcaoSomar, funcaoDiminuir, funcaoMultiplicar, funcaoDividir } = require('../ModuloOperacoesMatematicas');

console.log('funcaoSomar: ' + funcaoSomar(3, 4));
console.log('funcaoDiminuir: ' + funcaoDiminuir(3, 4));
console.log('funcaoMultiplicar: ' + funcaoMultiplicar(3, 4));
console.log('funcaoDividir: ' + funcaoDividir(3, 4));

// =======================================

const path = require('path');
console.log(path.resolve(__filename));
console.log(path.resolve(__dirname));
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));