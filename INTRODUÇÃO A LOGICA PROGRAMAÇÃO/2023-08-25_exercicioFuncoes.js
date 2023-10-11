// 1) Declarar a função e o que ela vai fazer. Neste exemplo, queremos que ela imprima algum texto.  
function imprima1() {
    console.log("Imprima algum texto");
}
imprima1();

// 2) Chamar a função em seguida e passar um texto para que ela possa imprimir.  
function imprima2(texto) {
    console.log(texto);
}
imprima2("Um texto para que ela possa imprimir")

// 3) Calcular a média de 2 números e imprimir no console; 
function media(n1, n2) {
    return (n1 + n2) / 2
}
let resultado3 = media (8,10);
console.log(`A média é: ${resultado3}`);

// 4) Verificar se um número é positivo, negativo ou zero; 
function sinal(numero4) {
    let resposta = "";
    if (numero4 > 0) {
        resposta = "Positivo."
    } else if (numero4 < 0) {
        resposta = "Negativo."
    } else {
        resposta = "Neutro."
    }
    return resposta
}

let numero4 = -5
let resposta = sinal(numero4)


console.log(`O número ${numero4} é ${resposta}`);

// 5) Faça uma função que calcule a área de um triângulo : (base x altura) / 2


function areaTriangulo(b, h) {
    let area = b * h / 2
    console.log(area);

}

areaTriangulo(6, 5);

// 6) Crie um programa que faça a conversão de unidades de tempo, ou seja, o usuário vai informar quantidade de dias,
// horas, minutos e segundos e você deve calcular tudo em segundos e retornar o valor para o usuário.

function conversao(dias, horas, minutos, segundos) {
    totalSegundos = dias * (24 * 60 * 60) + horas * (60 * 60) + minutos * 60 + segundos
    console.log(totalSegundos);
}

conversao(7, 8, 2, 40);

// 7) Desenvolva um programa que obtenha do usuário um número inteiro de 4 dígitos e exiba a soma dos dígitos do número.
// Por exemplo, se o usuário fornecer o número 3141, então seu programa deve exibir o número 9 (3 + 1 + 4 + 1).

function somaDigitos(aaa) {
    let primeiroNumero = Number(String(aaa)[0]);
    let segundoNumero = Number(String(aaa)[1]);
    let terceiroNumero = Number(String(aaa)[2]);
    let quartoNumero = Number(String(aaa)[3]);
    let somaNumero = primeiroNumero + segundoNumero + terceiroNumero + quartoNumero
    console.log(somaNumero);
}

somaDigitos(4444);


// function calcularSomaDigitos(numero) {  //Cria uma funçao dependente de um numero
//     let soma = 0;                       // Criamos uma variavel para fazer a soma dos quatro digitos 
//     let numeroStr = numero.toString();  // Convertemos o valor de numero de inteiro para String

//     for (let i = 0; i < numeroStr.length; i++) {         // Criamos um loop para somar os valores dos digitos conforme i++
//         soma += parseInt(numeroStr[i]);
//     }

//     return soma;                                         // Sempre lembrando de retornar o resultado 
// }

// let numeroInteiro = 2121;                     // O numero q sera inserido pelo usuario (deve ser de 4 digitos)
// numeroInteiro = parseInt(numeroInteiro);      // Converte o numero escolhido para numero inteiro
// console.log(calcularSomaDigitos(numeroInteiro));

// // Verificaçao 
// if (isNaN(numeroInteiro) || numeroInteiro < 1000 || numeroInteiro > 9999) {           //Se o numero escolhido pelo usuario nao for um numero ou for menor que 1000 ou maior que 9999
//     console.log("Insira um número inteiro de 4 dígitos válido.");          //Causa uma mensagem de erro
// } else {
//     let somaDosDigitos = calcularSomaDigitos(numeroInteiro);                           //A soma dos digitos executa a funcao calcularSomaDigitos especificando numeroInteiro como atributo
//     console.log('A soma dos dígitos de' , numeroInteiro, 'é', somaDosDigitos);
// }


// 8) Escreva um programa Javascript que peça para o usuário uma letra do alfabeto.
// Se o usuário entrar com as letras a, e, i, o ou u, o programa deve exibir uma mensagem dizendo que a letra é uma vogal.
// Caso contrário, o programa deve exibir a mensagem informando que a letra é uma consoante.

function alfabeto(letra) {
    let verificacao = ""
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        verificacao = "Vogal."
    } else if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
        verificacao = "Vogal."
    } else {
        verificacao = "Consoante."
    }
    return verificacao
}

console.log(alfabeto("a"));

// 9) Um determinado zoológico estipula o valor da entrada baseado na idade do visitante.
// Visitantes com até dois anos de idade não precisam pagar. Crianças entre 3 e 12 anos de idade pagam R$ 14.00.
// Idosos com 65 anos ou mais pagam R$ 18.00. Todos os demais pagam R$ 23.00.
// Crie um programa que inicia lendo as idades, uma por uma, de um grupo de pessoas.
// O usuário deve entrar uma linha em branco para indicar que não há mais pessoas no grupo.
// Depois disso, seu programa deve exibir uma mensagem informando o preço total de todas as entradas para o grupo.
// O valor deve ser exibido com duas casas decimais.

let idade = [0, 10, 25, 70]


function valorEntrada(idade) {
    let valor = 0;
    let valorBebe = 0;
    let valorCrianca = 14;
    let valorAdulto = 23;
    let valorIdoso = 18;
    for (i = 0; i < idade.length; i++) {

        if (idade[i] < 3) {
            valor += valorBebe
        } else if (idade[i] <= 12) {
            valor += valorCrianca
        } else if (idade[i] >= 65) {
            valor += valorIdoso
        } else {
            valor += valorAdulto
        }
    }
    return valor
}
console.log("O valor total a pagar é:", valorEntrada(idade).toFixed(2));

// 10) Palavras como primeiro, segundo e terceiro são chamadas de números ordinais.
//  Neste exercício, você deve escrever uma função que recebe um inteiro como seu único parâmetro e retorna uma string
// contendo o número ordinal em português como seu único resultado. Sua função deve lidar com números inteiros entre
// 1 e 12 (inclusive). Ela deve retornar uma string vazia se um valor fora desse intervalo for fornecido como um parâmetro.
// Inclua um programa principal que demonstra sua função exibindo cada inteiro de 1 a 12 e seu respectivo número ordinal.

function ordinais(numero10) {
    if (numero10 === 1) {
        return "primeiro";
    } else if (numero10 === 2) {
        return "segundo";
    } else if (numero10 === 3) {
        return "terceiro";
    } else if (numero10 === 4) {
        return "quarto";
    } else if (numero10 === 5) {
        return "quinto";
    } else if (numero10 === 6) {
        return "sexto";
    } else if (numero10 === 7) {
        return "sétimo";
    } else if (numero10 === 8) {
        return "oitavo";
    } else if (numero10 === 9) {
        return "nono";
    } else if (numero10 === 10) {
        return "décimo";
    } else if (numero10 === 11) {
        return "décimo primeiro";
    } else if (numero10 === 12) {
        return "décimo segundo";
    } else {
        return "";
    }
}

console.log(ordinais(7));