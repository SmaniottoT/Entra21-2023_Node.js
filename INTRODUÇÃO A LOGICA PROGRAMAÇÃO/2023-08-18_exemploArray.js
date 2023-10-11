// Criando um array:

let lista = [10, 2, 8];

let primeiroElemento = lista[0];
console.log(primeiroElemento);

let segundoElemento = lista[1];
console.log(segundoElemento);

let terceiroElemento = lista[2];
console.log(terceiroElemento);

// Inserção ao fim:

lista.push(4);
console.log("Inserção resulta em lista : ", lista);

// Remoção último:

lista.pop();
console.log(lista);

// Pesquisa:

let indice2 = lista.indexOf(2);
console.log('Índice do 2: ' + indice2);

// Ordenação:

console.log("Crescente", lista.sort((a, b) => a - b));

console.log("Decrescente", lista.sort((a, b) => b - a));

// Concatenação:

let lista2 = [20, 3, 67];

console.log("Arrays concatenados:", lista.concat(lista2));

// Tamanho:

console.log("Lista tem tamanho: ", lista.length);

// Modificação:

console.log(lista);
lista[0] = 88;
console.log(lista);

// Remoção qualquer índice:

let listaRemocao = [50, 2, 3, 45, 8];
let indiceRemocao = 2;
console.log(listaRemocao.splice(indiceRemocao, 1));