var meuCarro = new Object();
meuCarro.fabricacao = 'Ford';
meuCarro.modelo = 'Mustang';
meuCarro.ano = 1969;


console.log(meuCarro);
console.log(meuCarro.modelo);

const carro = {
    marca: "Peugeot",
    modelo: "206",
    cor: "Prata",
    ano: 2014,
    acelerar: function () {
        console.log('acelerando...');
    }
}

carro.acelerar();
