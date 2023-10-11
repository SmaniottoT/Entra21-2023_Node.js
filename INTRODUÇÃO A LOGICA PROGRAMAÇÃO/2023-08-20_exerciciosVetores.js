// 1) Crie um novo array contendo todos os elementos de dois arrays existentes.

let array1 = [0, 1, 2, 3];
let array2 = [4, 5, 6, 7];

console.log("Novo array: ", array1.concat(array2));

// 2) Determine o número de elementos presentes em um array.

console.log("Comprimento array 1: ", array1.length);

// 3) Adicione um elemento no final de um array.
array1.push(4);
console.log("Acréscimo do número 4 ao array 1: ", array1);

// 4) Adicione um elemento no início de um array.

array2.splice(0, 0, 3);
console.log("Array2 após inserção do número 3 na posição 0: ", array2);

// let elementoNovo = 3;
// let indice = 0;

// array2.splice(indice, 0, elementoNovo);
// console.log("Array2 após inserção do número 3 na posição 0: ", array2);


// array2.unshift(3);
// console.log("Array2 após inserção do número 3 na posição 0: ", array2);

// 5) Remova o primeiro elemento de um array.

array1.splice(0, 1);
console.log("Removendo o primeiro elemento do array1:", array1);

// 6) Remova o último elemento de um array.

array1.pop()
console.log("Removendo o último elemento do array1:", array1);

// 7) Usando o laço for, percorra um array de 3 elementos e faça a subtração dos valores,
//  e exiba o resultado final para o usuário. 

let sub = array1[0]
console.log(array1);
for (let i = 1; i < (array1.length); i++) {
    sub -= array1[i]
}
console.log("Resultado da subtração dos três elementos do array1:", sub);

// 8) Usando o for, filtre qual o maior número de um array de 5 elementos.
// NÃO USEI FOR
// let array8 = [1, 2, 3, 4, 5];
// array8.sort((a, b) => b - a);
// console.log("O maior número do array é: ", array8[0]);


let i = 0
let verificadorMaior = array8[i];

for (i; i < array8.length; i++) {
   
    if (verificadorMaior < array8[i]) {
       verificadorMaior = array8[i];
    }console.log(verificadorMaior);
}

console.log("O maior valor é: ", verificadorMaior);

// 9) Usando o for, filtre qual o menor número de um array de 5 elementos.
// NÃO USEI FOR
// array9 = [1, 2, 3, 4, 5];
// array9.sort((a, b) => a - b);
// console.log("O maior número do array é: ", array9[0]);

let verificadorMenor = array8[i];

for (i; i < array8.length; i++) {
   
    if (verificadorMenor > array8[i]) {
       verificadorMenor = array8[i];
    }console.log(verificadorMenor);
}

console.log("O menor valor é: ", verificadorMenor);

// 10) Usando o laço for, percorra um array de 4 elementos e calcule a multiplicação de todos os valores, 
// exibindo o resultado final para o usuário.

array10 = [2, 4, 6, 8];
let multi = 1;

for (let i = 0; i < (array10.length); i++) {
    multi *= array10[i];
}
console.log("Resultado da multiplicação dos quatro elementos do array10:", multi);

// 11) Crie um array com 6 números. Usando um loop for, calcule a média dos números presentes no array e mostre o resultado.

let array11 = [1, 2, 3, 4, 5, 6];
let soma = 0
for (i = 0; i < (array11.length); i++) {
    soma += array11[i];
}
let media = soma / (array11.length);
console.log("Média do array11:", media);

// 12) Dado um array com 8 elementos, solicite ao usuário um número. 
// Use um loop for para verificar se o número está presente no array e exiba uma mensagem apropriada.
// FICA REPETINDO A SAÍDA.
// let array12 = [1, 2, 3, 4, 5, 6, 7, 8];
// let numero = 12;

// for (let i = 0; i <= (array12.length); i++) {
//     if (numero == array12[i]) {
//         console.log(`O número ${numero} pertence ao array12.`);
//     } else {
//         console.log(`O número ${numero} não pertence ao array12.`);
//     }
// }
let array12 = [1, 2, 3, 4, 5, 6, 7, 8];
let numero = 9;
let existe = false;

for (let i = 0; i < (array12.length); i++) {
    if (numero == array12[i]) {
        existe = true
        break;
    } 
}
if (existe){
console.log(`O número ${numero} pertence ao array12.`);
} else { 
    console.log(`O número ${numero} não pertence ao array12.`);
}

// 13) Dado um array com 10 elementos contendo valores 0 e 1, 
// conte quantas vezes o valor 1 aparece no array usando um loop for.

let array13 = [0, 1, 0, 1, 1, 0, 0, 0, 1, 0];
let igualZero = 0;
let igualUm = 0;

for (let i = 0; i < (array13.length); i++) {
    if (array13[i] == 0) {
        igualZero++

    } else {
        igualUm++
     }
}
console.log("Contador Zero:", igualZero, "Contador Um:", igualUm);

// 14) Faça um programa em javascript que leia um vetor de seis elementos numéricos inteiros, 
// calcule e mostre:

let array14 = [1, 2, 3, 4, 5, 6];

// a) A quantidade de números pares;

let count1 = 0;
for (let i = 0; i < array14.length; i++) {
    if (array14[i] % 2 == 0) {
        count1++
    }
}
console.log("A quantidade de números pares é:", count1);

// b) Quais os números pares;

let even = [];
for (let i = 0; i < array14.length; i++) {
        if (array14[i] % 2 == 0) {
           even.push(array14[i])
        } 
    }
    console.log("Os números pares do array14 são:", even);

// c) A quantidade de números ímpares;

let count2 = 0;
for (let i = 0; i < array14.length; i++) {
    if (array14[i] % 2 !== 0) {
        count2++
    }
}
console.log("A quantidade de números ímpares é:", count2);

// d) Quais os números ímpares;

let odd = [];
for (let i = 0; i < array14.length; i++) {
        if (array14[i] % 2 !== 0) {
           odd.push(array14[i])
        } 
    }
    console.log("Os números pares do array14 são:", odd);