/*O programa "Educado" irá perguntar o seu nome, e também como você gostaria de ser chamado. Depois disso, uma saudação para você aparece na tela.
*/

const prompt = require('prompt-sync')();
var nome = prompt('Olá, qual o seu nome?');
var apelido = prompt('Como você gostaria de ser chamado?');

console.log('Olá ' + nome + ', também conhecido(a) como ' + apelido + '.\n Seja Bem Vindo!')