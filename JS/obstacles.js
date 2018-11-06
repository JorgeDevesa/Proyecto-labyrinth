function Obstacle(canvas,map, ball, game,x ,y,p){
    this.game = game;
    this.ctx = canvas;
    this.objX = this.game.gw * x;
    this.objY = this.game.gh * y;// + map.adjY; //y;
    this.realPosition = {x: x, y: y}

    // this.position = {x: Math.floor(this.objX /11), y: Math.floor(this.objY / 13)}

    console.log(this.objX + this.objY)
    console.log("x: " + this.realPosition.x + " y: " + this.realPosition.y)
    this.objW = 45;    //w;
    this.objH = 5;     //h;
    this.position = p
    this.ball = ball
    
}

Obstacle.prototype.draw = function(){
    if (this.position ==="a"){
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.objX, this.objY, this.objW, this.objH);
    }
    if (this.position ==="b"){
        this.ctx.fillStyle = "yellow";
        this.ctx.fillRect(this.objX, this.objY, this.objW, this.objH);
    }
}

Obstacle.prototype.colapse = function(){
if(this.position ==="a" && this.ball.y - this.ball.radius === this.objY + this.objH){
        if(this.position ==="a"){
        this.ball.vy = 0;
        this.ball.vx= 5;
        this.ball.x -= this.ball.vx;
        }
        if(this.position ==="b"){
            this.ball.vy = 0;
            this.ball.vx= 5;
            this.ball.x += this.ball.vx;
        }
    }
    else if(this.position ==="b" && this.ball.y - this.ball.radius === this.objY + this.objH){
        this.ball.vy= 0;
        this.ball.vx = 5;
        this.ball. x += this.ball.vx;
    }

    else if(this.ball.y + this.ball.radius <= this.objY - this.objH){
        this.ball.vy= 0;
        this.ball.vx = 5;
        this.ball. x -= this.ball.vx;
    }

    else if(this.ball.x + this.ball.radius >= this.objx - this.objW){
        console.log(left)
    }
}

Obstacle.prototype.click = function() {
    this.game.canvas.onmouseup = function(event) {
        
      this.game.position.x = Math.floor(event.clientX / this.game.gw);
      this.game.position.y = Math.floor(event.clientY / this.game.gh);
      console.log("x: " + this.game.position.x + " y: " + this.game.position.y);
      console.log("x: " + Math.floor(event.clientX) + " y: " + Math.floor(event.clientY)
      );

      if (
        this.game.ball.y === 550 &&
        this.game.position.x === this.realPosition.x &&
        this.game.position.y === this.realPosition.y
      ) {
        if (this.position === "a") {
          this.position = "b";
        } else { 
          this.position = "a";
        }
      }
    }.bind(this);
  };