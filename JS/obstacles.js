function Obstacle(canvas, map, ball, game, x, y, p, vx,vy) {
  this.game = game;
  this.ctx = canvas;
  this.objX = this.game.gw * x;
  this.objY = this.game.gh * y; // + map.adjY; //y;
  this.realPosition = { x: x, y: y };
  this.radius = 7;
  this.objW = 50; //w;
  this.objH = 10; //h;
  this.position = p;
  this.ball = ball;
  this.drawObstacles = new DrawObstacles(this.ctx)
  this.xMotion = this.game.gw * x;
  this.yMotion = this.game.gw * y;
  this.vxMotion = vx;
  this.vyMotion = vy;
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
      this.xMotion,
      this.yMotion,
      this.objW,
      this.objH,
      7,
      "#D32F2F",
      this.vxMotion,
      this.vyMotion
    );
    this.drawObstacles.moveObstacles(this)
    console.log(this.xMotion)
    }
  }


  //todo: consider using a CollisionChecker class
  //CollisionChecker.check(ball, objX, obY)º
Obstacle.prototype.colapse = function() {
  if (
    this.ball.x + this.ball.radius >= this.objX &&
    this.objX + this.objW +10 >= this.ball.x &&
    this.ball.y + this.ball.radius >= this.objY &&
    this.objY + this.objH >= this.ball.y - this.ball.radius
  ) {
    if (this.position === "a" && this.ball.vy === -5 && this.ball.vx === 0) {
      this.ball.vx = -5;
      this.ball.vy = 0;
      this.ball.y++;

    } else if (
      this.position === "a" &&
      this.ball.vy === 5 &&
      this.ball.vx === 0
    ) {
      this.ball.vx = 5;
      this.ball.vy = 0;
      // this.ball.y++;

    } else if (
      this.position === "a" &&
      this.ball.vy === 0 &&
      this.ball.vx === 5
    ) {
      this.ball.vx = 0;
      this.ball.vy = 5;
      this.ball.x -= 2
    } else if (
      this.position === "a" &&
      this.ball.vy === 0 &&
      this.ball.vx === -5
    ) {
      this.ball.vx = 0;
      this.ball.vy = -5;
      this.ball.x--;
    }

    if (this.position === "b" && this.ball.vy === 5 && this.ball.vx === 0) {
      this.ball.vx = -5;
      this.ball.vy = 0;
      this.ball.y++;

    } else if (
      this.position === "b" &&
      this.ball.vy === -5 &&
      this.ball.vx === 0
    ) {
      this.ball.vx = 5;
      this.ball.vy = 0;
      this.ball.y++;

    } else if (
      this.position === "b" &&
      this.ball.vy === 0 &&
      this.ball.vx === 5
    ) {
      this.ball.vx = 0;
      this.ball.vy = -5;
      this.ball.x +=2;

    } else if (
      this.position === "b" &&
      this.ball.vy === 0 &&
      this.ball.vx === -5
    ) {
      this.ball.vx = 0;
      this.ball.vy = -5;
      this.ball.x--;
    }
  }
};

// console.log("this.ball.y + radius: " + (this.objY + this.objH))
// console.log("vx "+this.ball.vx + " " + this.ball.vy)
