const fs = require("fs");
const path = require('path');

const productos_db = path.join('data','productos.json');

module.exports = {
    getProducts: ()=> JSON.parse(fs.readFileSync(productos_db, "utf-8")),
    setProdcts: (data) => {
        fs.writeFileSync(
            productos_db,
            JSON.stringify(data, null, 2), //null y 2 deja indentado de forma legible el JSON
            "utf-8"
        );
    },
};