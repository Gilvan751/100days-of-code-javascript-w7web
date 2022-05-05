/* var nome = "Gilvan"; //string
var idade = 50; //number
var salvo = true;  //booleana
var cidade; //undefined */
// o comentário que você quiser
/*  */
/* function alterar(titulo) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}
 alterar("Você conseguiu novamente o feito de trocar a variaveis!"); */
function somar(x, y) {
    let total = x + y;  
    document.getElementById("campo").value = total;
}
somar(6, 9);