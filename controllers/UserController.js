// const Object = require('../database/models/Object');
const {User, Object} = require('../database/db');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll(); // Consulta todos los usuarios
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Could not get users: ' + error });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id); // Busca un usuario por ID
    if (!user) {
      return res.status(404).json({ error: 'User ' + req.params.id + ' not found: ' + error });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Could not get user: ' + error});
  }
};

exports.createUser = async (req, res) => {
  try {
    const { username, email, password_hash } = req.body;
    const newUser = await User.create({ // Crear un nuevo usuario
      username,
      email,
      password_hash,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user: ' + error});
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User ' + req.params.id + ' not found: ' + error });
    }
    await user.update(req.body); // Actualizar el usuario
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error udpating user: ' + error});
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User ' + req.params.id + ' not found: ' + error });
    }
    await user.destroy(); // Eliminar el usuario
    res.json({ message: 'User successfully deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user: ' + error });
  }
};

/* exports.getUserObjects = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        {
          model: Object,
          as: 'objects',
          attributes: ['id', 'title', 'price', 'available'],
        },
      ]
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user objects: ' + error});
  }
}; */
