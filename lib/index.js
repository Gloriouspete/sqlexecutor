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
    this.call = this.call.bind(this)
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
        db.release(); // Release the connection back to the pool
      }
    }
  }
  static bundle(config) {
    const pool = mysql.createPool(this.config);
    return async (query, params) => {
        try {
            const [results] = await pool.query(query, params);
            return results;
        } catch (error) {
            throw error; // Re-throw the error to be handled by the caller
        }
    };
}

  async call(query, params) {
    return this.executeQuery(query, params);
  }

  async __call(query, params) {
    return this.executeQuery(query, params);
  }
}

module.exports = Executor;
