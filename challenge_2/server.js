const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const axios = require('axios');
const APIparser = require('./helpers/helper.js');
const port = 3000;

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.use(express.static(__dirname + '/public'));

app.get('/data', (req, res, next) => {
    console.log(`Testing`);
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-09-01&end=2018-09-30`)
    .then((response) => res.send(APIparser.parser(response.data)))
    .catch((err) => {console.log(`Error calling API:`, err)});
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));