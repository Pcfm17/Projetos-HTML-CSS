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
quadrado(10,10,50,50,'transparent','blue');

quadrado(10,440,50,50,'transparent','yellow');
quadrado(10,10,50,50,'transparent','yellow');


ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'blue';
ctx.strokeRect(440,10,50,50);
ctx.fillRect(10,10,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'green';
ctx.strokeRect(440,440,50,50);
ctx.fillRect(10,10,50,50);
ctx.closePath();


//linha vermelha
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(60,60);
ctx.lineTo(440,440);
ctx.stroke();
ctx.closePath();


//linha cinsa
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'gray';
ctx.moveTo(10,10);
ctx.lineTo(10,490);
ctx.moveTo(10,490);
ctx.lineTo(490,490);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'gray';
ctx.moveTo(10,10);
ctx.lineTo(490,10);
ctx.moveTo(490,10);
ctx.lineTo(490,490);
ctx.stroke();
ctx.closePath();


//linha azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(440,60);
ctx.lineTo(60,440);
ctx.stroke();
ctx.closePath();


//linha verde
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.moveTo(500,250);
ctx.lineTo(0,250);
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'transparent';
ctx.strokeStyle = 'green';
ctx.arc(250,250,50,0*Math.PI,1*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();