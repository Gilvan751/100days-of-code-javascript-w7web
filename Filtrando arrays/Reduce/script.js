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