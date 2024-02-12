const mysql = require('mysql2/promise');

class Executor {
  constructor(config = {}) {
    const defaultConfig = {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'my_database',
      waitForConnections: true,
      connectionLimit: 20,
      queueLimit: 0,
      timezone: 'local',
      charset: 'utf8mb4',
      port: 3306
    };

    this.config = { ...defaultConfig, ...config };
    this.pool = mysql.createPool(this.config);

    this.executeQuery = this.executeQuery.bind(this);
  }

  async executeQuery(query, params) {
    let db;
    try {
      db = await this.pool.getConnection();
      const [results] = await db.query(query, params);
      return results;
    } catch (error) {
      throw error; // Re-throw the error to be handled by the caller
    } finally {
      if (db) {
        connection.release(); // Release the connection back to the pool
      }
    }
  }

  static createExecutor(config) {
    const pool = mysql.createPool(config);
    return async (query, params) => {
      let connection;
      try {
        connection = await pool.getConnection();
        const [results] = await connection.query(query, params);
        return results;
      } catch (error) {
        throw error; // Re-throw the error to be handled by the caller
      } finally {
        if (connection) {
          connection.release(); // Release the connection back to the pool
        }
      }
    };
  }

  async call(query, params) {
    return this.executeQuery(query, params);
  }
}

module.exports = Executor;
