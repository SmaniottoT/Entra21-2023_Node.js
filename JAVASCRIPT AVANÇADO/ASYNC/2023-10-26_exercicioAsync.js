// 1) Calcular a media: 

const array = [0, 2, 4, 6, 8, 10];

function calcularMedia(array) {
    return new Promise((resolve, reject) => {
        let sum = array.reduce((total, value) => total + value, 0);

        let avarage = sum / array.length;

        if (isNaN(avarage)) {
            reject('Não foi possível calcular a média.');
        } else {
            resolve(avarage);
        }
    });
}

async function imprimir() {
    try {
        const mediaCalculada = await calcularMedia(array);
        console.log(mediaCalculada);
    } catch (erro) {
        console.error(erro);
    }
}

imprimir();

// 2) Filtrar números pares

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function selecionarPares(array) {
    return new Promise((resolve, reject) => {
        let pares = array.filter((n) => n % 2 === 0);
        if (pares.length <= 0) {
            reject('Não existem números pares no array.')
        } else {
            resolve(pares);
        }
    });
}

async function imprimir2(array) {
    try {
        const paresSelecionados = await selecionarPares(array);
        console.log(paresSelecionados);
    } catch (erro) {
        console.error(erro);
    }
}

imprimir2(array2);

// 3) Imprimir os dados dos usuários e telefone

function obterUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'Tamires',
                dataNascimento: new Date(),
            });
        }, 1000);
    });
}

function obterTelefone(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve({
                numero: "99613-5190",
                ddd: 47,
            });
        }, 2000);
    });
}

async function imprimir3() {
    try {
        const obterUsuarioResult = await obterUsuario();
        console.log('Nome: ' + obterUsuarioResult.nome);
        const obterTelefoneResult = await obterTelefone(obterUsuarioResult);
        console.log('Telefone: (' + obterTelefoneResult.ddd + ')' + obterTelefoneResult.numero);
    } catch (erro) {
        console.error(erro);
    }
}

imprimir3();

// 4) Simule uma busca de dados de uma API

function buscarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = {
                nome: 'Usuário Exemplo',
                idade: 25
            };
            if (Math.random() < 0.2) {
                reject(new Error('Erro ao obter dados da API.'))
            } else {
                resolve(dados);
            }
        }, 2000);
    });
}

async function processarDados() {
    try {
        const dadosProcessados = await buscarDados();
        console.log(dadosProcessados);
    } catch (erro) {
        console.error(erro);
    }
}

processarDados();