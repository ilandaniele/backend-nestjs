const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');
const db = {};

db.connection = new Sequelize(config.database, config.username, config.password, config);

// Vinculamos a nuestro modelos a BD
db.User = require('../models/User')(db.connection, DataTypes); //llama al inicializador de User que requiere como parametros sequelize y datatypes.
db.Object = require('../models/Object')(db.connection, DataTypes);

db.User.associate(db); // nuestro archivo DB tiene los modelos user y object
db.Object.associate(db);

module.exports = db;