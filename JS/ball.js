function Ball(canvas, game) {
  this.ctx = canvas;
  this.game = game;
  this.x = 250;
  this.y = 550;
  this.vx = 0;
  this.vy = 0;
  this.radius = 15;
  this.color = "red";
}

Ball.prototype.drawBall = function() {
  this.ctx.beginPath();
  this.ctx.fillStyle = "#2ECC71";
  this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
};

Ball.prototype.moveBall = function() {
  this.y -= this.vy;

  if (
    this.y + this.radius < 0 ||
    this.y - this.radius > 600 ||
    this.x + this.radius < 0 ||
    this.x - this.radius > 500
  ) {
    this.reset();
  }
};

var TOP_KEY = 38;
var SPACE = 32;
Ball.prototype.startMove = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === SPACE) {
      this.vy = 0;
      this.vy = 5;
    }
  }.bind(this);
};

Ball.prototype.reset = function() {
  document.location.reload();
};
