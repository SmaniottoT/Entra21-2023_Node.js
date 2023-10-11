// 1) Crie uma variável para armazenar o nome e exiba no console o nome da pessoa com uma mensagem de olá.  

let nome = "Tamires"
console.log(`Olá, ${nome}, bem-vindo!`);

////
// 2) Crie um programa que peça a renda total da família e defina em qual classe social ele faz parte: 
// Classe A: (renda mensal domiciliar superior a R$ 22 mil), 
// Classe B: (renda mensal domiciliar entre R$ 7,1 mil e R$ 22 mil), 
// Classe C: (renda mensal domiciliar entre R$ 2,9 mil e R$ 7,1 mil), 
// Classes D/E: (renda mensal domiciliar até R$ 2,9 mil); 

let rendaTotal = 3000;

if (rendaTotal > 22000) {
    console.log(`Para a renda total da família de R$ ${rendaTotal} a classe social é a A.`);
} else if (rendaTotal >= 7100) {
    console.log(`Para a renda total da família de R$ ${rendaTotal} a classe social é a B.`);
} else if (rendaTotal >= 2900) {
    console.log(`Para a renda total da família de R$ ${rendaTotal} a classe social é a C.`);
} else {
    console.log(`Para a renda total da família de R$ ${rendaTotal} a classe social é a D/E.`);
}


////
// 3) Crie um programa que peça o nome e a idade do usuário, e verifique qual a sua fase de vida.
// Por exemplo, até 11 anos criança, de 12 a 20 adolescente, de 21 a 65 adulto, e 65 para cima idoso.

let nome3 = "Tamires";
let idade3 = 10;

if (idade3 > 65) {
    console.log(`${nome3}, você tem ${idade3} anos de idade, portanto, é um(a) idoso(a).`);
} else if (idade3 >= 21) {
    console.log(`${nome3}, você tem ${idade3} anos de idade, portanto, é um(a) adulto(a).`);
} else if (idade3 >= 12) {
    console.log(`${nome3}, você tem ${idade3} anos de idade, portanto, é um(a) adolescente.`);
} else {
    console.log(`${nome3}, você tem ${idade3} anos de idade, portanto, é uma criança.`);
}

////
// 4) Calcule a média de três números e exiba se a média é maior ou igual a 7.

let num1 = 7;
let num2 = 7;
let num3 = 7;
let media = (num1 + num2 + num3) / 3;

if (media >= 7) {
    console.log(`A média dos valores ${num1}, ${num2} e ${num3} é ${media}, sendo superior/igual a média 7.`);
} else {
    console.log(`A média dos valores ${num1}, ${num2} e ${num3} é ${media}, sendo inferior a média 7.`);
}

////
// 5) Solicite um número ao usuário e exiba todos os números pares de 0 até o número inserido.

let num5 = 5;

let pares = [];

for (let i = 0; i < num5; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}
console.log(`Os números pares contidos entre 0 e ${num5} são: ${pares}.`);

////
// 6) Crie um programa que conte de 1 até 10 usando um loop while.
let contador = 1
while (contador <= 10) {
    console.log(contador);
    contador++
}


////
// 7) Solicite um número ao usuário e exiba a tabuada desse número de 1 a 10.

let num7 = 5


for (i = 0; i <= 10; i++) {
    console.log(`${num7} x ${i} = ${num7 * i}`);
}

////
// 8) Calcule e exiba a média de 5 números inseridos pelo usuário.
// Se a média for maior que 7, imprima "Aprovado", senão, imprima "Reprovado".

let n1 = 1;
let n2 = 2;
let n3 = 3;
let n4 = 4;
let n5 = 5;

let med = (n1 + n2 + n3 + n4 + n5) / 5;

if (med >= 7) {
    console.log(`A média para as notas informadas resulta em ${med}, portanto, aluno está aprovado.`);
} else {
    console.log(`A média para as notas informadas resulta em ${med}, portanto, aluno está reprovado.`);
}

//ou 

let notas8 = [7, 7, 7, 7, 7];
let soma8 = 0;


for (let i = 0; i < notas8.length; i++) {
    soma8 += notas8[i]
}

let med8 = (soma8 / notas8.length);

if (med8 >= 7) {
    console.log(`A média para as notas informadas resulta em ${med8}, portanto, aluno está aprovado.`);
} else {
    console.log(`A média para as notas informadas resulta em ${med8}, portanto, aluno está reprovado.`);
}

////
// 9) Crie um programa que exiba todos os números ímpares entre 50 e 100. 

for (let i = 50; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}