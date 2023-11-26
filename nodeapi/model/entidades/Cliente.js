const DataBase = require("./database");

const database = new DataBase()

class Cliente {
  constructor(id, nome, email) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }
  async obterTodos(){
      //buscar o banco
    const clientes = await database.ExecutaComando('select * from cliente')
    return clientes
  }
  insert(cliente){

    
  }
}

module.exports = Cliente;
