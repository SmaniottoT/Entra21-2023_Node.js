var valorInicial = 500;
var taxa = 10;

var aumento = (valorInicial * (taxa/100));
var valorFinal = (valorInicial + aumento);

console.log("O valor de aumento, para um valor inicial de R$", valorInicial.toFixed(2), ", investido em uma taxa de", taxa,"%, é de R$", aumento.toFixed(2),", sendo que o valor final é de R$", valorFinal.toFixed(2),".");


var nome = "Tamires";
var anoNascimento = 1996;
var ano = new Date().getFullYear();
var idade = (ano - anoNascimento);

console.log(nome, "tem", idade, "anos de idade, considerando que nasceu no ano de", anoNascimento,".");