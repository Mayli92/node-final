const products = [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
];

export const getProducts = () => products;

export const getProductById = (id) => {
    return products.find((item) => item.id === id);
};

export const createProduct = (name) => {
    const product = {
        id: products.length + 1,
        name,
    };

    products.push(product);
    return product;
}