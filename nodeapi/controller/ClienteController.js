const Cliente = require("../model/entidades/Cliente");

// Create a new instance of the Cliente class
const cliente = new Cliente();

class ClienteController {
  async obterTodos(req, res) {
    try {
      const lista = await cliente.obterTodos();
      res.status(200).json(lista);
    } catch (error) {
      console.error('Error fetching clientes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  async adicionar(req, res) {
    try {
      // Assuming your Cliente class has a method like adicionarCliente
      const novoCliente = await cliente.adicionarCliente(req.body);
      res.status(200).json(novoCliente);
    } catch (error) {
      console.error('Error adding cliente:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = ClienteController;
