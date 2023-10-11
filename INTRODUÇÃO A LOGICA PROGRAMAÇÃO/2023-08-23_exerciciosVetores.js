// 14) Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';
// Se os valores estiverem todos corretos, exiba uma mensagem para o usuário, retornando os valores. 
// Caso não esteja correto, exiba apenas o que está incorreto.
// Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

let name = "Tamires";
let age = 26;
let income = 5000.00;
let gender = "f";
let maritalStatus = "s";

if (name.length <= 3) {
    console.log(`O nome deve possuir mais que três caracteres. A entrada "${name}" é inválida.`);
} else if (age < 0 || age > 150) {
    console.log(`A idade deve estar contida entre 0 e 150 anos. A entrada "${age}" é inválida.`);
} else if (income <= 0) {
    console.log(`O salário informado deve ser superior a 0. A entrada "${age}" é inválida.`);
} else {

    console.log(`Nome: ${name}; Idade: ${age}; Salário: ${income}; Sexo: ${gender}; Estado Civil: ${maritalStatus}.`);
}


// 15) Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.
//  - deve ser feito usando o laço for.

let num1 = 1;
let num2 = -5;

if (num2 >= num1) {
    for (num2; num2 >= num1; num2--) {
        console.log(num2);
    }
} else if (num2 < num1) {
    for (num1; num1 >= num2; num1--) {
        console.log(num1);
    }
}


// Repita o programa acima, porém usando o while;

let numero1 = 1;
let numero2 = 8;

if (numero2 >= numero1) {
    while (numero2 > numero1) {
        numero2--
        console.log(numero2)
    }
} else if (numero2 < numero1) {
    while (numero1 > numero2) {
        numero1--
        console.log(numero1)
    }
}


// 17) Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.

let numbers = [80, 2, 3, 5, 7, 9, 11, 15, 17];

numbers.sort((a, b) => a - b);
let menor = numbers[0];
console.log(`O menor valor é ${menor}`);

numbers.sort((a, b) => b - a);
let maior = numbers[0];
console.log(`O maior valor é ${maior}`);


let sum = numbers[0]
for (let i = 1; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(`A soma de todos os elementos é ${sum}`);

// 18) Os números primos possuem várias aplicações dentro da Computação, por exemplo na criptografia. 
// Um número primo é aquele que é divisível apenas por um e por ele mesmo. 
// Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.


let number = 12;
let primeNumber = true;

if (number === 1) {
    console.log(`O número ${number} não é primo.`);
} else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            primeNumber = false;
            break;
        }
    }
    if (primeNumber) {
        console.log(`O número ${number} é primo.`);
    } else {
        console.log(`O número ${number} não é primo.`);
    }
} else {
    console.log(`O número deve ser maior que "1".`);
}


// 19) Em uma competição de salto em distância cada atleta tem direito a cinco saltos. No final da série de saltos de 
// cada atleta, o melhor e o pior resultados são eliminados. O seu resultado fica sendo a média dos três valores restantes. 
// Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e 
// depois informe a média dos saltos conforme a descrição acima informada (retirar o melhor e o pior salto e depois 
// calcular a média). Faça uso de uma lista para armazenar os saltos. 
// Os saltos são informados na ordem da execução, portanto não são ordenados. O programa deve ser encerrado quando 
// não for informado o nome do atleta. A saída do programa deve ser conforme o exemplo abaixo:
// Atleta: Rodrigo Curvêllo
// Primeiro Salto: 6.5 m
// Segundo Salto: 6.1 m
// Terceiro Salto: 6.2 m
// Quarto Salto: 5.4 m
// Quinto Salto: 5.3 m
// Melhor salto:  6.5 m
// Pior salto: 5.3 m
// Média dos demais saltos: 5.9 m
// Resultado final:
// Rodrigo Curvêllo: 5.9 m

let atleta = "Rodrigo Curvêllo";
let saltos = [6.5, 6.1, 6.2, 5.4, 5.3];

saltos.sort((a, b) => b - a);
console.log(`Melhor salto: ${saltos[0]}m.`);
saltos.splice(0, 1);

saltos.sort((a, b) => a - b);
console.log(`Pior salto: ${saltos[0]}m.`);
saltos.splice(0, 1);


let somaSaltos = 0

for (let i = 0; i < saltos.length; i++) {
    somaSaltos += saltos[i]
}
let media = somaSaltos / (saltos.length)
console.log(`Média dos demais saltos: ${media.toFixed(2)}m.`);

console.log(`Resultado final: ${atleta}: ${media.toFixed(2)}m.`);