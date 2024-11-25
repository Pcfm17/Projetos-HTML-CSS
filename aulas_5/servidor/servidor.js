var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');
let mongodb = require("mongodb");

const MongoCliente = mongodb.MongoClient;
const uri = "mongodb+srv://Paulo:w726BMdVqz5z0sCW@cluster0.eezmw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoCliente(uri, { useNewUrlParser: true});

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', 'views');

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

app.get('/', function (requisicao, resposta){
    resposta.redirect('./Projeto/home.html')
});

app.get('/inicio', function (requisicao, resposta){
    var nome = requisicao.query.info;
    console.log(nome);
});

app.post('/inicio', function (requisicao, resposta){
    var data = requisicao.body.data;
    console.log(data);
});

app.get('/cadastro',function (requisicao, resposta){
    var nome = requisicao.query.nome;
    var sobrenome = requisicao.query.sobrenome;
    var nascimento = requisicao.query.nascimento;
    var civil = requisicao.query.civil;

    resposta.render('resposta_cadastro.ejs', {nome, sobrenome, nascimento, civil})
});



//banco de dados
app.get('/cadastrar_livro', function(req, res){
    let nome = req.query.cadastra_nome;
    let autor = req.query.cadastra_autor;
    let isbn = req.query.cadastra_isbn;
    let editora = req.query.cadastra_editora;
    let data = req.query.cadastra_data;

    console.log(nome, autor, isbn, editora, data);

    res.render('resposta.ejs', {resposta: 'não sei', mensagem: 'Foi cadastrado com sucesso...'});



    //salva dados mo banco
    client.db("AulaBD").collection('livros').insertOne(
    {
        db_nome: nome,
        db_autor: autor,
        db_isbn: isbn,
        db_editora: editora,
        db_data: data

    }, function (err) {
        if (err) {
            res.render('resposta.ejs',{resposta: 'Falha', mensagem: 'Erro ao cadrastrar com a conta'})
        } else {
            res.render('resposta.ejs',{resposta: 'Sucesso', mensagem: 'Livro cadastrado'})
        }
    })

    app.get('/buscar_livro_nome', function(req, res){
        let nome = req.query.nome;

        client.db("AulaBD").collection('livros').find(
            {db_nome: nome}).toArray(function(err, itens){
                if(err){
                    res.render('resposta.ejs',{resposta: 'Falha', mensagem: 'Erro ao buscar o livro'})
                }
                else if(itens.length == 0){
                    res.render('resposta.ejs',{resposta: 'Falha', mensagem: 'livro não encontrado'})
                }
                else{
                    res.render('resposta.ejs',{resposta: 'Sucesso', mensagem: itens.length + 'Livro encontrado!'})
                }
            })
    })
})

app.get('/atualizar_editora_livro', function(req, res){
       // atualiza senha do usuário

       let isbn = req.query.isbn
       let editora = req.query.editora


   client.db("AulaBD").collection("livros").updateOne(
    { 
        db_isbn: isbn 
    },
    { 
        $set: {db_editora: editora} 
    }, 
    function (err, result) {
        console.log(result);
      if (result.modifiedCount == 0) {
        res.render('resposta.ejs', {resposta: 'Falha',mensagem: "Livro não encontrado!"})
      }else if (err) {
        res.render('resposta.ejs', {resposta: 'Falha',mensagem: "Erro ao atualizar Livro!"})
      }else {
        res.render('resposta.ejs', {resposta: 'Sucesso',mensagem: "Livro atualizado com sucesso!"})       
      };
});

});

app.get("/remove_livro", function(req, res){
    let isbn = req.query.isbn;

       // remove do usuário
   client.db("AulaBD").collection("livros").deleteOne(
    { 
        db_isbn: isbn,
    } , 
         function (err, result) {
      console.log(result);
      if (result.deletedCount == 0) {
        res.render('resposta.ejs', {resposta: 'Falha',mensagem: "livros não encontrado!"})
      }else if (err) {
        res.render('resposta.ejs', {resposta: 'Falha',mensagem: "Erro ao remover livros!"})
      }else {
        res.render('resposta.ejs', {resposta: 'Sucesso',mensagem: "livros removido com sucesso!"})       
      };
    });

})













//banco de dados
app.get('/cadastrar_usuario', function(req, res){
    let nome = req.query.cadastra_nome;
    let Sobrenome = req.query.cadastra_Sobrenome;
    let nascimento = req.query.cadastra_nascimento;
    let estado_civil = req.query.cadastra_estado_civil;

    console.log(nome, Sobrenome, nascimento, estado_civil);

    res.render('resposta_cadastro.ejs', {resposta: 'não sei', mensagem: 'Foi cadastrado com sucesso...'});



    //salva dados mo banco
    client.db("AulaBD").collection('usuario').insertOne(
    {
        db_nome: nome,
        db_Sobrenome: Sobrenome,
        db_nascimento: nascimento,
        db_estado_civil: estado_civil
        
    }, function (err) {
        if (err) {
            res.render('resposta_cadastro.ejs',{resposta: 'Falha', mensagem: 'Erro ao cadrastrar com a conta'})
        } else {
            res.render('resposta_cadastro.ejs',{resposta: 'Sucesso', mensagem: 'usuario cadastrado'})
        }
    })

    app.get('/buscar_usuario_nome', function(req, res){
        let nome = req.query.nome;

        client.db("AulaBD").collection('usuario').find(
            {db_nome: nome}).toArray(function(err, itens){
                if(err){
                    res.render('resposta_cadastro.ejs',{resposta: 'Falha', mensagem: 'Erro ao buscar o usuario'})
                }
                else if(itens.length == 0){
                    res.render('resposta_cadastro.ejs',{resposta: 'Falha', mensagem: 'usuario não encontrado'})
                }
                else{
                    res.render('resposta_cadastro.ejs',{resposta: 'Sucesso', mensagem: itens.length + 'usuario encontrado!'})
                }
            })
    })
})

app.get('/atualizar_usuario', function(req, res){
       // atualiza senha do usuário

       let nascimento = req.query.nascimento
       let Sobrenome = req.query.Sobrenome


   client.db("AulaBD").collection("usuario").updateOne(
    { 
        db_nascimento: nascimento 
    },
    { 
        $set: {db_Sobrenome: Sobrenome} 
    }, 
    function (err, result) {
        console.log(result);
      if (result.modifiedCount == 0) {
        res.render('resposta_cadastro.ejs', {resposta: 'Falha',mensagem: "usuario não encontrado!"})
      }else if (err) {
        res.render('resposta_cadastro.ejs', {resposta: 'Falha',mensagem: "Erro ao atualizar usuario!"})
      }else {
        res.render('resposta_cadastro.ejs', {resposta: 'Sucesso',mensagem: "usuario atualizado com sucesso!"})       
      };
});

});

app.get("/remove_usuario", function(req, res){
    let nascimento = req.query.nascimento;

       // remove do usuário
   client.db("AulaBD").collection("usuario").deleteOne(
    { 
        db_nascimento: nascimento,
    } , 
         function (err, result) {
      console.log(result);
      if (result.deletedCount == 0) {
        res.render('resposta_cadastro.ejs', {resposta: 'Falha',mensagem: "usuario não encontrado!"})
      }else if (err) {
        res.render('resposta_cadastro.ejs', {resposta: 'Falha',mensagem: "Erro ao remover usuario!"})
      }else {
        res.render('resposta_cadastro.ejs', {resposta: 'Sucesso',mensagem: "usuario removido com sucesso!"})       
      };
    });

})