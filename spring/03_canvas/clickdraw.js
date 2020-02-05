// var clear = function() {

// }

var draw = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(event.clientX, event.clientY, 150, 100);
    console.log("drawing");
}

var canvas = document.getElementById("canvas");
console.log(canvas);
var ctx = canvas.getContext("2d");

ctx.fillStyle = 'green';
ctx.fillRect(event.clientX, event.clientY, 150, 100);

document.getElementById("canvas").addEventListener("click", draw);