import "dotenv/config";
import express from 'express'; 
import productsRouter from './src/routes/products_router.js';

const app = express()
app.use(express.json());

app.use("/api/products", productsRouter);

app.use((req, res, next) => {
    res.status(404).json({error: 'Ruta no encontrada'});});

app.get('/', (req, res) => {
    res.send('Hola Node.js!');
});

import productsRouter from './src/routes/products_router.js';
app.use("/api/products",productsRouter);


const PORT = 3000;  
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

