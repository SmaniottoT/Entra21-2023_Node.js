let nome = "Tamires";
let idade = 26;

if (idade >= 18) {
    console.log(nome,", como você tem ", idade,"anos, é maior de idade e portanto, pode beber álcool.");
} else {
    console.log(nome,", como você tem ", idade,"anos, é menor de idade e portanto, não pode beber álcool.");
}


let n1 = 30;
let n2 = 80;
let n3 = 10;

if (n1>n2 && n1>n3){
    console.log("O maior valor entre os três informados é o número", n1);
}else if (n2>n1 && n2>n3){
    console.log("O maior valor entre os três informados é o número", n2);
} else if (n3>n1 && n3>n2) {
    console.log("O maior valor entre os três informados é o número", n3);
} else {
    console.log("Atenção, não há maior valor entre os valores informados.");
}


// if (n1>=n2 && n1>=n3){
//     console.log("O maior valor entre os três informados é o número", n1);
// }else if (n2>=n3){
//     console.log("O maior valor entre os três informados é o número", n2);
// } else  {
//     console.log("O maior valor entre os três informados é o número", n3);
// }


// console.log("O maior valor entre os três informados é o número",Math.max(n1,n2,n3));