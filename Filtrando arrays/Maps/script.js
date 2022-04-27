var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multiplica = function(item) {
 return item * 2;
}
var dobrados = numeros.map(multiplica);
console.log(dobrados);
// → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
///
var soma = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
var somas = function (item) {
    return item + 8;
}
var somas = soma.map(somas);
console.log(somas);
///////
var letra = ["a", "b", "c", "d", "e", "f", "g", "h", "l", "m"];
var letras = function (item) {
    return item.toUpperCase();
}
var letras = letra.map(letras);

console.log(letras);