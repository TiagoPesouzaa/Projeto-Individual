var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});



router.get("/buscarMediaGeral/:idUsuario", function (req, res) {
    medidaController.buscarMediaGeral(req, res);
});


router.get("/buscarQuantidadePessoas", function (req, res) {
    medidaController.buscarQuantidadePessoas(req, res);
});

router.get("/buscarPessoaComMaisAcertos", function (req, res) {
    medidaController.buscarPessoaComMaisAcertos(req, res);
});



// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

module.exports = router;