/* var nomes = ["Felipe", "Zezinho", "Luizinho"];
var idade = [22, 40, 60];
var cpf = ["000.000.000-01", "000.000.000-02", "000.000.000-03"];
for (i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + " " + idade[i] + " " + cpf[i]);
} */
/* var convidado = {nome: "Felipe", idade: "37", genero: "Masculino",
dataNascimento: "18/02/1982", cpf: "037.727.730-44"}
console.log(convidado); */
// → {nome: "Felipe", idade: "37", genero: "Masculino", dataNascimento:
//"18/02/1982", cpf: "037.727.730-44"}
/* var convidado = {nome: ["Pedro", "Raquel", "Tereza"], idade: [20, 18, 32], genero: ["M", "F", "F"],
dataNascimento:["15/02/1980", "16/10/2000", "01/05/1997"], cpf: ["000.000.000-01", "000.000.000-02", "000.000.000-03"]}
console.log(convidado); */

/* function ola() {
 var mensagem = "Olá ";
 for(i = 0;i < arguments.length - 1;i++) {
 mensagem += arguments[i];
 if (i < arguments.length - 2) {
 mensagem += ", ";
 }
 }
 mensagem += " e " + arguments[arguments.length - 1] + "! Tudo bem!?";
 console.log(mensagem);
}
ola("Felipe", "Gabriel", "Bruno", "Douglas"); */

var convidados = [];
while(true) {
 var nome = prompt("Digite o nome do convidado ou S para sair");
 var idade = Number(prompt("Digite a idade do convidado"));
 var cpf = prompt("Digite o CPF do convidado");
 if (nome == "S") {
 break;
 } else {
 convidados.push({nome: nome, idade: idade, cpf: cpf});
 }
}
console.log(convidados);
