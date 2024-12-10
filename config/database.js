require('dotenv').config();

module.exports = {
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "sequelize",
  port: process.env.DB_PORT || "4000",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",
  logging: console.log,
  define: {
    timestamps: false,

    // Genera claves foraneas de este tipo user_id en vez de userId
    // undescored: true
  }
}

/* const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: console.log // Habilita logs de SQL
  }
);

sequelize.authenticate()
  .then(() => console.log('Connected to PostgreSQL')) // AWS RDS
  .catch(error => console.error('Unable to connect to PostgreSQL:', error));

module.exports = sequelize;
 */