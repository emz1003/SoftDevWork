var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var radius = 0;
var value = 0;
var id;

document.getElementById("start").addEventListener("click", function (e) {
  circle();
  id = window.requestAnimationFrame(circle);
  window.cancelAnimationFrame(id);
})

document.getElementById("stop").addEventListener("click", function (e) {
  window.cancelAnimationFrame(id);
})

function circle () {
  ctx.beginPath();
    ctx.clearRect(0, 0, 600, 600);
    ctx.arc(300, 300, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'rgb(135,206,250)';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    if (radius >= 300){
      value = -1;
    }
    radius = radius + value;
    if (radius <= 0){
      value = 1;
    }
    id = window.requestAnimationFrame(circle);
};
