// Emily Zhang and Michael Zhang
// SoftDev pd1
// K06 -- Dot Dot Dot
// 2020-02-12

var c = document.getElementById("playground");
var ctx = c.getContext("2d");

const SIDE = 50;
var lastx = null;
var lasty = null;

c.addEventListener("click", function (e) {
console.log("clicked");
var rect = c.getBoundingClientRect();
    ctx.beginPath();
    ctx.arc(event.clientX - rect.x, e.clientY - rect.y, 6, 0, 2 * Math.PI);
    ctx.fill();
    

    if(lastx !== null && lasty !== null) {
        ctx.beginPath();
        ctx.moveTo(lastx - rect.x, lasty - rect.y);
        ctx.lineTo(event.clientX - rect.x, e.clientY - rect.y);
        ctx.stroke();
        line = true;
        ctx.closePath();
    }
    lastx = event.clientX;
    lasty = event.clientY;
});


document.getElementById("clear").addEventListener("click", function () {
    console.log("clear");
    ctx.clearRect(0, 0, c.height, c.width);
    lastx = null;
    lasty = null;
});


var draw = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.fillRect(event.clientX, event.clientY, 150, 100);
    console.log("draw");
}