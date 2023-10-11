let temperaturas = [
    [27, 29, 30, 24],
    [25, 27, 28, 22],
    [21, 23, 25, 20]
]
let valores = "";


for (let L = 0; L <= 2; L++) {
    for (let C = 0; C <= 3; C++) {
        valores += temperaturas[L][C] + '\n'
    }
}
console.log(valores);