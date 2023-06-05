var notaModels = require("../models/notaModel");

function cadastrarNota(req, res) {

    var idJogo = 1;
    var avaliacaoSk = req.body.avaliacaoServer

    if (avaliacaoSk == undefined) {
        res.status(400).send("Sua nota está indefinida");
    }
    else {
        notaModels.cadastrarNota(idJogo, avaliacaoSk)

            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro de Nota! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarNota
}