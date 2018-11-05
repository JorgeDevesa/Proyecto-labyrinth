function Obstacle(canvas,map, ball,x, y, w, h){
    this.ctx = canvas;
    this.objX = map.gw * 5;    //x;
    this.objY = map.gh * 3// + map.adjY; //y;
    this.objW = 45;    //w;
    this.objH = 5;     //h;
    position = ["a","b"]
    this.colorObj = "black";
    this.ball = ball
}

Obstacle.prototype.draw = function(){
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.objX, this.objY, this.objW, this.objH);
}

Obstacle.prototype.colapse = function(){
if(this.ball.y - this.ball.radius === this.objY + this.objH){
        this.ball.vy = 0;
        this.ball.vx= 5;
        this.ball.x -= this.ball.vx;
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

Obstacle.prototype.translation = function(){

        document.onmouseup = function(){
            
        }.bind(this)
}