

function Game(canvasId){
    this.canvas = document.getElementById(canvasId)
    this.ctx = this.canvas.getContext("2d")
    this.mapX = 11;
    this.mapY = 15;
    this.gw = 500/this.mapX;
    this.gh = 600/this.mapY;
    this.position = {x:0, y:0};
    this.obstacle = {};
    this.ball = new Ball(this.ctx,this) //+ niveles //puedo pasarle this para coger el parametro game
}

Game.prototype.start = function(){
    var counter = 1; //contador de niveles. Tengo que sumarle uno cuando llegue a la mata
    var map = new Map (this.ctx)
    var goal = new Goal(this.ctx, map, this.ball,this)
//     var level = [
//         [
        this.obstacle = new Obstacle(this.ctx, map, this.ball, this),
//         this.obstacle = new Obstacle(this.ctx,3465,1450, map, ball, this),
//         this.obstacle = new Obstacle(this.ctx,2345,1450, map, ball, this)
//     ],
    
// ];
        // var levelCounter = 0; 
//         level[levelCounter]
        setInterval(function(){
        this.clearAll();
        this.ball.startMove()
        this.ball.drawBall();
        goal.draw();
        this.obstacle.draw();
        this.obstacle.draw()
        this.obstacle.colapse()
        goal.finnish()
        
        }.bind(this), 1000/60);
        this.click();
}
Game.prototype.click= function(){
  
    this.canvas.onmouseup = function(event){
    this.position.x = Math.floor(event.clientX/this.gw);
    this.position.y = Math.floor(event.clientY/this.gh);
    console.log("x: " + this.position.x + " y: " + this.position.y)
    console.log("x: " + Math.floor(event.clientX) + " y: " + Math.floor(event.clientY))
    if(this.ball.y === 550 &&this.position.x === this.obstacle.realPosition.x && this.position.y === this.obstacle.realPosition.y){
        if (this.obstacle.position ==="a"){
        this.obstacle.position ="b"
        } 
        else {
            this.obstacle.position ="a"
        }
    }
    }.bind(this)
}

Game.prototype.clearAll = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

