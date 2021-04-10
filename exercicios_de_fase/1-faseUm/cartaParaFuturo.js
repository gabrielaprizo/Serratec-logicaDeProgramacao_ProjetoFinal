/*Escreva uma carta para você mesmo ler ao final do curso, e imprima no console. Na carta você deve incluir as suas expectativas para o curso de programação e sua carreira nesta nova área. Seja criativo, lembre-se de incluir desafios e incentivos, para que o seu eu do futuro tenha orgulho de suas conquistas!
*/
//Um momento fofura :)

//Colocando cor no terminal
var negrito = (texto) => {
    return '\x1b[1m' + texto + '\x1b[0m';
};
var corVerde = (texto) => {
    return '\x1b[32m' + texto + '\x1b[0m';
};


// Início da Carta
console.log(negrito(corVerde('\n\n\t == Carta para o Futuro == \n')));
console.log('\tQuerida Gabriela do futuro, \n')
console.log('Espero que você tenha se encontrado mais a cada dia no caminho que escolheu pra si,\n')
console.log('e que tenha aprendido a administrar seu tempo, e a concluir mais rápido os seus exercícios de algoritmo.\n');
console.log('Também espero nunca tenha se esquecido que você é a autora da sua carreira, e tenha dado o seu melhor.\n');
console.log('\tMe conta: conseguiu o certificado Scrum.org? lol\n');
console.log('\t\nQuando ler essa carta, lembre-se desse época, onde tudo ainda era amedrontador apesar de você não deixar transparecer.\n')
console.log('E depois de analisar tudo isso, se sinta vitoriosa por ter chegado aonde chegou!\n');
console.log('E lembre-se: o que você não conseguiu alcançar, e te deixou com cicatrizes,');
console.log('não pode te fazer sofrer. As cicatrizes mostram as lutas em que você sobreviveu!');
console.log('Por último querida programadora (hahaha), nunca se esqueça de sorrir! \n');
console.log(corVerde('\n Um abraço quentinho da Gabriela do Passado.'));