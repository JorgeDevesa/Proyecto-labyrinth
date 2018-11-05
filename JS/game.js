

function Game(canvasId){
    this.canvas = document.getElementById(canvasId)
    this.ctx = this.canvas.getContext("2d")
    // this.obstacle = new Obstacle(this.game)
    // this.map = new Map (this.game)
    this.mapX = 11;
    this.mapY = 13;
    this.gw = 500/this.mapX;
    this.gh = 600/this.mapY;
    this.position = {x:0, y:0};
    // this.adjX = 22.5; //ajusta un elemento al centro de la casilla
    // this.adjY = 25;
    
}

    // canvas = document.getElementById("myCanvas");
    //  ctx = canvas.getContext('2d');
   Game.prototype.click= function(){
  
    this.canvas.onmouseup = function(event){
    this.position.x = Math.floor(event.clientX / this.gw);
    this.position.y = Math.floor(event.clientY / this.gh);
    console.log("x: " + this.position.x + " y: " + this.position.y)
    }.bind(this)
}

Game.prototype.start = function(){
    var counter = 1; //contador de niveles. Tengo que sumarle uno cuando llegue a la mata
    var map = new Map (this.ctx)
    var ball = new Ball(this.ctx, map) //+ niveles
    var obstacle = new Obstacle(this.ctx, map, ball)
    var goal = new Goal(this.ctx, map, ball)

    setInterval(function(){
        this.click();
    this.clearAll();
    ball.moveBall();
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

