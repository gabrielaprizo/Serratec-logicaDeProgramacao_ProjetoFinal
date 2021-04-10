/* Os "vendedores comissionados" recebem 5% do valor de cada produto vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um adicional de 9% sobre o excedente. Seu programa irá receber o valor total de vendas e emitir o recibo de comissão.
*/

//Colocando cor no terminal

var corVerde = (texto) => {
    return '\x1b[32m' + texto + '\x1b[0m';
};

var negrito = (texto) => {
    return '\x1b[1m' + texto + '\x1b[0m';
};
const ler = require("prompt-sync")();

console.log (negrito("\n\nDigite o Valor total de vendas:"));
let totalDeVendas = parseInt(ler(negrito('~> ')));
const METADEVENDAS= 5000.00;
var comicaoPorVenda = totalDeVendas * 0.05;
var  adicional=0.0;

if (totalDeVendas > METADEVENDAS){
    adicional = (totalDeVendas - METADEVENDAS ) * 0.09;
}

console.log (corVerde("Sua comisão: " + comicaoPorVenda.toFixed(2) + '\n'));
console.log (corVerde("Valor adicional: " + adicional.toFixed(2)));