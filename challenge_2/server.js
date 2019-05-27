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
    // axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-09-01&end=2017-09-30`)
    // .then((response) => res.send(response.data))
    // .catch((err) => {console.log(`Error calling API:`, err)});

    let data = {"bpi":{"2017-09-01":4950.7238,"2017-09-02":4643.975,"2017-09-03":4631.695,"2017-09-04":4319.7213,"2017-09-05":4422.1213,"2017-09-06":4626.72,"2017-09-07":4638.0975,"2017-09-08":4317.5375,"2017-09-09":4291.88,"2017-09-10":4191.175},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.","time":{"updated":"Sep 11, 2017 00:03:00 UTC","updatedISO":"2017-09-11T00:03:00+00:00"}}

    
    console.log(APIparser.parser(data))


});

app.listen(port, () => console.log(`Server is listening on port ${port}`));