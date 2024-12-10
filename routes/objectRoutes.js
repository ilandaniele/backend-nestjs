const express = require('express');
const router = express.Router();
const objectController = require('../controllers/ObjectController');

// Route to obtain all objects
router.get('/', objectController.getObjects);

// Route to obtain objects and it's buyers
router.get('/users', objectController.getObjectsWithUsers);

// Route to obtain an object by ID
router.get('/:id', objectController.getObjectById);

// Route to create a new object
router.post('/', objectController.createObject);

// Route to update an object
router.put('/:id', objectController.updateObject);

// Route to delete an object
router.delete('/:id', objectController.deleteObject);

module.exports = router;
