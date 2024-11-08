var http = require("http");
let express = require("express");

var app = express();

app.use(express.static("./Projeto"));
//<form action='/cadrastro' method='get'></form>
//app.use(express.static("./cadrastro.html"));
//app.use(express.static("./login.html"));
app.post('/cadastro, function(requisicao, resp){
    var nome = requisicao.body.nome;
    var login= requisicao.body.login;
    response.render('resposta', {nome, login})
});

let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

var server = http.createServer(app);

server.listen(80);

console.log('Servidor rodando');