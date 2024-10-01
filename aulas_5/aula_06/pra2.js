let a = prompt("Escreva um numero: ");
let b = prompt("Escreva outro numero: ");

function soma(a, b){
    return a + b;
}
function mult(a, b){
    return a * b;
}

function ex3(){
    let numero1 = parseInt(document.getElementById("ex3_n1").value);
    let numero2 = parseInt(document.getElementById("ex3_n2").value);
    let resposta = soma(numero1, numero2);
    document.getElementById("R3").innerHTML = resposta;
}

function ex4(){
    let numero1 = parseInt(document.getElementById("ex4_n1").value);
    let numero2 = parseInt(document.getElementById("ex4_n2").value);
    let resposta = mult(numero1, numero2);
    document.getElementById("R4").innerHTML = resposta;
    if(numero1 < 0 || numero2 < 0){
        document.getElementById("R4").innerHTML = soma(numero1,numero2);
    }else{
        document.getElementById("R4").innerHTML = mult(numero1,numero2);
    }
}

let randomico = Math.floor(Math.random() * 11);
console.log(randomico);