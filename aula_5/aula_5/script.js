console.log("Ola");
//window.alert("Oi");

//let nome = prompt("Qual o seu nome?: ");
//console.log(nome);

//for(let i = 0; i < 100; j++){
//    if(i%2==1){
//        console.log(i);
//    }
//}

//for(let i = 0; i <= 500; j++){
//    if(i%5==0){
//       console.log(i);
//    }
//}

let num = prompt("Insra um numero inteiro: ");
if(!isNaN(num)){
    for(let i = num; i != 0; i--){
        console.log(i);
    }
}else{
    window.alert("Tipo de imput errado");
}

