let randomico = Math.floor(Math.random() * 100);
let list = []; // Initialize an empty list

function ex4(){
console.log(randomico);

let numero1 = parseInt(document.getElementById("ex1_n1").value);

// Check if the input number is within the range [0, 99]
if (numero1 >= 0 && numero1 <= 99) {
 // Add the input number to the list
    list.push(numero1);

      // Check if the input number matches the random number
    if (numero1 === randomico) {
        document.getElementById("p1").innerHTML = "Você acertou!";
        document.getElementById("p1").style.setProperty("background-color", "green");
    } else if (numero1 < randomico) {
        document.getElementById("p1").innerHTML = "O número é muito baixo";
        document.getElementById("p1").style.setProperty("background-color", "red");
        document.getElementById("p2").innerHTML = "Números baixos: " + list.filter(num => num < randomico).join(", ");
    } else {
        document.getElementById("p1").innerHTML = "O número é muito alto";
        document.getElementById("p1").style.setProperty("background-color", "red");
        document.getElementById("p3").innerHTML = "Números altos: " + list.filter(num => num > randomico).join(", ");
    }
} else {
    document.getElementById("p1").innerHTML = "Número inválido, digite um número entre 0 e 99";
}}