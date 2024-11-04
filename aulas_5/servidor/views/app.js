const express = require('express');
const app = express();
const port = 80;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/project.html');
});

app.get('/cadastra', (req, res) => {
    res.sendFile(__dirname + '/cadastro.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/cadastra', (req, res) => {
    // Lógica de cadastro
    res.render('resposta', { status: 'Cadastro realizado com sucesso!' });
});

app.post('/login', (req, res) => {
    // Lógica de login
    res.render('resposta', { status: 'Login realizado com sucesso!' });
});

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});