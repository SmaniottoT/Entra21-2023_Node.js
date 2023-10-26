// função nomeada
function minhaFuncaoNomeada(nome) {

    console.log('1) Função', nome);
}
// execução
minhaFuncaoNomeada('nomeada');

// expressão de função - anônima

const anonima = function () {
    console.log('2) Função anônima');
}
// execução
anonima()

// função arrowFunction

// const arrowFunction = um => { --> funciona da mesma forma, nomeado a variável ao invés de '()'
// const arrowFunction = (um) => { --> funciona da mesma forma
const arrowFunction = (um) => {
    console.log('3) Função arrow', um);
}

arrowFunction();

let dois = arrowFunction;

console.log(dois);
console.log(dois('aaaa'));

// Callbacks

const saudar = (responder) => {
    const horaAtual = new Date().getHours();

    // const responder = (saudacao) => console.log(saudacao);

    if (horaAtual < 12) {
        return responder("Bom dia");
    } else if (horaAtual < 18) {
        return responder("Boa tarde");
    } else {
        return responder("Boa noite");
    }
};

// saudar();

const responderCallback = (saudacao) => console.log(saudacao);

saudar(responderCallback);


// Callback função nomeada

const saudar2 = function horaSaudacao(pCallback) {
    const horaAgora = new Date().getHours();
    if (horaAgora < 12) {
        return pCallback("Bom dia");
    } else if (horaAgora < 18) {
        return pCallback("Boa tarde");
    } else {
        return pCallback("Boa noite");
    }

}

const imprimeSaudacao = function imprime(saudacao) {
    console.log(saudacao);
}

saudar2(imprimeSaudacao);

// Exemplo callback 2:

const funcaoPrincipal = parametro => {
    const value = 77;

    parametro(value);
};

const callbackson = (number) => {
    console.log(number);
};

funcaoPrincipal(callbackson);

