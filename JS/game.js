function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.mapX = 11;
  this.mapY = 15; //15
  this.gw = 500 / this.mapX;
  this.gh = 600 / this.mapY;
  this.position = { x: 0, y: 0 };
  this.obstacle = {};
  this.levelCounter = 0;
  this.counterDown = 7;
  this.ball = new Ball(this.ctx, this, this.counter,); 
  this.map = new Map(this.ctx);
  this.counter = new Counter(this.ctx, this,this.ball, this.counterDown);
  this.goal = new Goal(this.ctx, this.map, this.ball, this, this.counter);
  this.level = [
    [
     
      new Obstacle(this.ctx, this.map, this.ball, this, 5, 1,"b")

    ],
    [
      new Obstacle(this.ctx, this.map, this.ball, this,5,7,"a"),
      new Obstacle(this.ctx,this.map, this.ball, this, 9,8,"b"),
      new Obstacle(this.ctx,this.map, this.ball, this, 9,1,"b")
    ],
    [
      new Obstacle(this.ctx, this.map, this.ball, this,1,8,"a"),
      new Obstacle(this.ctx,this.map, this.ball, this, 5,7,"b"),
      new Obstacle(this.ctx,this.map, this.ball, this, 1,3,"b"),
      new Obstacle(this.ctx,this.map, this.ball, this, 4,3,"b"),
      new Obstacle(this.ctx,this.map, this.ball, this, 5,1,"b")
    ],
    
  ];
}

Game.prototype.clickColapse = function(obs,i) {
    if (
      this.ball.y === 550 &&
      (this.position.x)=== obs.realPosition.x &&
      (this.position.y) === obs.realPosition.y
    ) {
      // console.log(this.level[this.levelCounter][i].position)
      if (this.level[this.levelCounter][i].position === "a") {
        this.level[this.levelCounter][i].position = "b"
      } else { 
        this.level[this.levelCounter][i].position = "a"
      }
      this.position.x = 0
      this.position.y = 0
}
}

Game.prototype.start = function() {
  this.counter.draw()
  this.counter.counterDown()
  setInterval(

    function() {
            if(this.canvas!==undefined){ ///////// Refactorizar
              this.canvas.onmouseup = function(event) {
                this.position.x = Math.floor((event.clientX - 468)/ this.gw);
                this.position.y = Math.floor((event.clientY - 92)/ this.gh);
                // console.log("x: " + (this.position.x - 10), " y: " + (this.position.y - 2));
                console.log("x: " + (Math.floor((event.clientX - 462)/ this.gw)) + " y: " + (Math.floor((event.clientY - 101)/ this.gh)));
              }.bind(this);   
            }                           /////////// hasta aquí

      this.clearAll();
      this.counter.draw()
      this.goal.draw();
      this.goal.finnish();
      this.ball.startMove();
      this.ball.drawBall();
      this.ball.moveBall();
      
      this.level[this.levelCounter].forEach(function(obs,i){
          this.clickColapse(obs,i);
          obs.draw(obs.position);
          obs.colapse()
        }.bind(this))
        // console.log(this.ball.vx)
      }.bind(this),
      1000 / 60
      );
   
};

Game.prototype.clearAll = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
