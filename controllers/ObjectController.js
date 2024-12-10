// const Object = require('../database/models/Object');
// const User = require('../database/models/User');

const {User, Object} = require('../database/db');

exports.getObjects = async (req, res) => {
  try {
    const objects = await Object.findAll(); // Obtener todos los objetos desde la base de datos
    res.json(objects);
  } catch (error) {
    res.status(500).json({ error: 'Could not get objects: ' + error });
  }
};

exports.getObjectById = async (req, res) => {
  try {
    const object = await Object.findByPk(req.params.id);
    if (!object) {
      return res.status(404).json({ error: 'Object ' + req.params.id + ' not found: ' + error });
    }
    res.json(object);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch object: ' + error });
  }
};

exports.createObject = async (req, res) => {
  try {
    const { title, description, price, image, available } = req.body;
    const newObject = await Object.create({
      title,
      description,
      price,
      image,
      available,
    });
    res.status(201).json(newObject);
  } catch (error) {
    res.status(500).json({ error: 'Error creating object: ' + error });
  }
};

exports.updateObject = async (req, res) => {
  try {
    const object = await Object.findByPk(req.params.id);
    if (!object) {
      return res.status(404).json({ error: 'Object ' + req.params.id + ' not found: ' + error });
    }
    await object.update(req.body); // Actualizar el objeto
    res.json(object);
  } catch (error) {
    res.status(500).json({ error: 'Error updating object: ' + error });
  }
};

exports.deleteObject = async (req, res) => {
  try {
    const object = await Object.findByPk(req.params.id);
    if (!object) {
      return res.status(404).json({ error: 'Object ' + req.params.id + ' not found: ' + error });
    }
    await object.destroy(); // Eliminar el objeto
    res.json({ message: 'Object successfully deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting object ' + error });
  }
};

exports.getObjectsWithUsers = async (req, res) => {
  try {
    const objectsWithUsers = await Object.findAll({
      include: [{
        association: 'user',
        attributes: ['id', 'username', 'email'], // Selecciona solo columnas necesarias
        /* model: User,
        as: 'user', // Usa el alias definido en `Object.belongsTo` */
        required: false, // Realiza un LEFT JOIN (no requiere coincidencia)
      }],
    });
    res.json(objectsWithUsers);
  } catch (error) {
    res.status(500).json({ error: 'Error obtaining objects with users associated: ' + error});
  }
};
