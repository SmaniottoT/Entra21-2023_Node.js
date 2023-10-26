// 3) Imprimir os dados dos usuários e telefone

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Tamires',
            dataNascimento: new Date(),
        });
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
            numero: "99613-5190",
            ddd: 47,
        });
    }, 2000);
}


function imprimir() {
    obterUsuario(function (erroUsuario, usuario) {
        if (erroUsuario) {
            console.error("Erro ao obter usuário" + erroUsuario);
        } else {
            console.log("Nome: " + usuario.nome);

            obterTelefone(usuario.id, function (erroTelefone, telefone) {
                if (erroTelefone) {
                    console.error("Erro ao obter telefone:" + erroTelefone);
                } else {
                    console.log("Telefone: (" + telefone.ddd + ") " + telefone.numero);
                }
            });
        };
    });
}



imprimir();