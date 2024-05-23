var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = 0;
var waveOffset = 0;

function drawBoat() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

   
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
}

function drawWaves() {
    ctx.beginPath();
    for (let i = 0; i < canvas.width; i += 20) {
        ctx.moveTo(i, 270);
        ctx.quadraticCurveTo(i + 10, 270 + 10 * Math.sin((i + waveOffset) * 0.1), i + 20, 270);
    }
    ctx.lineWidth = 2;
    ctx.strokeStyle = "blue";
    ctx.stroke();
    waveOffset += 1;
}

function animate() {
    drawBoat();
    drawWaves();
    x += 2;
    if (x > canvas.width) {
        x = -350; 
    }
    requestAnimationFrame(animate);
}

animate();
