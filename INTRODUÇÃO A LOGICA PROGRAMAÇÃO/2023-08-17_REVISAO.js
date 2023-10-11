// 1)	Escreva um programa que declare duas variáveis, “nome” e “idade”,
// e as imprima em um console em uma frase que diga “Olá, meu nome é[nome] e eu tenho[idade] anos”.


// let nome = "Tamires";
// let idade = 26;

// console.log("Olá, meu nome é", nome, "e eu tenho ", idade, "anos.");



// 2)	Escreva um programa que declare as variáveis necessárias para escrever no console:
// (`Estou planejando uma viagem para ${destino} por ${dias} dias, com um orçamento de R$${orcamento}.`);

// let destino = "Canadá";
// let dias = 20;
// let orcamento = 5000
//     ;
// console.log('Estou planejando uma viagem para ', destino, ' por ', dias, ' com um orçamento de R$ ', orcamento);



// 3)	Escreva um programa que declare as variáveis necessárias para escrever no console: 
// Estou interessado em comprar um ${ produto } por R$${ preco }, dividido em ${ parcelas } parcelas.`);

// let produto = 'xícara';
// let preco = 25;
// let parcelas = 10;

// console.log("Estou interessado em comprar um,", produto, "por R$", preco, "dividido em ",parcelas,"parcelas.");



// 4)	Escreva um programa que declare as variáveis necessárias para escrever no console: 
// `Olá, sou ${ nome }, ${ profissao } com ${ experiencia } de experiência na área.`);

// let nome = "Tamires";
// let profissao = "Engenheira Civil";
// let experiencia = 5;

// console.log(`Olá, sou ${ nome }, ${ profissao } com ${ experiencia } anos de expediência na área.`);


// 1)	Somar dois números e imprimir o resultado.

// let num1 = 2;
// let num2 = 5;
// let soma = num1+num2

// console.log(`A soma dos números apresentados resulta em ${ soma }.`);


// 2)	Calcular a diferença entre dois números e imprimir o resultado.

// let num1 = 7;
// let num2 = 5;
// let subtracao = num1 - num2;

// console.log(`A subtração entre os dois números resulta em ${ subtracao } `);

// 3)	Multiplicar dois números e imprimir o resultado.

// let num1 = 7;
// let num2 = 5;
// let multiplicacao = num1 * num2;

// console.log(`A multiplicação entre os dois números resulta em ${ multiplicacao }.`);

// 4)	Dividir dois números e imprimir o resultado.

// let num1 = 35;
// let num2 = 5;
// let divisao = num1 / num2;

// console.log(`A divisão entre os dois números resulta em ${ divisao }.`);

// 5)	Calcular o resto da divisão de dois números e imprimir o resultado

// let num1 = 32;
// let num2 = 5;
// let resto = num1 % num2;

// console.log(`O resto da divisão entre os dois números resulta em ${ resto }.`);

// 6)	Elevar um número a uma potência e imprimir o resultado

// let num1 = 10;
// let num2 = 3;
// let potencia = num1 ** num2;

// console.log(`A potenciação entre os dois números resulta em ${ potencia }.`);


// 7)	Calcular a média de três números e imprimir o resultado

// let num1 = 7;
// let num2 = 8;
// let num3 = 9;
// let media = (num1 + num2 + num3) / 3;

// console.log(" A média dos números informados é", media);

// 8)	Converter uma temperatura de Celsius para Fahrenheit e imprimir o resultado (celsius * 9/5) + 32;

// let temperaturaCelsius = 32;
// let temperaturaFahrenheit = ((temperaturaCelsius*9/5)+32);

// console.log(`A temperatura de ${ temperaturaCelsius }° Celsius equivale a ${ temperaturaFahrenheit }° Fahrenheit.`);

// 9)	Calcular a área de um retângulo e imprimir o resultado:

// let largura = 10;
// let altura = 2;
// let area = largura*altura;
// let perimetro = 2*(largura+altura);

// console.log(`Para um retangulo com largura de ${ largura } e ${ altura } de altura, temos uma área de ${ area } e perímetro de ${ perimetro }.`);


// 10)	Verificar se um número é par ou ímpar e imprimir o resultado.

// let numero = 51;

// if (numero%2 == 0){
//     console.log(`O número ${ numero } é par.`);
// } else { 
//     console.log(`O número ${ numero } é ímpar.`);
// }

// 11)	Se o preço de um produto aumentou de R$ 80,00 para R$ 96,00, qual foi o aumento percentual?

// let valor = 80
// let montante = 96
// let taxa = (montante - valor) / valor;

// console.log(`A taxa de aumento é de ${ taxa }.`);


// Verificações
// 1)	Crie um programa que verifica se um número é par ou ímpar e exiba uma mensagem correspondente.

// let numero = 12;

// if (numero%2 == 0){
//     console.log(`O número ${ numero } é par.`);
// } else { 
//     console.log(`O número ${ numero } é ímpar.`);
// }



