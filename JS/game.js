function Game(canvasId){
    this.canvas = document.getElementById(canvasId)
    this.ctx = this.canvas.getContext("2d")
    // this.obstacle = new Obstacle(this.game)
    // this.map = new Map (this.game)
    
}
Game.prototype.start = function(){
    var counter = 1; //contador de niveles. Tengo que sumarle uno cuando llegue a la mata
    var map = new Map (this.ctx)
    var ball = new Ball(this.ctx, map) //+ niveles
    var obstacle = new Obstacle(this.ctx, map, ball)
    var goal = new Goal(this.ctx, map, ball)
   
    setInterval(function(){
    this.clearAll();
    ball.moveBall();
    // ball.startMove()
    ball.drawBall();
    obstacle.draw();
    goal.draw();
    obstacle.colapse()
    goal.finnish()
    
    }.bind(this), 1000/60);
    
}

Game.prototype.clearAll = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

