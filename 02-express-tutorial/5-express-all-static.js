const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./public'));


app.all('*', (req, res) => {
    res.status(404).send('resource no found');
    console.log('404 sent');
});

app.listen(8081, () => {
    console.log('Server on 8081');
});









