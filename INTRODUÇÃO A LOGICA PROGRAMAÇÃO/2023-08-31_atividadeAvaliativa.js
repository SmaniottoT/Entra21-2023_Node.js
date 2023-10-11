// 1) Crie um programa em javascript que calcule a área de um retângulo e imprima o resultado no console.log(). 
// Fórmula: Área = Largura x Comprimento.

function area(l, h) {
    return l * h;

}

let length = 5;
let high = 10;

console.log(`A área do retângulo é: `, area(length, high));

// 2) Um aluno recebeu as notas 7, 6 e 6,5 nas provas de matemática. 
// Faça um programa em javascript para saber qual é a média desse aluno. 
// Se a média for maior ou igual a 7, o aluno está aprovado. Caso contrário, será reprovado. 
// O resultado deve ser impresso no console.log() conforme o exemplo: 
// “Sua média é: {média do aluno aqui}, você está aprovado”. Ou: “Sua média é: {média do aluno aqui}, você está reprovado”. 

function media(n1, n2, n3) {
    let media = ((n1 + n2 + n3) / 3)
    if (media >= 7) {
        return (`Sua média é: ${media}, você está aprovado!`);
    } else {
        return (`Sua média é: ${media}, você está reprovado!`)
    }
}

let nota1 = 7;
let nota2 = 6;
let nota3 = 6.5;

console.log(media(nota1, nota2, nota3));


// 3) Crie um programa em javascript que verifica se um número é positivo, negativo ou zero, e exiba uma mensagem correspondente.

function avaliacaoSinal(numero) {
    if (numero > 0) {
        return (`O número ${numero} é positivo.`);
    } else if (numero < 0) {
        return (`O número ${numero} é negativo.`);
    } else {
        return (`O número ${numero} é nulo.`);
    }

}

console.log(avaliacaoSinal(8));

// 4) Crie um programa que use um loop for para imprimir apenas os números pares de 1 a 20;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 5) Crie um programa que use um loop while para imprimir os números de 10 a 1.

let i = 10
while (i >= 1) {
    console.log(i);
    i--
}

// 6) Crie um programa que calcula e exibe a soma dos elementos de um array de números.

let array = [0, 2, 4, 6, 8];
let soma = 0

for (let i = 0; i < (array.length); i++) {
    soma += array[i]
}

console.log(`A soma dos números informados é: ${soma}`);

// 7) Solicite um número ao usuário e exiba a tabuada desse número de 1 a 10.

let number = 2;
for (i = 0; i <= 10; i++) {
    console.log(`${i} x ${number} = ${i * number}`);
}

// 8) Determine o número de elementos presentes em um array.

let vetor = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(`A quantidade de elementos presentes no Vetor é: ${vetor.length}`);

// 9) Usando o laço for, percorra um array de 3 elementos e faça a soma dos valores, e exiba o resultado final para o usuário.

let vetorTres = [7, 1, 2];
let somaTres = 0
for (i = 0; i < (vetorTres.length); i++) {
    somaTres += vetorTres[i]
}

console.log(`A soma dos números informados no Vetor é: ${somaTres}`);

// 10) Faça uma função que calcule a área de um triângulo. Fórmula: (base x altura) / 2;

function areaTriangulo(b, h) {
    return (b * h / 2)
}

let base = 5;
let altura = 2;

console.log(`A área do triângulo com base ${base} e altura ${altura} é: `, areaTriangulo(base, altura));