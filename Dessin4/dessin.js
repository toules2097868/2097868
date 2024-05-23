var canvas;
var ctx;
var x = 150;
var y = 150;
var dx = 2;
var dy = 4;

function init() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    return setInterval(draw, 10);
}

function draw() {
    ctx.beginPath();
    ctx.clearRect(0, 0, 300, 300);
    ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

    // Incrementation afin de deplacer la boule
    x += dx;
    y += dy;
}

init();
