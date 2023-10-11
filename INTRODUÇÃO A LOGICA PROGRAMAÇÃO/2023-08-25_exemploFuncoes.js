// Com argumento

function saudacao(nome) {
    return "Olá, " + nome + "!";
}
let mensagem = saudacao("João");
console.log(mensagem);

// Sem argumento

function saudacao2() {
    return "Olá, Fernanda!"
}
console.log(saudacao2());

// Soma

function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2,4));


// Soma com impressão
function soma2(a, b) {
    console.log(a + b);
}

soma2(10, 5);



