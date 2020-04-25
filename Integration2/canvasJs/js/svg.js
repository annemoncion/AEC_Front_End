var c = document.getElementById("monCanevas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(0,0,600,400);

var grd = ctx.createLinearGradient(0, 0, 0, 360);
grd.addColorStop(0, "#0097cc");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fill();

ctx.beginPath();
ctx.arc(300, 800, 600, 0, 2 * Math.PI);
ctx.fillStyle = '#006600';
ctx.fill();

ctx.beginPath();
ctx.rect(230,80,140,140);
ctx.lineWidth = 6;
ctx.fillStyle = "#250601";
ctx.strokeStyle = "#fb3a1d";
ctx.shadowBlur = 6;
ctx.shadowColor = "#250601";
ctx.fill();
ctx.stroke();

ctx.shadowBlur = 0;
ctx.fillStyle = "#fb3a1d";
var lettreA = new Path2D("m 365,155 -26.323885,84.975559 h 15.008553 l 6.69702,-24.012867 h 12.929787 12.933298 l 6.693491,24.012867 h 15.012085 l -26.323888,-84.975559 h -8.314986 z m 8.311475,13.626205 9.236528,34.867514 h -9.236528 -9.236545 z");
ctx.scale(.75,.75);
ctx.fill(lettreA);

ctx.shadowBlur = 0;
ctx.fillStyle = "#fb3a1d";
var lettreN = new Path2D("m 430,240 v -51.923142 c 0,0 11.82818,-2.322629 15.34834,1.142995 2.20554,2.171414 2.39977,7.039289 2.44919,10.939754 0.16304,6.531206 0,39.840393 0,39.840393 h 15.18508 v -45.065349 c 0,0 0.16304,-17.634274 -16.16477,-19.756946 -16.328,-2.122604 -32.16619,5.225012 -32.16619,5.225012 v 59.597283 z");
ctx.fill(lettreN);
