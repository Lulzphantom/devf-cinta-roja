const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.status(200).send('Test');
})


app.post('/alumn', (request, response) => {
    const{ name, program} = request.body;
    const status = 'Inscrito';

    const resp = {
        name,
        program,
        status
    }

    response.status(200).send(resp);

});

//Query parameters
const progView = `${__dirname}/views/programs.html`
app.get('/programs', (request, response) => {
    const {loc} = request.query;
    console.log(loc);
    response.status(200).sendFile(progView);
});

//Params
app.get('/getProgram/:program', (request, response) => {
    console.log(request.params);
    const {program} = request.params;
    let status = 200;
    let prgresponse = {
        notfound : 'GG'
    };
    switch (program) {
        case 'CintaBlanca':
            prgresponse = {
                name : 'Cinta Blanca',
                content : {
                    js : 'basic',
                }
            }
            break;
        case 'CintaRoja':
            prgresponse = {
                name : 'Cinta Roja',
                content : {
                    js : 'ES6',
                    db : 'MongoDB'
                }
            }
            break;            
        default:
            status = 404;
            break;
    }
    response.status(status).send(prgresponse);
});

app.listen(PORT,() => {
    console.log(`Server up on ${PORT}`);
});

