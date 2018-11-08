function Obstacle(canvas, map, ball, game, x, y, p) {
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
  // console.log("this.objX: " + this.objX + " this.objY: " + this.objY +" this.ObjW: " + this.objW + " this.objH: ")
}
Obstacle.prototype.rectangle = function(ctx, x, y, width, height, radius, color,rotation) {
  ctx.save();
  ctx.beginPath();
  ctx.translate(x + width/2,y + height/2);
  ctx.rotate(rotation);
  ctx.translate(-(x + width/2), -(y +height/2))
  ctx.moveTo(x, y + radius);
  ctx.strokeStyle = color;
  ctx.lineTo(x, y + height - radius);
  ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
  ctx.lineTo(x + width - radius, y + height);
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  ctx.lineTo(x + width, y + radius);
  ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
  ctx.lineTo(x + radius, y);
  ctx.quadraticCurveTo(x, y, x, y + radius);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
};
Obstacle.prototype.draw = function(position) {
  // console.log(position)
  if (position === "a") {
    this.rectangle(
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
    this.rectangle(
      this.ctx,
      this.objX,
      this.objY,
      this.objW,
      this.objH,
      7,
      "red",
      (Math.PI/180)*135
    );
  }
};

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
