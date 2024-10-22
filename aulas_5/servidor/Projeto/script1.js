let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function quadrado(x,y,largura,altura,cor_linha,cor_preencimento){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor_preencimento;
    ctx.strokeStyle = cor_linha;
    ctx.fillRect(x,y,largura,altura);
    ctx.strokeRect(x,y,largura,altura);
    ctx.closePath();
}

//blocos
quadrado(10,10,70,70,'transparent','blue');

quadrado(10,440,50,50,'transparent','yellow');
quadrado(10,390,50,50,'transparent','yellow');
quadrado(50,440,50,50,'transparent','yellow');

quadrado(420,10,70,70,'transparent','red');

quadrado(440,440,50,50,'transparent','black');
quadrado(390,440,50,50,'transparent','black');
quadrado(440,390,50,50,'transparent','black');

quadrado(10,250,50,50,'transparent','darkturquoise');
quadrado(10,200,50,50,'transparent','darkturquoise');

quadrado(440,225,50,50,'transparent','darkturquoise');

quadrado(200,250,50,50,'transparent','red')

function linha(x,y,w,z,cor_linha){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = cor_linha;
    ctx.moveTo(x,y);
    ctx.lineTo(w,z);
    ctx.stroke();
    ctx.closePath();
}

//linha vermelha
linha(80,80,250,250,'blue');

//linha azul
linha(420,80,250,250,'red')

//linha verde
linha(490,250,10,250,'green')

//linha cinsa
linha(10,10,10,490,'black')
linha(10,490,490,490,'black')

linha(10,10,490,10,'black')
linha(490,10,490,490,'black')

linha(250,250,250,440,'gray')

function arcos(x,y,raio,angulinicial,angulfinal,cor_linha,cor_preencimento){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor_preencimento;
    ctx.strokeStyle = cor_linha;
    ctx.arc(x,y,raio,angulinicial,angulfinal);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

// arcos
arcos(250,250,100,1*Math.PI,0*Math.PI,'green','transparent');
arcos(250,490,50,1*Math.PI,0*Math.PI,'green','darkturquoise');
arcos(220,250,150,1*Math.PI,1.3*Math.PI,'green','transparent');
arcos(280,250,150,1.7*Math.PI,0*Math.PI,'green','transparent');
arcos(250,490,130,1*Math.PI,1.5*Math.PI,'green','transparent');
arcos(250,490,90,1.5*Math.PI,0*Math.PI,'green','transparent');



// Function to draw a circle
function drawCircle(x, y, radius, fillColor, borderColor, borderWidth) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
  
    // Fill the circle
    ctx.fillStyle = fillColor;
    ctx.fill();
  
    // Draw the border
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.stroke();
  }
//circulo
drawCircle(110, 360, 20, 'yellow','green', 1);
drawCircle(350, 360, 20, 'yellow','green', 1);
drawCircle(250, 185, 20, 'darkturquoise','blue', 1);






function escrita(x, y, cor_linha, cor_preencimento){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor_linha;
    ctx.font = "35px Arial"
    ctx.textAlign = "center";
    ctx.fillText("carvas",250,75);
    ctx.closePath();
}
// texto
escrita(250,75,'black','transparent')