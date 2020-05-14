// Emily Zhang and Michael Zhang
// SoftDev pd1
// K05 -- ...and I want to Paint It Better
// 2020-02-07

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var state = "dot";
const SIDE = 50;

c.addEventListener("click", function (e) {
    console.log("clicked");
    var rect = c.getBoundingClientRect();
    if (state == "rect") {
        ctx.fillRect(event.clientX - rect.x, e.clientY - rect.y, SIDE, SIDE);
    } else {
        ctx.beginPath();
        ctx.arc(event.clientX - rect.x, e.clientY - rect.y, 6, 0, 2 * Math.PI);
        ctx.fill();
    }
});

document.getElementById("toggle").addEventListener("click", function () {
    console.log("toggling");
    if (state == "rect") {
        state = "dot"
    } else {
        state = "rect"
    }
});


document.getElementById("clear").addEventListener("click", function () {
    console.log("clear");
    ctx.clearRect(0, 0, c.height, c.width);
});


var draw = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.fillRect(event.clientX, event.clientY, 150, 100);
    console.log("draw");
}
/*
e.preventDefault();
    Cancels the event this function is used on.
    Prevents default behavior of an event.
    This function can only be used on cancelable events. 
    It has no effect on uncancelable events.
ctx.beginPath();
    Creates a new path, which can have different properties from a path before it.
e.offsetX
e.offsetY
    Used on events, these functions provide the offset from the mouse location to the padding edge.
*/