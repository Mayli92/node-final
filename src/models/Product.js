import fs from 'fs';
import path from 'path';

let products = [];
const __dirname = import.meta.dirname
console.log( path.join(__dirname), "products.json");


export const getAllProducts = () => {
    fs.readFile(path.join(__dirname, "products.json"), "utf-8", (error, data) => {
    if (error) {

        return console.error(error);
    }

      products = JSON.parse(data);
      console.log(products);

}); 

};
