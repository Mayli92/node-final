import express from 'express'; 
const app = express();
app.get('/', (req, res) => {
    res.send('Hola Node.js!');
});

let products = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', precio: 300 },
];

app.get("/api/products", (req, res) => {
    res.json(products);
});

const PORT = 3000;  
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

