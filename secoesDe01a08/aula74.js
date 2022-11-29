// IIFE Immediately Invoked Function Expression

(function () {
    console.log("//IIFE Immediately Invoked Function Expression")
    console.log("(function () { \n    console.log('Leopoldo Jardim');\n })();");
})();

console.log("====================================");
(function (idade, peso, altura) {
    const sobrenome = "Jardim";
    function criaNome(nome) {
        return `${nome} ${sobrenome} tem: ${idade} anos de idade\n
         ${peso}Kg de peso e ${altura}m de altura.`
    }

    function falaNome(nome) {
        console.log(criaNome(nome));
    }

    falaNome('Leopoldo');
})(33, 84.531, 1.85);