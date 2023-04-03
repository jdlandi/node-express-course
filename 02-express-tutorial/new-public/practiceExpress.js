const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./new-public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './indexx.html'));
    console.log('/ requested');
    console.log(path.resolve(__dirname, './indexx.html'));
})

app.get('/sample', (req, res) => {
    res.send('<h1> this is working! </h1>');
});

app.listen(3000);