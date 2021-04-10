/*O programa "Educado" irá perguntar o seu nome, e também como você gostaria de ser chamado. Depois disso, uma saudação para você aparece na tela.
*/

//Colocando estilos no terminal
var negrito = (texto) => {
    return '\x1b[1m' + texto + '\x1b[0m';
};
var corMagenta = (texto) => {
    return '\x1b[35m' + texto + '\x1b[0m';
};

//Início do Programa
const prompt = require('prompt-sync')();
var nome = prompt(negrito('\tOlá, qual o seu nome?  '));
var apelido = prompt('\tComo você gostaria de ser chamado?  ');

//Saída
console.log(negrito(corMagenta('\tOlá ' + nome + ', também conhecido(a) como ' + apelido + '.\n\t Seja Bem Vindo!')));