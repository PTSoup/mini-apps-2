const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const axios = require('axios');
const APIparser = require('./helpers/helper.js');
const port = 3000;

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.use(express.static(__dirname + '/public'));

//This sends the GET request to the API. When the API response is recieved, it will then convert the data to a format the app can use.
app.get('/data', (req, res, next) => {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-09-01&end=2018-05-01`)
    .then((response) => res.send(APIparser.parser(response.data)))
    .catch((err) => {console.log(`Error calling API:`, err)});
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));