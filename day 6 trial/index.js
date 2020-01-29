//Imports
const express = require('express');
const bodyParser = require('body-parser');

//Consts
const app = express();
const PORT = 3000;

//use body parser
app.use(bodyParser.json());

//Home , list options
const homeView = `${__dirname}/views/home.html`;

app.get('/', (request, response) => {
    response.status(200).sendFile(homeView);   
});

app.get('/function/:funct', (request, response) => {
    const {funct} = request.params;
    const view = `${__dirname}/views/${funct}.html`;
    response.status(200).sendFile(view);
});

app.listen(PORT, () => {
    console.log(`Server up on ${PORT}`);
});