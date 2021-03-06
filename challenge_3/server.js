const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Server is listening on port ${port}`));