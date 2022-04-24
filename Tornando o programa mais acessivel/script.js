/* var idade = prompt("entre com sua idade: ");
//var genero = prompt("Qual seu genero? M ou F ");
if (idade >= 18) {
    //document.write("Pode entrar a pessoa");
    alert("Pode liberar a entrada ");
} else {
    //document.write("Não é permitido sua entrada");
    alert("Não pode se liberado sua entrada\npois você tem menos de 18 anos");
} */

//desafio
/* var numero = prompt("Digite um numero: ");
if (numero >= 10) {
    alert("Parabéns! este e seu numero da sorte");
} else {
    alert("Que pena tente novamente!");
} */
 /* var numero = 0
while (numero < 10) {
    console.log("nunca mais irei morder o cachorro da diretora");
    numero = numero + 1;    
} */

// desafio
 /* while(true) {
 var x = prompt("Digite o primeiro número ou N");
 var y = prompt("Digite o segundo número ou N");
 if (x == "N" || y == "N") {
 break;
 }
 var resultado = Number(x) + Number(y);
 alert("O resultado da soma é: " + resultado);
}  */

//comando para pegar um valor e multiplica por 2
/* x = 0;
while (x < 10) {
 y = x *2;
 console.log("Valor de Y: " + y);
 x++;
}
 */

/* var x = 0; // 1
while(x < 10) { // 2
 console.log(x);
 x++; // 3
} */
/* for(x = 0;x < 10;x++) { // 1, 2 e 3
 console.log(x); // comando de execução
} */
/* for (x = 0; x < 10; x += 2) {
    console.log(x);
} */
/* for (x = 10;x >=0; x--) {
    console.log(x);
} */
/* var vi = Number(prompt("Digite o valor inicial"));
var vf = Number(prompt("Digite o valor final"));
var vc = Number(prompt("Digite o valor de incremento"));
var res = 0;
for(x = vi;x <= vf;x+=vc) {
 res = Math.log(x);
 console.log(res);
} */

var i = Number(prompt("Digite o valor inical"));
var f = Number(prompt("Digite o valor final"));
var inc = Number(prompt("Digite o valor do incremento"));
var res = 0;
for (x = i; x <= f; x += inc) {
    res = Math.log(x);
    console.log(res);
}