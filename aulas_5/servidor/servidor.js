var http = requirequire("http");
let express = require("express")

var app = express();

app.use(express.static("./public"));

var server = http.createServer(app);

server.listen(80)

console.log('Servidor rodando')