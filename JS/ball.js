function Ball(canvas){
    this.ctx = canvas;
    this.x = 250;
    this.y = 550;
    this.vx = 5;
    this.vy = 5;
    this.radius = 15;
    this.color = "red";
    // this.translation = true;
    // this.x = gw*5 + adjX; //multiplico lo que mide cada casilla por el número de casilla donde quiero situarla
    // this.y = gh*11 + adjY;
}


Ball.prototype.drawBall = function(){ 
    this.ctx.beginPath();
    this.ctx.fillStyle= "blue"
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
}

Ball.prototype.moveBall = function(){
    this.y -= this.vy;

    if(this.y + this.radius<0 || this.y - this.radius>600 || this.x + this.radius<0 || this.x - this.radius>500){
        this.reset()   
    }
    // console.log(this.y)
 
}

Ball.prototype.reset = function(){
    document.location.reload();
}





      
