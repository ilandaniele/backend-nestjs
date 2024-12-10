'use strict'; 

module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Field must be a valid email'
        }
      },
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: "users",
    timestamps: false
  });

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Object, {foreignKey: 'buyer_id', as: 'objects' });
  };

  return User;
};


// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../config/db');

/* class User extends Model {}

User.init(
  {
    
  },
  {
    sequelize,
    tableName: 'users',
    modelName: 'user',
    timestamps: false, // Excluye createdAt y updatedAt
  }
); */


// module.exports = User;
