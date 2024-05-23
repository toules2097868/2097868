var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Draw the face
ctx.beginPath();
ctx.arc(100, 100, 80, 0, 2 * Math.PI);
ctx.fillStyle = "#ffebcd";
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = "#ff7f50";
ctx.stroke();
ctx.closePath();

// Draw the eyes
ctx.beginPath();
ctx.arc(70, 70, 10, 0, 2 * Math.PI);
ctx.arc(130, 70, 10, 0, 2 * Math.PI);
ctx.fillStyle = "#4682b4";
ctx.fill();
ctx.closePath();

// Draw the mouth
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI, false);
ctx.lineWidth = 5;
ctx.strokeStyle = "#ff0000";
ctx.stroke();
ctx.closePath();
