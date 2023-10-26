// 1) Calcular a media: 

const array = [0, 2, 4, 6, 8, 10];

const calcularMedia = (numeros, callback) => {
    let resultado = callback(numeros);
    console.log(resultado);
}

const callback = (numeros) => {
    let sum = numeros.reduce((total, value) => total + value, 0);
    let avarage = sum / numeros.length;
    return avarage;
};

calcularMedia(array, callback);

// 2) Filtrar números pares

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filtrarPares = (numeros, callback) => {
    let pares = callback(numeros);
    console.log(pares);
}

const callback2 = (numeros) => {
    let pares = numeros.filter((n) => n % 2 === 0);
    return pares
}

filtrarPares(array2, callback2);