import express, { response } from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');

    response.json([
        'Diego',
        'Márcio',
        'Robson',
        'Atílio'
    ]);
})



app.listen(3333);






