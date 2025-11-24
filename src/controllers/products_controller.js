import {getProducts} from '../models/Product.js';   


export const index = (req, res) => {
    const products = getProducts();
    res.json(products);};