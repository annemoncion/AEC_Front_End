var c = document.getElementById("monCanevas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(0,0,600,400);
ctx.fillStyle = '#000';
ctx.fill();

ctx.beginPath();
ctx.arc(300, 175, 100, 0, 2 * Math.PI);
var grd = ctx.createLinearGradient(0, 0, 0, 360);
grd.addColorStop(0, "#2a7fff");
grd.addColorStop(0.75, "#cc00ff");
ctx.fillStyle = grd;
ctx.fill();

ctx.beginPath();
ctx.arc(380, 150, 100, 0, 2 * Math.PI);
ctx.fillStyle = '#000';
ctx.fill();

