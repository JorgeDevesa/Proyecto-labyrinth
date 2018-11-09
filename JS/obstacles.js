function Obstacle(canvas, map, ball, game, status,x, y, p,w, vx,vy) {
  this.game = game;
  this.ctx = canvas;
  this.objX = this.game.gw * x;
  this.objY = this.game.gh * y; // + map.adjY; //y;
  this.realPosition = { x: x, y: y };
  this.radius = 7;
  this.objW = w; //w;
  this.objH = 10; //h;
  this.position = p;
  this.ball = ball;
  this.vx = vx;
  this.vy = vy;
  this.drawObstacles = new DrawObstacles(this.ctx, this.ball,this)
console.log(this.realPosition.x +" " +this.realPosition.y)
  this.status = status;

  // this.colisions = new Colisions(this.ctx, this.ball, this)
  // console.log("this.objX: " + this.objX + " this.objY: " + this.objY +" this.ObjW: " + this.objW + " this.objH: ")
}

Obstacle.prototype.draw = function(position) {

  // console.log(position)
  if (position === "a") {
    this.drawObstacles.fixedObstacles(
      this.ctx,
      this.objX,
      this.objY,
      this.objW,
      this.objH,
      7,
      "#03A9F4",
      (Math.PI/180)*45
    );
  } else if (position === "b") {
    this.drawObstacles.fixedObstacles(
      this.ctx,
      this.objX,
      this.objY,
      this.objW,
      this.objH,
      7,
      "#03A9F4",
      (Math.PI/180)*135
    );
  }
  else if (position === "c") {
    this.drawObstacles.motionObstacles(
      this.ctx,
      this.objX,
      this.objY,
      this.objW,
      this.objH,
      7,
      "#D32F2F",
      this.vx,
      this.vy
    );
    this.drawObstacles.moveObstacles(this)
    }
  }

// Obstacle.prototype.colapse = function() {
//   if (
//     this.ball.x + this.ball.radius >= this.objX &&
//     this.objX + this.objW +10 >= this.ball.x &&
//     this.ball.y + this.ball.radius >= this.objY &&
//     this.objY + this.objH >= this.ball.y - this.ball.radius
//   ) {
//     if (this.position === "a" && this.ball.vy === -5 && this.ball.vx === 0) {
//       this.ball.vx = -5;
//       this.ball.vy = 0;
//       this.ball.y++;
    
//     } else if (
//       this.position === "a" &&
//       this.ball.vy === 5 &&
//       this.ball.vx === 0
//     ) {
//       this.ball.vx = 5;
//       this.ball.vy = 0;
//     }
//     } else if (
//       this.position === "a" &&
//       this.ball.vy === 0 &&
//       this.ball.vx === 5
//     ) {
//       this.ball.vx = 0;
//       this.ball.vy = 5;
//       this.ball.x -= 2
//     } else if (
//       this.position === "a" &&
//       this.ball.vy === 0 &&
//       this.ball.vx === -5
//     ) {
//       this.ball.vx = 0;
//       this.ball.vy = -5;
//       this.ball.x--;
//     }

//     if (this.position === "b" && this.ball.vy === 5 && this.ball.vx === 0) {
//       this.ball.vx = -5;
//       this.ball.vy = 0;
//       this.ball.y++;

//     } else if (
//       this.position === "b" &&
//       this.ball.vy === -5 &&
//       this.ball.vx === 0
//     ) {
//       this.ball.vx = 5;
//       this.ball.vy = 0;
//       this.ball.y++;

//     } else if (
//       this.position === "b" &&
//       this.ball.vy === 0 &&
//       this.ball.vx === 5
//     ) {
//       this.ball.vx = 0;
//       this.ball.vy = -5;
//       this.ball.x +=2;

//     } else if (
//       this.position === "b" &&
//       this.ball.vy === 0 &&
//       this.ball.vx === -5
//     ) {
//       this.ball.vx = 0;
//       this.ball.vy = -5;
//       this.ball.x--;
//     }
  
// };


