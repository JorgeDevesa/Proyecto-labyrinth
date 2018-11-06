function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.mapX = 11;
  this.mapY = 15;
  this.gw = 500 / this.mapX;
  this.gh = 600 / this.mapY;
  this.position = { x: 0, y: 0 };
  this.obstacle = {};
  this.ball = new Ball(this.ctx, this); 
  this.levelCounter = 0;
  this.map = new Map(this.ctx);
  this.goal = new Goal(this.ctx, this.map, this.ball, this);
  this.level = [
    [
    new Obstacle(this.ctx, this.map, this.ball, this, 5, 3,"a")
    ],

    [
      new Obstacle(this.ctx, this.map, this.ball, this,5,6,"a"),
      new Obstacle(this.ctx,this.map, this.ball, this, 5,3,"b")
    ]
  ];
}

Game.prototype.clickColapse = function(obs,i) {
    if (
      this.ball.y === 550 &&
      this.position.x === obs.realPosition.x &&
      this.position.y === obs.realPosition.y
    ) {
      console.log(i)
      if (this.obstacle.position === "a") {
        this.obstacle.position = "b";
      } else { 
        this.obstacle.position = "a";
      }
    }
}

Game.prototype.start = function() {

  
  setInterval(
    function() {
      if(this.canvas!==undefined){
        this.canvas.onmouseup = function(event) {
          this.position.x = Math.floor(event.clientX / this.gw);
          this.position.y = Math.floor(event.clientY / this.gh);
          console.log("x: " + this.position.x, " y: " + this.position.y);
          console.log("x: " + Math.floor(event.clientX) + " y: " + Math.floor(event.clientY)
          );
        }.bind(this);
      }
      this.clearAll();
      this.goal.draw();
      this.goal.finnish();
      this.ball.startMove();
      this.ball.drawBall();
      this.ball.moveBall();
      this.level[this.levelCounter].forEach(function(obs,i){
          this.clickColapse(obs,i);
          obs.draw();
          obs.colapse()
        }.bind(this))
      }.bind(this),
      1000 / 60
      );
};

Game.prototype.clearAll = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
