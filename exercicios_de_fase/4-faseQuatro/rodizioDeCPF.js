/*A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares.
*/

// Dia (hoje - leitura da data do pc)
// CPF (apos o hífen)
// Autorizado a entrar na loja: false

//Colocando estilo no terminal
var corVermelha = (texto) => {
    return '\x1b[31m' + texto + '\x1b[0m';
};

var corAzul = (texto) => {
    return '\x1b[34m' + texto + '\x1b[0m';
}

var corVerde = (texto) => {
    return '\x1b[32m' + texto + '\x1b[0m';
};

var negrito = (texto) => {
    return '\x1b[1m' + texto + '\x1b[0m';
};


const ler = require("prompt-sync")();

const diaHoje = (new Date().getDay());
var finalCPF = parseInt(ler("Digite o ultimo digito do seu cpf: "));

if (isNaN(finalCPF)) {
    console.log(corVermelha(negrito('\nApenas números podem ser usados\n')));
    return
}

var autorizado = (diaHoje % 2) == (finalCPF % 2);

console.log(negrito("\t\nAutorizado a entrar na loja? " + (corVerde(autorizado ? "Sim" : "Não\n"))));