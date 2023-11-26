const mysql = require("mysql2/promise");

class DataBase {
  constructor() {
    this.pool = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "teste",
      database: "aula",
    });
  }

  async ExecutaComando(sql, params = []) {
    let connection;
    try {
      connection = await this.pool.getConnection();
      const [rows] = await connection.query(sql, params);
      return rows;
    } finally {
      if (connection) {
        connection.release();
      }
    }
  }
}

module.exports = DataBase;
