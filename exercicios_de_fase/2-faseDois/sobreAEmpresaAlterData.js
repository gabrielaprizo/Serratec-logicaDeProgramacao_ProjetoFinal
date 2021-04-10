/*Escrever o programa “Sobre a Empresa Alterdata”. Sua saída será a mensagem: “A Alterdata tem x anos.”, onde o x é a idade da empresa. A idade será atribuída em uma variável inteira.
*/

//Colocando cores no terminal
var negrito = (texto) => {
    return '\x1b[1m' + texto + '\x1b[0m';
};
var corAzul = (texto) => {
    return '\x1b[34m' + texto + '\x1b[0m';
}
//Início do Programa
const inicio = (1989);
var anoAtual = (new Date().getFullYear());
var idade = (anoAtual - inicio);

//Saída
console.log(negrito(corAzul('A empresa AlterData tem '+ idade + ' anos.')));