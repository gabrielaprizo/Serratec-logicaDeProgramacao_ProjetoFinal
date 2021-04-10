/*O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit.
*/

//Leitura
const prompt = require('prompt-sync')();

//Entrada
const celsius = prompt('Digite os graus Celsius ');

//Processamento
let fahr = celsius * 1.8 + 32;

//Saída
console.log('Para', celsius , 'graus Celsius. Temos equivalente em Fahrenheit: ', fahr);
