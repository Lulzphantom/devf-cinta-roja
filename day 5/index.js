const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

//use bodyparser to detect json in body
app.use(bodyParser.json());

//declare views in node.js
const home = `${__dirname}/views/index.html`

//default path
app.get('/', (request, response) => {
    response.status(200).sendFile(home);
});

//get enpoint 'name'
app.get('/name', (request, response) => {
    response.status(200).send('a');
});

//post endpoint 'suma'
app.post('/suma', (request, response) => {
    const {num1, num2} = request.body;
    // console.log(request.body);
    response.status(200).send(`${num1} ${num2}`);
});

app.get('/suma', (request, response) => {
    
    response.status(200).send(request.query); //`count ${Object.keys(request.query).length}`
});


app.listen(PORT, () =>{
    console.log('Server up on 3000 port');
});