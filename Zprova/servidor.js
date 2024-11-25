const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { render } = require('ejs');
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://Paulo:w726BMdVqz5z0sCW@cluster0.eezmw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, { useNewUrlParser: true });

var app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('view', './views');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.listen(80, () => {
    console.log('server started');
});

app.get('/', (req, res) => {
    res.redirect('./cadrastro.html');
});


/////////////////////////////////////////////////////////
//usuarios

app.post('/cadastrar_usuario', function(req, res) {
    client.db('Auladb').collection('usuarios').insertOne(
        { db_nome: req.body_nome, db_login, db_senha: req.body.senha }, function (err)
    {
    if (err) {
        res.render('dados_usuario.ejs', {resposta: 'Erro ao cadastrar usuario!'})
    }else{
        res.render('dados_usuario.ejs', {resposta: 'Usuario cadastrado com sucesso!'})
    };
    });
});

/////////////////////////////////////////////////////////
app.post('/login_usuario', function(req, res) {
    client.db('Auladb').collection('usurios').find(
        { db_login: req.body.login, db_senha: req.body.sehna}).toArray(function(err, items){
            console.log(items);
            if (items.length == 0){
                res.render('dados_usuario.ejs', {resposta: 'Usuario/senha nao encontrado!'})
            }else if (err) {
                res.render('dados_usuario.ejs', {resposta: 'Erro ao logar usuario!'})
            }else {
                res.render('dados_usuario.ejs', {resposta: 'Usuario logado com sucesso!'})
            };
        });
});