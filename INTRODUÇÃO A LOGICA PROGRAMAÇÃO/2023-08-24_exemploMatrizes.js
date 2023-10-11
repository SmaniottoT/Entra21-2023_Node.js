let array = [
    [0, 1, 2],
    [3, 4, 5]
]

let valores = "";

for (let L = 0; L <= 1; L++) {
    for (let C = 0; C <= 2; C++) {
        valores += array[L][C] + '\n'
    }
}
console.log(valores);