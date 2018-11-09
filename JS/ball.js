function Ball(canvas, game,counter) {
  this.ctx = canvas;
  this.game = game;
  this.counter = counter;
  this.x = 260;
  this.y = 550;
  this.vx = 0;
  this.vy = 0;
  this.radius = 12;
  this.color = "red";
}

Ball.prototype.drawBall = function() {
  this.ctx.beginPath();
  this.ctx.fillStyle = "#03A9F4";
  this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
};

Ball.prototype.moveBall = function() {
  this.y += this.vy;
  this.x += this.vx;

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
      this.vy = -5;
    }
  }.bind(this);
};


///////////////////////


Ball.prototype.reset = function() {           ////////refactorizar en clase a parte  (las dos siguienters)

  if(this.game.levelCounter > 0){
    // alert("That's not de goal! Play again?")
    this.game.counterDown = 0
    this.game.counterDown += 15;
    this.x = 260;
    this.y = 550;
    this.vx = 0;
    this.vy = 0;
  }
  else{
    // alert("That's not de goal! Play again?")
document.location.reload();
  }
};

Ball.prototype.resetCounterDown = function(){
  if(this.game.counterDown === 0){
    this.game.counterDown = 0
    if (this.game.levelCounter < 3){
      this.game.counterDown = 15;}
      else{
        this.game.counterDown =20}
    this.x = 260;
    this.y = 550;
    this.vx = 0;
    this.vy = 0;
    
    // this.obstacle.status = false
    }
    // alert("out of time! Play again?")
  }
