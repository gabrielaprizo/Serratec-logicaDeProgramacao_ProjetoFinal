/*No programa “Veja os números pares”, o console apresentará uma frase com os números pares entre 2 e 10,
* separados por vírgula e na mesma linha. A frase termina com ponto, não com vírgula.
* Após escrever a frase, o sistema pede para continuar, e a cada confirmação,
* exibe a nova mensagem na sequência (entre 12 e 20 etc).
*/
const prompt = require('prompt-sync')();
var corVermelha = (texto) => {
    return '\x1b[31m' + texto + '\x1b[0m';
};
var corVerde = (texto) => {
    return '\x1b[32m' + texto + '\x1b[0m';
};

var negrito = (texto) => {
    return '\x1b[1m' + texto + '\x1b[0m';
};

var ultimoElemento = 10;
var deveContinuar = true;

var sequencia = [];
for (elemento = 2; elemento <= ultimoElemento; elemento++) {
    if (elemento % 2 === 0) {
        sequencia.push(elemento);
    }

    if (elemento == ultimoElemento) {
        console.log(negrito('Veja os números pares: %s.'), sequencia.join(', '));
        console.log('%s %s', negrito('Deseja continuar?'), corVerde('(S/N)'));
        let continueLoop = prompt('~> ');

        deveContinuar = (continueLoop.toUpperCase() === 'S' ? true : false);
        sequencia = [];
        ultimoElemento = (ultimoElemento  + 10);
    }

    if (!deveContinuar) {
        break;
    }
}

if (!deveContinuar) {
    console.log(corVermelha('Programa finalizado.'));
}