// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../config/db');
// const User = require('./User');

'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Object = sequelize.define('Object', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING, // URL ruta o imagen
      allowNull: true, // Opcional si puede ser null
      field: 'image_url',
    },
    description: {
      type: DataTypes.TEXT,  // Para descripciones largas
      allowNull: true,        
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,      // Valor predeterminado
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Precio con dos decimales
      allowNull: false,              
    },
    /* buyer_id: {
      type: DataTypes.UUID,         // Relación con la tabla Users
      allowNull: true,                 // Puede ser null si no está comprado
      references: {
        model: models.User,                   // Relación con el modelo User
        key: 'id',
      },
    }, */
  }, {
    tableName: "objects",
    timestamps: false,
  });

  Object.associate = function(models) {
    // associations can be defined here
    Object.belongsTo(models.User, { as: 'user' });
  };

  return Object;
};


// class Object extends Model {}

/* Object.init(
  {
    
  },
  {
    sequelize,
    tableName: 'objects',
    modelName: 'object',
    timestamps: false,
  }
); */

// module.exports = Object;
