var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');
let mongodb = require("mongodb");

const MongoCliente = mpngodb.MongoCliente;
const uri = "mongodb+srv://Paulo:llddnQQ11Zp0z3Ci@cluster0.eezmw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const Client = new MongoCliente(uri, { userNewUrlParser: true});

var app = express();
app.use(express.static('servidor/Projeto/home.html'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', 'servidor/views');

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

app.get('/', function (requisicao, resposta){
resposta.redirect('public/home.html')
})

app.get('/inicio', function (requisicao, resposta){
var nome = requisicao.query.info;
console.log(nome);
})

app.post('/inicio', function (requisicao, resposta){
var data = requisicao.body.data;
console.log(data);
})

app.get('servidor/views/cadastro',function (requisicao, resposta){
var nome = requisicao.query.nome;
var sobrenome = requisicao.query.sobrenome;
var nascimento = requisicao.query.nascimento;
var civil = requisicao.query.civil;

resposta.render('resposta_cadastro', {nome, sobrenome, nascimento, civil})
})



//banco de dados
app.get('/cadrasta_livro', function(req, res){
    let nome = req.query.cadrastra_nome;
    let autor = req.query.cadrastra_autor;
    let isbn = req.query.cadrastra_isbn;
    let editora = req.query.cadrastra_editora;
    let data = req.query.cadrastra_data;

    console.log(nome, autor, isbn, editora, data);

    res.render('resposta.js', {resposta: 'não sei', mensagem: 'será que foi cadrastrado?'});



    //salva dados no banco
    client.db("AulaBD").collection('livros').insertOne(
    {
        db_nome: nome,
        db_autor: autor,
        db_isbn: isbn,
        db_editora: editora,
        db_data: data,

    }, function(err) {
        if (err) {
            res.render('resposta.ejs',{resposta: 'Falha', mensagem: 'Erro ao cadrastrar com a conta'})
        } else {
            res.render('resposta.ejs',{resposta: 'Sucesso', mensagem: 'livro cadrastrado'})
        }
    })

    app.get('./buscar_livro_nome', function(req, res){
        let nome = req.query.nome;

        client.db("AulaBD").collection('livros').find(
            {db_nome: nome}).toArray(function(err, itens){
                if(err) {
                    res.render('resposta.ejs',{resposta: 'Falha', mensagem: 'Erro ao buscar o livro'})
                }
                else if(itens.length == 0){
                    res.render('resposta.ejs',{resposta: 'Falha', mensagem: 'Livro não encontrado'})
                }
                else {
                    res.render('resposta.ejs',{resposta: 'Sucesso', mensagem: 'Livro encontrado'})
                }
            })
    })
})