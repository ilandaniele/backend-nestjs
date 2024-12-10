const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// router.get('/:id/objects', userController.getUserObjects);

// Ruta para obtener todos los usuarios
router.get('/', userController.getUsers);

// Ruta para obtener un usuario por ID
router.get('/:id', userController.getUserById);

// Ruta para crear un nuevo usuario
router.post('/', userController.createUser);

// Ruta para actualizar un usuario
router.put('/:id', userController.updateUser);

// Ruta para eliminar un usuario
router.delete('/:id', userController.deleteUser);

module.exports = router;
