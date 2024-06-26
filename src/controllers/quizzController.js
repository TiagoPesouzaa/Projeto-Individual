var quizzModel = require("../models/quizzModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var score = req.body.scoreServer;
    var usuarioId = req.body.usuarioIdServer;
    // var empresaId = req.body.empresaServer;
    // var cpf = req.body.cpfServer;


    // Faça as validações dos valores
    if (score == undefined) {
        res.status(400).send("Seu score está undefined!");
    } else if (usuarioId == undefined) {
        res.status(400).send("Seu usuarioId está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizzModel.cadastrar(score, usuarioId)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}