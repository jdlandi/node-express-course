const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.json(products);
    console.log(products);
});

app.listen(8081, () => {
    console.log("Server up on 8081");
});