// 2)	Crie um programa que verifica se uma pessoa é maior de idade (idade igual ou superior a 18 anos) 
// e exiba uma mensagem autorizando ou não a entrar na festa.

// let idade = 16;

// if (idade >= 18) {
//     console.log("Acesso permitido. Usuário maior de idade.");
// } else {
//     console.log("Acesso negado. Usuário menor de idade.");
// }


// 3)	Crie um programa que verifica se um número é positivo, negativo ou zero, e exiba uma mensagem correspondente.

// let numero = -50;

// if (numero > 0) {
//     console.log(`O número ${ numero } é positivo.`);
// } else if (numero == 0) {
//     console.log(`O número ${ numero } é nulo.`);
// } else {
//     console.log(`O número ${ numero } é negativo.`);
// }



// 4)	Crie um programa que recebe os três lados de um triângulo e determina se ele é equilátero (todos os lados iguais), 
// isósceles (dois lados iguais) ou escaleno (todos os lados diferentes).

// let side1 = 30;
// let side2 = 30;
// let side3 = 30;

// if (side1 == side2 && side1 == side3 && side2 == side3) {
//     console.log(`O triângulo é equilátero`);
// } else if (side1 == side2 || side1 == side3 || side2 == side3) {
//     console.log(`O triângulo é isóceles`);
// } else {
//     console.log(`O triângulo é escaleno`);
// }


// 5)	Crie um programa que recebe o preço de um produto e o percentual de desconto a ser aplicado. 
// Se o preço for maior ou igual a R$100 e o desconto for maior ou igual a 10%, o programa deve calcular o preço com o 
// desconto e exibir o resultado. Caso contrário, deve exibir uma mensagem informando que não é possível aplicar o desconto.

// let preco = 20
// let desconto = 50
// let precoDesconto = preco-(preco*desconto/100)

// if (preco >= 100 && desconto >=10){
//     console.log(`O valor com desconto é de ${ precoDesconto } `);
// } else{
//     console.log("Não é possível aplicar o desconto no produto.");
// }


// 6)	Crie um programa que verifica se um ano é bissexto. Um ano é bissexto se for divisível por 4, 
// exceto quando é divisível por 100. Porém, é bissexto novamente se for divisível por 400.

// let ano = 2005;

// if (ano % 400 == 0 || ano % 4 == 0 && ano % 100 !== 0) {
//     console.log(`O ano ${ ano } é bissexto`);
// } else {
//     console.log(`O ano ${ ano } não é bissexto`);
// }


// 7)	Informe qual a estação do ano dependendo do mês que o usuário informar.

// let mes = "abril";

// if (mes == "janeiro" || mes == "fevereiro" || mes == "março") {
//     console.log(`O mês de ${ mes } está no verão.`);
// } else if (mes == "abril" || mes == "maio" || mes == "junho") {
//     console.log(`O mês de ${ mes } está no outono.`);
// } else if (mes == "julho" || mes == "agosto" || mes == "setembro") {
//     console.log(`O mês de ${ mes } está no inverno.`);
// } else if (mes == "outubro" || mes == "novembro" || mes == "dezembro") {
//     console.log(`O mês de ${ mes } está na primavera.`);
// } else {
//     console.log(`Mês não reconhecido.`);
// }



// 1)	 Crie um programa que use um loop for para imprimir os números de 1 a 10.


// let i = 1;

// for (i; i<=10; i++){ 
//     console.log(i);
// }


// 2)	Crie um programa que use um loop for para imprimir apenas os números pares de 1 a 20;

// let i = 1;

// while (i <= 20) {
//     if (i % 2 == 0) {
//         console.log(i)
//     } 
//     i++;
// }


// 3)	Crie um programa que use um loop while para imprimir os números de 10 a 1.

// let i = 10;

// while (i>=1 && i<=10) {
//     console.log(i);
//     i--
// }

// 4)	Crie um programa que use um loop do-while para imprimir os números pares de 2 a 10.

// let i = 1

// do {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
//     i++
// } while (i >= 2 && i <= 10)


// 5)	Crie um programa que use um loop for para calcular a soma dos números de 1 a 10 e exiba o resultado.

// let i = 1;
// let soma = 0;

// for (i; i<=10; i++) {
//     soma+=i;
// }
// console.log(soma);


// 6)	Crie um programa que use um loop while para exibir a tabuada do número 5 (de 1 a 10).

// let i = 1;

// while (i<=10){
// console.log(5*i);
// i++
// }



// 7)	Crie um programa que use um loop for para exibir a tabela de multiplicação de um número 
// escolhido pelo usuário, de 1 a 10.


// let i = 1;
// let num = 7;

// while (i<=10){
// console.log(num*i);
// i++
// }



// Arrays
// 1)	Crie um programa que calcula e exibe a soma dos elementos de um array de números.

// let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// for (let i = 0; i<vetor.length;i++){
//     sum += vetor[i];
// }

// console.log(sum);