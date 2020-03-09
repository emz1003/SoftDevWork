// Yifan Wang and Emily Zha®ng (Team Vision Donors)
// SoftDev pd1
// K08 -- What is it saving the screen from?
// 2020-02-13

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

//circle
var radius = 0;
var value = 0;
var id = 0;

//movie
var dvd_id = 0;
var logo = new Image();
logo.src = "logo.png";
var xSlope = 1;
var ySlope = 1;
var x = Math.floor(Math.random() * 550);
var y = Math.floor(Math.random() * 550);

document.getElementById("start").addEventListener("click", function () {
  console.log();
  window.cancelAnimationFrame(movie);
  dvd_id = 0;
  if (id == 0) {
    id = window.requestAnimationFrame(circle);
  }
});

document.getElementById("dvd").addEventListener("click", function () {
  console.log();
  window.cancelAnimationFrame(circle);
  id = 0;
  if(dvd_id == 0) dvd_id = window.requestAnimationFrame(movie);
  x = Math.floor(Math.random() * 520);
  y = Math.floor(Math.random() * 520);
  xSlope = 1; // resets slope to default
  ySlope = 1;
});


document.getElementById("stop").addEventListener("click", function () {
    console.log();
    window.cancelAnimationFrame(dvd_id);
    window.cancelAnimationFrame(id);
    id = 0;
    dvd_id = 0;
});

function circle(e) {
  ctx.beginPath();
  ctx.clearRect(0, 0, c.width, c.height);
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

function movie(e) {
  ctx.clearRect(0, 0, c.width, c.height);
    if (x >= 480 || x <= 0){
      xSlope = -xSlope;
    }
    if (y >= 500 || y <= 0){
      ySlope = -ySlope;
    }
    x = x + xSlope;
    y = y + ySlope;
    ctx.drawImage(logo, x, y, 100, 100);
    if(dvd_id != 0) {
      window.requestAnimationFrame(movie);
    }
};
