let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let retangulo_1 = {
    x: 10,
    y: 10,
    largura: 50,
    altura: 50,
    cor: 'red',
    desenhe: function(){
        ctx.beginPath();
        ctx.fillSyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura)
        ctx.closePath();
    }
}
let retangulo_2 = {
    x: 340,
    y: 340,
    largura: 50,
    altura: 50,
    cor: 'blue',
    desenhe: function(){
        ctx.beginPath();
        ctx.fillSyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura)
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,400,400);

    // if(retangulo_1.x < 350){
    //    retangulo_1.x = retangulo_1.x + 1;
    // }

    // if(retangulo_2.x > 0){
    //   retangulo_2.x = retangulo_2.x - 1;
    // }


    retangulo_1.desenhe();
    retangulo_2.desenhe();
    requestAnimationFrame(animacao);
}


//digitação
document.addEventListener("keydown", function(evento){
    let tecla = evento.key;
    console.log(tecla);

    let vel = 5;

    if(tecla == "ArrowUp"){
        retangulo_1.y = retangulo_1.y-vel;
    }
    else if(tecla == "ArrowDown"){
        retangulo_1.y = retangulo_1.y+vel;
    }
    else if(tecla == "ArrowLeft"){
        retangulo_1.x = retangulo_1.x-vel;
    }
    else if(tecla == "ArrowRight"){
        retangulo_1.x = retangulo_1.x+vel;
    }
})
//para mouse
document.addEventListener("mousemove", function(evento){
    let rect = canvas.getBoundingClientRect();
    let x = evento.clientX - rect.left;
    let y = evento.clientY - rect.top;
    console.log(x,y);

    retangulo_2.x = x;
    retangulo_2.y = y;
})

animacao();