import express from 'express'; 

const app = express();

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

