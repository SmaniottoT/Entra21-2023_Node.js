// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Operação concluída!');
//     }, 1000);
// });


// myPromise.then((resultado) => {
//     console.log(resultado);
// });


// exemplo callback
// function somaNumeros (sucesso, erro) {
//     let resultado = 1+1;
//     if (resultado == 2) {
//         sucesso()
//     } else {
//         erro()
//     }
// }

// function sucesso() {
//     console.log('Acertou, resultado = 2.');
// }

// function erro() {
//     console.log('Errou, resultado deve ser = 2.');
// }

// somaNumeros(sucesso,erro);

// exemplo promise

// let promise = new Promise((resolve, reject) => {
//     let soma = 1 + 1;

//     if (soma == 2) {
//         resolve("sucess")
//     } else {
//         reject("failed")
//     }
// });

// promise.then((resultado) => {
//     console.log(resultado);
// }).catch((erro) => {
//     console.error(erro);
// });


//  exemplo 2 callback

// const melhorDev = 'Tamires';

// function quemEMelhor(callback, erroCallback) {
//     if (melhorDev != 'Tamires' && melhorDev != 'Leonardo') {
//         erroCallback({
//             name: 'Está errado!',
//             message: melhorDev + '? Sério?'
//         });
//     } else {
//         callback({
//             name: melhorDev,
//             message: 'Somos os melhores!'
//         });
//     }
// }

// quemEMelhor((result) => {
//     console.log(result.name + '? Uhuu ' + result.message);
// }, (erro) => {
//     console.error(erro.name + ' ' + erro.message);
// });

// exemplo 2 promise
const melhorDev2 = 'Tamires';

const promise = new Promise((resolve, reject) => {

    if (melhorDev2 != 'Tamires' && melhorDev2 != 'Leonardo') {
        reject({
            name: 'Está errado!',
            message: melhorDev2 + '? Sério?'
        });
    } else {
        resolve({
            name: melhorDev2,
            message: 'Somos os melhores!'
        });
    }
});

promise.then((result) => {
    console.log(result.name + '? Uhuu ' + result.message);
}).catch((erro) => {
    console.error(erro.name + ' ' + erro.message);
});