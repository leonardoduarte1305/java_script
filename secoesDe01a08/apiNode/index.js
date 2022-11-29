const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('Hello Node World! ');
});

app.post('/', function (req, res) {
    res.send('Outra mensagem');
});

app.post('/user/:id', function (req, res) {
    res.send('Outra mensagem ' + req.params.id);
});

app.post('/user/', function (req, res) {
    res.json(req.body);
});



app.listen(3000, () => {
    console.log('Servidor está rodando, seja feliz!');
});