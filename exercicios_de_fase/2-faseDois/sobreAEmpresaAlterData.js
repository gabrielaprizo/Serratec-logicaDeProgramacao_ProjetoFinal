/*Escrever o programa “Sobre a Empresa Alterdata”. Sua saída será a mensagem: “A Alterdata tem x anos.”, onde o x é a idade da empresa. A idade será atribuída em uma variável inteira.
*/

// Idade da Empresa
const inicio = (1989);
var anoAtual = (new Date().getFullYear());
var idade = (anoAtual - inicio);

console.log('A empresa AlterData tem '+ idade + ' anos.');