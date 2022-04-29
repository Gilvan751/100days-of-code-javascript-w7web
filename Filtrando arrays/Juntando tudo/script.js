var produtos = [
 {id: 123, nome: 'Camiseta', cor: 'preto', tamanho: 'G', categoria:
'Vestuário'},
 {id: 125, nome: 'Shorts', cor: 'preto', tamanho: 'G', categoria:
'Vestuário'},
 {id: 456, nome: 'Tênis', cor: 'preto', tamanho: '41', categoria:
'Vestuário'},
 {id: 789, nome: 'Bola', cor: 'verde', tamanho: 'Único', categoria:
'Esporte'}
]
Array.prototype.groupBy = function(prop) {
 var value = this.reduce(function(total, item) {
 var key = item[prop];
 total[key] = (total[key] || []).concat(item);
 return total;
 }, {});
 return value;
}
var produtosFiltrados = produtos.filter(function(item) {
 return item.cor == 'preto';
}).filter(function(item) {
 return item.tamanho == 'G';
}).groupBy('categoria');
console.log(produtosFiltrados);
// → {
// "Esporte": [
// {id: 789, nome: "Bola", cor: "verde", tamanho: "Único", categoria:
//"Esporte"}
// ],
// "Vestuário": [
// {id: 123, nome: "Camiseta", cor: "preto", tamanho: "G", categoria:
//"Vestuário"},
// {id: 456, nome: "Tênis", cor: "branco", tamanho: "41", categoria:
//"Vestuário"}
// ]
// }

Array.prototype.groupBy = function(prop) {
 var value = this.reduce(function(total, item) {
 var key = item[prop];
 total[key] = (total[key] || []).concat(item);
 return total;
 }, {});
 return value;
}
var convidados = [
 {nome: 'Felipe', idade: 37, genero: 'masculino'},
 {nome: 'Amanda', idade: 17, genero: 'feminino'},
 {nome: 'João', idade: 27, genero: 'masculino'},
 {nome: 'Daniel', idade: 21, genero: 'masculino'},
 {nome: 'Helena', idade: 21, genero: 'feminino'}
];
var convidadosFiltrados = convidados.sort(function(a, b) {
 return (a.nome > b.nome) ? 1 : -1; // 1 B precede A, -1 A precede B
}).filter(function(item) {
 return item.idade >= 18;
}).groupBy('genero');
console.log(convidadosFiltrados);
// → {
// "feminino": [
// {nome: "Helena", idade: 21, genero: "feminino"}
// ],
// "masculino": [
// {nome: "Daniel", idade: 21, genero: "masculino"},
// {nome: "Felipe", idade: 37, genero: "masculino"},
// {nome: "João", idade: 27, genero: "masculino"}
// ]
// }
