function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  //todo: consider removing hardcoded values, and use GameConfig object instead
  this.mapX = 11;
  this.mapY = 15; //15
  this.gw = 500 / this.mapX;
  this.gh = 600 / this.mapY;
  this.position = { x: 0, y: 0 };
  this.obstacle = {};
  this.levelCounter = 0;
  this.counterDown = 15;
  this.ball = new Ball(this.ctx, this, this.counter);
  this.map = new Map(this.ctx);
  this.counter = new Counter(this.ctx, this, this.ball, this.counterDown);
  this.goal = new Goal(this.ctx, this.map, this.ball, this, this.counter);
  this.startGame = new StartGameButton(this.ctx,this)
  //todo: consider extracting this code into a config file
  this.level = [
    [ 
      new Obstacle(this.ctx, this.map, this.ball, this, false, 5, 1, "b", 50),
      new Obstacle(
        this.ctx,
        this.map,
        this.ball,
        this,
        false,
        1,
        6,
        "c",
        100,
        5,
        0
      )
    ],
    // [new startGameButton(this.ctx)]
    [
      new Obstacle(this.ctx, this.map, this.ball, this, false, 5, 7, "a", 50),
      new Obstacle(this.ctx, this.map, this.ball, this, false, 9, 7, "b", 50),
      new Obstacle(this.ctx, this.map, this.ball, this, false, 9, 1, "b", 50)
    ],
    [
      new Obstacle(this.ctx, this.map, this.ball, this, false, 1, 8, "a", 50),
      new Obstacle(this.ctx, this.map, this.ball, this, false, 5, 8, "b", 50),
      new Obstacle(this.ctx, this.map, this.ball, this, false, 1, 4, "b", 50),
      new Obstacle(this.ctx, this.map, this.ball, this, false, 5, 4, "b", 50),
      new Obstacle(this.ctx, this.map, this.ball, this, false, 5, 1, "b", 50)
    ],
    [
      new Obstacle(this.ctx, this.map, this.ball, this, false, 5, 3, "a", 50),
      new Obstacle(this.ctx, this.map, this.ball, this, false, 8, 3, "b", 50),
      new Obstacle(this.ctx, this.map, this.ball, this, false, 1, 3, "b", 50),
      new Obstacle(this.ctx, this.map, this.ball, this, false, 8, 7, "b", 50),
      new Obstacle(this.ctx, this.map, this.ball, this, false, 3, 7, "b", 50),
      new Obstacle(this.ctx, this.map, this.ball, this, false, 3, 3, "b", 50),
      new Obstacle(this.ctx, this.map, this.ball, this, false, 3, 9, "b", 50),
      new Obstacle(this.ctx, this.map, this.ball, this, false, 1, 9, "b", 50),
      new Obstacle(this.ctx, this.map, this.ball, this, false, 1, 6, "c", 100, 5, 0)
    ]
    
    // [new GameOver(this.ctx)]
  ];
}

//todo: please consider moving this into de Obstacle class
Game.prototype.clickColapse = function(obs, i) {
  if (
    this.ball.y === 550 &&
    this.position.x === obs.realPosition.x &&
    this.position.y === obs.realPosition.y
  ) {
    // console.log(this.level[this.levelCounter][i].position)
    if (this.level[this.levelCounter][i].position === "a") {
      this.level[this.levelCounter][i].position = "b";
    } else if (this.level[this.levelCounter][i].position === "b") {
      this.level[this.levelCounter][i].position = "a";
    }
    this.position.x = 0;
    this.position.y = 0;
  }
};

Game.prototype.start = function() {
  this.counter.draw();
  this.counter.counterDown();
  setInterval(
    //todo: consider adding a MouseManager object
    function() {
      if (this.canvas !== undefined) {
        ///////// Refactorizar
        this.canvas.onmouseup = function(event) {
          this.position.x = Math.floor((event.clientX - 468) / this.gw);
          this.position.y = Math.floor((event.clientY - 92) / this.gh);

        }.bind(this);
      } /////////// hasta aquí

      this.clearAll();
      this.counter.draw();
      this.goal.draw();
      this.goal.finnish();
      this.ball.startMove();
      this.ball.drawBall();
      this.ball.moveBall();
      this.level[this.levelCounter].forEach(
        function(obs, i) {
          this.clickColapse(obs, i);
          new Colision(this.ctx, this.ball, obs).bottom();

          obs.draw(obs.position);
        }.bind(this)
      );
    }.bind(this),
    1000 / 60
  );
};
console.log(this.levelCounter);
Game.prototype.clearAll = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
