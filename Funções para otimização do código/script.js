/* var x = 10;
var y = 18;
var resultado = x + y;
console.log(resultado); */
//document.write(resultado);
//alert(resultado);
//confirm(resultado);
/* var soma = function (x, y) {
    var resultado = x + y;

    return resultado;
}
soma(); */
/* var plin = function () {
    console.log("Plin..plin.plin");//para mostrar no console
    //document.write("Plin...plin...plin");para mostrar no browser
    //alert("Plin...plin...plin"); para mostrar em alert
}
plin(); */
// temos que fazer micro funções para execultar em uma função que somente chama a função principal para facilitar o codigo
/* function soma(x, y) {
    return x + y;
}
var v1 = Number(prompt("Digite o primeiro valor"));
var v2 = Number(prompt("Digite o segundo valor"));

alert("Resultado e: " + soma(v1, v2)); */
/* function potencia(base, expoente) {
 if (expoente == 0) {
 return 1;
 } else {
 return base * potencia(base, expoente - 1); // nessa parte a recursão
//dá lugar ao for
 }
}
console.log(potencia(2, 3));
// → 8 */
function fatorial(n) {
 if (n == 0) {
 return 1;
 }
 else {
 return (n * fatorial(n - 1));
 }
}
fatorial(1);
// → 1
fatorial(5);
// → 120
