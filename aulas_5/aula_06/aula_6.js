let nome = "Paulo"//prompt("Insira o seu nome: ");
let idade = "18"//prompt("Insira a sua idade: ");

let ano_atual = 2024;

let ano_nascimento = ano_atual - idade;

let resposta = "Olá " + nome + ", O seu ano de nascimento é " + ano_nascimento;
document.getElementById('R1').innerHTML = resposta;

function exibeMensagem(texto){
    alert(texto);
}

//exibeMensagem("Oi");
//exibeMensagem("Ola");
//exibeMensagem("bem");

function soma(a, b){
    return a + b;
}
function mult(a, b){
    return a * b;
}

let c = soma(4, 5);
console.log(c);
console.log(soma(6, 2));


function ex2(){
    let numero = parseInt(document.getElementById("ex2_n1").value);
    let resposta = mult(numero, 3);
    document.getElementById("R2").innerHTML = resposta;
}