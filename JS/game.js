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
}

Game.prototype.start = function() {
  var map = new Map(this.ctx);
  var goal = new Goal(this.ctx, map, this.ball, this);
 
   var level = [
    [
    this.obstacle = new Obstacle(this.ctx, map, this.ball, this, 5, 3,"a")
    ],

    [
    this.obstacle1 = new Obstacle(this.ctx,map, this.ball, this, 5,3,"b"),
    this.obstacle2 = new Obstacle(this.ctx, map, this.ball, this,5,6,"a")
    ]
  ];

  setInterval(
    function() {
      this.clearAll();
      goal.draw();
      goal.finnish();
      this.ball.startMove();
      this.ball.drawBall();
      this.ball.moveBall();
      level[this.levelCounter].forEach(function(obs, i, arr){
          obs.draw();
          obs.colapse()
          obs.click()
      }.bind(this))
   
      
      
    }.bind(this),
    1000 / 60
  );
};

Game.prototype.clearAll = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
