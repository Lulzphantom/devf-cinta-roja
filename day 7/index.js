const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const MONGO = require('./const');
const router = require('./routes/routes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect(MONGO.URI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Db Connected'))
    .catch((err) => console.log(err));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server up, listen port: ${PORT}`);
});
