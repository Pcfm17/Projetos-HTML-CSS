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
arcos(250,250,50,0*Math.PI,1*Math.PI,'green','transparent');
