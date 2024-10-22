let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");


let ball = {
    x: 10,
    y: 10,
    raio: 50,
    img: new Image(),
    desenhe: function(){
        if (!this.img.src) {
            this.img.src = 'ball2.jpg';
        }
        ctx.beginPath();
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.desenhe();
    requestAnimationFrame(animacao);
}

//para mouse
document.addEventListener("mousemove", function(evento){
    let rect = canvas.getBoundingClientRect();
    let x = evento.clientX - rect.left;
    let y = evento.clientY - rect.top;

    // Restringe a posição da bola para que não saia dos limites do canvas
    if (x < ball.raio) {
        ball.x = ball.raio; // Limite esquerdo
    } else if (x > canvas.width - ball.raio) {
        ball.x = canvas.width - ball.raio; // Limite direito
    } else {
        ball.x = x;
    }

    if (y < ball.raio) {
        ball.y = ball.raio; // Limite superior
    } else if (y > canvas.height - ball.raio) {
        ball.y = canvas.height - ball.raio; // Limite inferior
    } else {
        ball.y = y;
    }
});

animacao();