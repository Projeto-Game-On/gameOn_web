var express = require("express");
var router = express.Router();

var notaController = require("../controllers/notaController");

router.post("/cadastrarNota", function (req, res) {
    notaController.cadastrarNota(req, res);
});

module.exports = router;