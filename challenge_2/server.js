const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const axios = require('axios');
const port = 3000;

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.use(express.static(__dirname + '/public'));

app.get('/data', (req, res) => {
    console.log(`Testing`);
    res.send({'data': 1});
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));