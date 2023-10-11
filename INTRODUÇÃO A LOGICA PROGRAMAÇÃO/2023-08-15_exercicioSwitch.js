let n1 = 10;
let n2 = 2;

let operacao = "+";

switch (operacao) {
    case "+":
        console.log(n1+n2);
        break;
    case "-":
        console.log(n1-n2);
        break;
    case "/":
        console.log(n1/n2);
        break;
    case "*":
        console.log(n1*n2);
        break;
    default:
        console.log("Operação matemática não reconhecida.");
}


let nota = 83

// switch (true) {
//     case nota <= 100 && nota >= 90:
//         console.log("Nota A");
//         break;
//     case nota < 90 && nota >= 80:
//         console.log("Nota B");
//         break;
//     case nota < 80 && nota >= 70:
//         console.log("Nota C");
//         break;
//     case nota < 70 && nota >= 60:
//         console.log("Nota D");
//         break;
//     case nota < 60 && nota >= 0:
//         console.log("Nota F");
//         break;
//     default:
//         console.log("Nota incompatível com o sistema de avaliação.");
// }
switch (true) {
    case nota >= 90:
        console.log("Nota A");
        break;
    case nota >= 80:
        console.log("Nota B");
        break;
    case nota >= 70:
        console.log("Nota C");
        break;
    case nota >= 60:
        console.log("Nota D");
        break;
    case nota >= 0:
        console.log("Nota F");
        break;
    default:
        console.log("Nota incompatível com o sistema de avaliação.");
}