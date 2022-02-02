var canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle= "grey";
ctx.lineWidth= 1;
ctx.rect(200, 170, 350, 250);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 4;
ctx.arc(250, 250, 30, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 4;
ctx.arc(300, 250, 30, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 4;
ctx.arc(350, 250, 30, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth= 4;
ctx.arc(275, 275, 30, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 4;
ctx.arc(325, 275, 30, 0, 2*Math.PI);
ctx.stroke();