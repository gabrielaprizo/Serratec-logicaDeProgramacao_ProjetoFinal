/*A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares.
*/

// Dia (hoje - leitura da data do pc)
// CPF (apos o hífen)
// Autorizado a entrar na loja: false

const ler = require("prompt-sync")();

const diaHoje = (new Date().getDay());
var finalCPF = ler("Digite o ultimo digito do seu cpf: ");

if (!Number.isInteger(finalCPF)) {
    console.log('Apenas números podem ser usados');
    return;
}

var autorizado = (diaHoje % 2) == (finalCPF % 2);

console.log("Autorizado a entrar na loja? " + (autorizado ? "Sim" : "Não"));