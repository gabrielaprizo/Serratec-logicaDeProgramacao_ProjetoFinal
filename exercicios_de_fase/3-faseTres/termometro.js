/*O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit.
*/

//Colocando estilos no terminal
var negrito = (texto) => {
    return '\x1b[1m' + texto + '\x1b[0m';
};
var corAzul = (texto) => {
    return '\x1b[34m' + texto + '\x1b[0m';
}
var corCiano = (texto) => {
    return '\x1b[36m' + texto + '\x1b[0m';
}

//Leitura
const prompt = require('prompt-sync')();

//Entrada
const celsius = prompt(corCiano('\tDigite os graus Celsius '));

//Processamento
let fahr = celsius * 1.8 + 32;

//Saída
console.log(negrito(corAzul('\tPara'+  celsius +  'graus Celsius. Temos equivalente em Fahrenheit: '+ fahr+'')));
