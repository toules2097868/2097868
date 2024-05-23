var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var x = 0;


ctx.beginPath();
ctx.moveTo(x + 50, 200);
ctx.lineTo(x + 350, 200);
ctx.lineTo(x + 300, 250);
ctx.lineTo(x + 100, 250);
ctx.closePath();
ctx.fillStyle = "#d98b39";
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = "#8b4513";
ctx.stroke();


ctx.beginPath();
ctx.moveTo(x + 200, 200);
ctx.lineTo(x + 200, 50);
ctx.lineWidth = 5;
ctx.strokeStyle = "#8b4513";
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.moveTo(x + 200, 70);  
ctx.lineTo(x + 200, 190);  
ctx.lineTo(x + 350, 190); 
ctx.closePath();
ctx.fillStyle = "lightblue";  
ctx.fill();
