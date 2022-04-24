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
while(true) {
 var x = prompt("Digite o primeiro número ou N");
 var y = prompt("Digite o segundo número ou N");
 if (x == "N" || y == "N") {
 break;
 }
 var resultado = Number(x) + Number(y);
 alert("O resultado da soma é: " + resultado);
}
 