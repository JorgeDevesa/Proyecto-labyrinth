function Colision(ctx, ball, obs) {
  this.ctx = ctx;
  this.ball = ball;
  this.obs = obs;
}

Colision.prototype.bottom = function() {
  console.log()
  if (
    this.ball.y + this.ball.radius >= this.obs.objY &&
    this.obs.objY + this.obs.objH >= this.ball.y &&
    this.ball.x + this.ball.radius >= this.obs.objX &&
    this.obs.objX + this.obs.objW >= this.ball.x 
    && this.obs.status === false
  ) {
  if (this.ball.vy === -5 && this.ball.vx === 0) {
    console.log("entra")

    if (this.obs.position === "a") {
      this.ball.vy = 0;
      this.ball.vx = -5;
      this.obs.status = true;
    } else if (this.obs.position === "b") {
      this.ball.vy = 0;
      this.ball.vx = 5;
      this.obs.status = true;
    } else if (this.obs.position === "c") {
      this.ball.vx = 0;
      this.ball.vy = 5;
      this.obs.status = true
    }
  }
else if(this.ball.vy === 0 && this.ball.vx === 5){
  if (this.obs.position === "a") {

    this.ball.vy = 5;
    this.ball.vx = 0;
    this.obs.status = true;
  } else if (this.obs.position === "b") {
    this.ball.vy = -5;
    this.ball.vx = 0;
    this.obs.status = true;
  } else if (this.obs.position === "c") {
    this.ball.vx = 0;
    this.ball.vy = -5;
    this.obs.status = true
  }
}
    else if (this.ball.vx === 5) {

      if (this.obs.position === "a") {

        this.ball.vy = +5;
        this.ball.vx = 0;
        this.obs.status = true
      } else if (this.obs.position === "b") {
        this.ball.vy = -5;
        this.ball.vx = 0;
        this.obs.status = true;
      } else if (this.obs.position === "c") {
        this.ball.vx = -5;
        this.ball.vy = 0;
        this.obs.status = true
      }
    }
    else if (this.ball.vx === -5 && this.ball.vy === 0) {
    
      if (this.obs.position === "a") {
        this.ball.vy = -5;
        this.ball.vx = 0;
        this.obs.status = true
      } else if (this.obs.position === "b") {
        this.ball.vy = 5;
        this.ball.vx = 0;
        this.obs.status = true;
      } else if (this.obs.position === "c") {
        this.ball.vx = 5;
        this.ball.vy = 0;
        this.obs.status = true
      }
    }
 
  }
};
