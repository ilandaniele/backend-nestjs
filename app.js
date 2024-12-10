const express = require('express');
const app = express();
const { sequelize } = require('./database/db');
// require('./models/associations');

// Sincroniza la base de datos y arranca el servidor
const PORT = process.env.PORT || 4000;

app.use(express.json()); // Middleware para analizar JSON

const objectRoutes = require('./routes/objectRoutes'); // Rutas para objetos
const userRoutes = require('./routes/userRoutes'); // Rutas para usuarios

// Rutas
app.use('/api/objects', objectRoutes); // Todas las rutas para objetos
app.use('/api/users', userRoutes); // Todas las rutas para usuarios


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    sequelize.sync().then(() => {
        console.log('Connected to database');
    }).catch(error => 
        console.error('Failed to sync database:', error)
    );
});
    


