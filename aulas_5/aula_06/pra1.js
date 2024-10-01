let a = prompt("Escreva um numero: ");
let b = prompt("Escreva outro numero: ");

function soma(a, b){
    return a + b;
}

function ex3(){
    let numero1 = parseInt(document.getElementById("ex3_n1").value);
    let numero2 = parseInt(document.getElementById("ex3_n2").value);
    let resposta = soma(numero1, numero2);
    document.getElementById("R3").innerHTML = resposta;
    document.getElementById("R3_input").value = resposta;
}