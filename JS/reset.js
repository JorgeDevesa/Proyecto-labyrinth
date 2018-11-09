function Reset(ctx, obs, ball, counter, game){
this.ctx = ctx;
this.obs = obs;
this.ball = ball;
this.counter = counter;
this.game = game;
}
Reset.prototype.resetCounterDown = function(){
    if(this.game.counterDown === 0){
      this.game.counterDown = 0
      if (this.game.levelCounter < 3){
        this.game.counterDown = 10;}
        else{
          this.game.counterDown =15}
      this.x = 260;
      this.y = 550;
      this.vx = 0;
      this.vy = 0;
  
  
  this.obstacle.status = false;
      }
      // alert("out of time! Play again?")
    }
  