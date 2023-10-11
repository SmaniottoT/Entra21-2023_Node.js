// Exercício 1 Vetor

// let vetor = [100, 200, 300, 400, 500, 600]
// let i = 0

// for (i; i < vetor.length; i++) {
//     console.log('Índice ',i, 'Vetor', vetor[i] );
// }


// Exercício 2 Vetor


let vetor = [1, 2, 3, 4, 5, 6];


let vetorPar = vetor.filter((num) => num % 2 === 0);
let quantPar = vetorPar.length;
console.log('A quantidade de vetores pares é: ', quantPar);
for (let i=0; i < vetorPar.length; i++) {
        console.log('Vetor', vetorPar[i] );
}


let vetorImpar = vetor.filter((num) => num % 2 !== 0);
let quantImpar = vetorImpar.length;
console.log('A quantidade de vetores ímpares é: ', quantImpar);
for (let i=0; i < vetorImpar.length; i++) {
        console.log('Vetor', vetorImpar[i] );
}
