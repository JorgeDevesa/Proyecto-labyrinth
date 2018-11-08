function Counter(ctx, game, ball,t){
this.ctx = ctx;
this.game = game;
this.ball = ball

}

Counter.prototype.draw = function (){
    this.ctx.fillStyle="white"
    this.ctx.font = "bold 22px sans-serif";
    this.ctx.fillText(this.game.counterDown,450,40);
}

Counter.prototype.counterDown = function(){
    
    setInterval(function(){
        this.game.counterDown
        this.game.counterDown--

        this.ball.resetCounterDown()
        // console.log(this.game.counterDown)
    }.bind(this),1000)
}
