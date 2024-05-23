var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Draw the face
ctx.fillStyle = "#6b8e23";
ctx.fillRect(50, 50, 100, 100);

// Draw the eyes
ctx.fillStyle = "#add8e6";
ctx.fillRect(65, 65, 20, 20);
ctx.fillRect(115, 65, 20, 20);

// Draw the mouth
ctx.fillStyle = "#ffb6c1";
ctx.fillRect(75, 115, 50, 20);
