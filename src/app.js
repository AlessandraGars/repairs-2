import express from "express";
import { router as repairsRouter } from "./repairs/repairs.route.js";
import { userRouter } from "./users/users.route.js";
import dotenv from 'dotenv'; // Importa dotenv

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const app = express();

app.use(express.json());

// Rutas para reparaciones
app.use('/api/v1/repairs', repairsRouter);

// Rutas para usuarios
app.use('/api/v1/users', userRouter);

// Ruta para la raíz
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación!');
});

export default app;
