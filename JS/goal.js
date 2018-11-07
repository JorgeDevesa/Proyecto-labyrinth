function Goal(canvas, map, ball, game){
    this.ctx = canvas;
    this.ball = ball;
    this.map = map; 
    this.game = game;
    this.x = 250;
    this.y = 100;
    this.objX = map.gw * 1 + map.adjX;    //x;
    this.objY = map.gh * 3 + map.adjY; //y;
    this.objW = 45;    //w;
    this.objH = 5;     //h;
    this.radius = 20;
    position = ["a","b"]
    this.color = "red";
}

Goal.prototype.draw = function(){ 
    this.ctx.beginPath();
    this.ctx.fillStyle= "#212F3D"
    this.ctx.arc(this.objX, 140, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
}

Goal.prototype.finnish = function(){
    if(this.ball.x + this.ball.radius <= this.objX + 10 && 
        this.ball.y + this.ball.radius<= this.objY + this.radius+50){          
          this.game.levelCounter =1 
          this.ball.x = 250;
          this.ball.y = 550;
          this.ball.vy = 0
          this.ball.vx = 0 
        
    }

}