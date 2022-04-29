var valores = [1, 2, 5, 7, 9, 10.2];
var somatoria = valores.reduce(function (total, item) {
    return total + item;
});
console.log(somatoria);

var valore = [1, 2, 5, 7, 9, 10.2];
var cal = function (total, item) {
    return total + item;
}
var somatorias = valore.reduce(cal);
var media = somatorias / valore.length;
console.log(media);

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var dobrados = numeros.reduce(function(total, item) {
 return total.concat(item * 2);
}, []);
console.log(dobrados);
// → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
