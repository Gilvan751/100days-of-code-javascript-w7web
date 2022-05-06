//console.log();  serve para debugar o programa
/* var x = 10;
console.log(x); */

// alert(); função de alerta, comando intruzido
//alert("Bom dia");

// função prompt(); é a função que captura dados do usuário e armazena
//na memoria para ser apresentado em uma outra chamda da função
/* var x = prompt("Digite seu numero da sorte: ");
alert("Seu numero da sorte e: " + x);
console.log(x); */
// função confirm(); irmã da função prompt();
// o resultado da função confirm sempre vai ser booleano true or false
//var y = confirm("Seu numero da sorte é 13: ");
// desafio a palavra Number tem que ser escrita em maiuscula
/* var x = Number(prompt("Entre com o primeiro numero: "));
var y = Number(prompt("Entre com o segundo numero: "));
var soma = Number(x) + Number(y);
alert("a soma da operação é: " + soma); */
/* var nome = prompt('Qual é seu nome'.toUpperCase())
document.write(`Ola,<strong>${nome}</strong>! Seu nome tem ${nome.length}letras <br/>`)
document.write(`Seu nome em maiúscula é ${nome.toUpperCase()} <br/>`)
document.write(`Seu nome em minuscula é ${nome.toLowerCase()}`) */
/* n1.toFixed(2) com duas casas decimais apos a virgula
n1.toFixed(2).replace('.',',') replace troca o ponto pela virgulan1.to 
n1.toLocaleString('pt-BR',{style:'currency',currency:'BRL'}) COMANDO PARA COLOCAR A MOEDDAA 
EM QUE TIPO DE PAIS*/

var n1 = 1543.5
document.write(`${n1.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}<br/>`)
document.write(`${n1.toLocaleString('pt-BR',{style:'currency',currency:'EUR'})}<br/>`)
document.write(`${n1.toLocaleString('pt-BR',{style:'currency',currency:'USD'})}`)
