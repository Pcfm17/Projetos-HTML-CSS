//function ex4(){
//   let list = []
//    let randomico = Math.int();
//   console.log(randomico);
//    let numero1 = parseInt(document.getElementById("ex1_n1").value);
//    if(numero1 >= 0 || numero1 <= 99){
//        document.getElementById("R4").innerHTML = list[numero1];
//        if(numero1 == ramdomico)
//            document.getElementById("p1").innerHTML == "número igual";
//        else if(numero1 < randomico){
//            document.getElementById("p2").inputMode == list[numero1];
//        }
//       else{
//            document.getElementById("p3").inputMode == list[numero1];
//        }
//    }else{
//        document.getElementById("p3").innerHTML = list;
//    }
//}
//const guessInput = document.getElementById('guess');
//const submitButton = document.getElementById('submit');
//const feedbackParagraph = document.getElementById('feedback');
//
//let secretNumber = Math.floor(Math.random() * 100); // generate a random number between 0 and 99
//
//submitButton.addEventListener('h1', () => {
//    const userGuess = parseInt(guessInput.value);
//    if (userGuess === secretNumber) {
//        feedbackParagraph.textContent = `Você acertou! O número era ${secretNumber}.`;
//        feedbackParagraph.style.backgroundColor = "green"; // set background color to green
//    } else if (userGuess > secretNumber) {
//        feedbackParagraph.textContent = `O seu palpite é muito alto!`;
//        feedbackParagraph.style.backgroundColor = "red"; // set background color to red
//   } else {
//        feedbackParagraph.textContent = `O seu palpite é muito baixo!`;
//        feedbackParagraph.style.backgroundColor = "red"; // set background color to red
//    }
//});

//let randomico = Math.floor(Math.random() * 100);
//function ex4(){
//    let list = []
//    console.log(randomico);
//    let numero1 = parseInt(document.getElementById("ex1_n1").value);
//    if(numero1 >= 0 || numero1 <= 99){
//        document.getElementById("R4").innerHTML = list[numero1];
//        if(numero1 === randomico){
//            document.getElementById("p1").innerHTML == "Você acertou!";
//            document.getElementById("p1").style.setProperty("background-color", "green");
//        }else if(numero1 < randomico){
//            document.getElementById("p1").innerHTML == "O número é muito baixo";
//            document.getElementById("p1").style.setProperty("background-color", "red");
//        }
//        else(){
//            document.getElementById("p1").innerHTML == "O número é muito alto";
//            document.getElementById("p1").style.setProperty("background-color", "red");
//        }
//    }else{
//        document.getElementById("p2").innerHTML = list;
//        document.getElementById("p3").innerHTML = list;
//    }
//}

let randomico = Math.floor(Math.random() * 100);

function ex4() {
  let list = []; // Initialize an empty list
  console.log(randomico);

  let numero1 = parseInt(document.getElementById("ex1_n1").value);

  // Check if the input number is within the range [0, 99]
  if (numero1 >= 0 && numero1 <= 99) {
    // Add the input number to the list

    // Check if the input number matches the random number
    if (numero1 === randomico) {
      document.getElementById("p1").innerHTML = "Você acertou!";
      document.getElementById("p1").style.setProperty("background-color", "green");
    } else if (numero1 < randomico) {
      list.push(numero1);
      document.getElementById("p1").innerHTML = "O número é muito baixo";
      document.getElementById("p1").style.setProperty("background-color", "red");
      document.getElementById("p2").innerHTML = list.join(", ");
    } else {
      list.push(numero1);
      document.getElementById("p1").innerHTML = "O número é muito alto";
      document.getElementById("p1").style.setProperty("background-color", "red");
      document.getElementById("p3").innerHTML = list.join(", ");
    }
  } else {
    document.getElementById("p1").innerHTML = "Número invalido, digite um numero ou número muito (baixo, alto)";
  }
}