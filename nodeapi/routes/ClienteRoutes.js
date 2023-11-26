const express = require("express");
const ClienteController = require("../controller/ClienteController");
const router = express.Router();
const clienteController = new ClienteController();

router.get("/cliente", clienteController.obterTodos); // Fix here
router.post("/cliente", clienteController.adicionar); // Fix here

module.exports = router;
