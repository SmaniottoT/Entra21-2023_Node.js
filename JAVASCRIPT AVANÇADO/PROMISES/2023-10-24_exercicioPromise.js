// // 1) Calcular a media: 

// const array = [0, 2, 4, 6, 8, 10];

// const promise = new Promise((resolve, reject) => {
//     let sum = array.reduce((total, value) => total + value, 0);

//     let avarage = sum / array.length;

//     if (isNaN(avarage)) {
//         reject('Não foi possível calcular a média.');
//     } else {
//         resolve(avarage);
//     }
// });

// promise.then((result) => {
//     console.log('O resultado é', result);
// }).catch((erro) => {
//     console.error(erro);
// }
// );

// // 2) Filtrar números pares

// const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const promise2 = new Promise((resolve, reject) => {
//     let pares = array2.filter((n) => n % 2 === 0);
//     if (pares.length >= 0) {
//         reject('Não existem números pares no array.')
//     } else {
//         resolve(pares);
//     }
// });

// promise2.then((result) => {
//     console.log('Os números pares são: ', result);
// }).catch((erro) => {
//     console.error(erro);
// });

// 3) Imprimir os dados dos usuários e telefone

function obterUsuario(usuario) {
    setTimeout(function () {
        return usuario(null, {
            id: 1,
            nome: 'Tamires',
            dataNascimento: new Date(),
        });
    }, 1000);
}

function obterTelefone(idUsuario, telefone) {
    setTimeout(function () {
        return telefone(null, {
            numero: "99613-5190",
            ddd: 47,
        });
    }, 2000);
}


const promise3 = new Promise((result, reject) => {
    obterUsuario(function (erroUsuario, usuario) {
        if (erroUsuario) {
            reject("Erro ao obter usuário" + erroUsuario);
            return
        }
        obterTelefone(usuario.id, function (erroTelefone, telefone) {
            if (erroTelefone) {
                reject("Erro ao obter telefone:" + erroTelefone);
                return
            }
            result("Nome: " + usuario.nome + " | Telefone: (" + telefone.ddd + ") " + telefone.numero);

        });
    });
});


promise3.then((result) => {
    console.log(result);
}
).catch((erro) => {
    console.error(erro);
});


// correção Fernanda
// function obterUsuario() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             return resolve({
//                 id: 1,
//                 nome: 'Tamires',
//                 dataNascimento: new Date(),
//             });
//         }, 1000);
//     });
// }

// function obterTelefone(idUsuario) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             return resolve({
//                 numero: "99613-5190",
//                 ddd: 47,
//             });
//         }, 2000);
//     });
// }

// const usuarioPromise = obterUsuario();

// usuarioPromise.then((usuario) => {
//     return obterTelefone(usuario.id)
//         .then((cadastro) => {
//             return {
//                 user: {
//                     nome: usuario.nome,
//                     telefone: cadastro.numero,
//                 },
//             };
//         });
// })
// .then((resultado) => {
//     console.log('Sucesso', resultado);
// })
// .catch ((error) => {
//     console.error('Falha na busca do cadastro.', error);
// });