/*No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. 
 *Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.
 */

// Colocando cor no terminal
 var corAzul = (texto) => {
    return '\x1b[34m' + texto + '\x1b[0m';
}
var corVerde = (texto) => {
    return '\x1b[32m' + texto + '\x1b[0m';
};
var negrito = (texto) => {
    return '\x1b[1m' + texto + '\x1b[0m';
};
let prompt = require('prompt-sync')();

const poema = negrito('Nenhum homem é uma ilha isolada; cada homem é uma partícula do continente, \n uma parte da terra; se um torrão é arrastado para o mar, a Europa fica diminuída, \n como se fosse um promontório, como se fosse a casa dos teus amigos ou a tua própria; \n a morte de qualquer homem diminui-me, porque sou parte do gênero humano. \n E por isso não perguntes por quem os sinos dobram; eles dobram por ti.\n\n');

while (true) {
    console.log(negrito(corAzul('\t=== Poema: Nenhum homem é uma ilha — A Meditação XVII de John Donne ===\n')));
    console.log(poema);
    console.log(negrito('Devo repetir o poema? (S/N)'));
    let devoRepetir = prompt(negrito(corAzul('~> ')));

    if (devoRepetir.toUpperCase() != 'S') {
        break;
    }
}
console.log(corVerde('Fim da Exibição do Poema'));
