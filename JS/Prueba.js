var canvas;
var ctx;
var mapX = 11, mapY = 13
var gw = 500/mapX;
var gh = 600/mapY;
var position = {x:0, y:0};
var adjX = 22.5; //ajusta un elemento al centro de la casilla
var adjY = 25;

///////////// funcion click

window.onload = function(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d');
    this.canvas.onmouseup = function(event){

        position.x = Math.floor(event.clientX/gw);
        position.y = Math.floor(event.clientY/gh);
        drawSquare (position.x, position.y, "red")
        ball.start()

    }
    ball.drawBall()
    object.drawObject()  
}
var realXPosition = position.x * gw;
var realYPosition = position.y * gw;

function drawSquare(x,y,color){
    ctx.fillStyle = color;
    var realX = x * gw;
    var realY = y * gh;
    ctx.fillRect(realX,realY,gw,gh);
    
}

// function background(){
//     ctx.fillStyle = 'white';
//     ctx.fillRect(0,0,500,600);
// }

/////////////////////////////// BOLA

function Ball(){
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    // this.x = 250;
    // this.y = 550;
    this.vx = 5;
    this.vy = 5;
    this.radius = 15;
    this.color = "red";
    this.x = gw*5 + adjX; //multiplico lo que mide cada casilla por el número de casilla donde quiero situarla
    this.y = gh*11 + adjY;
}


Ball.prototype.drawBall = function(){ 
    this.ctx.beginPath();
    this.ctx.fillStyle= "blue"
    this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
}

Ball.prototype.moveBall = function(){
    this.y -= this.vy;

    if(this.y + this.radius<0 || this.y - this.radius>600 || this.x + this.radius<0 || this.x - this.radius>500){
        ball.reset()   
    }
 
}

Ball.prototype.clearAll = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }


Ball.prototype.start = function(){
    
    setInterval (function(){
    // ball.clearAll();
    ball.moveBall();
    ball.drawBall();
    object.drawObject();
    object.colapse()
    
    }.bind(this), 1000/60);
    
}
var ball = new Ball();


Ball.prototype.reset = function(){
    document.location.reload();
}

///////////////////////////// OBJETO

function Object(x, y, w, h){
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.objX = gw * 5;    //x;
    this.objY = gh * 3 + adjY; //y;
    this.objW = 45;    //w;
    this.objH = 5;    //h;
    position = ["a","b"]
    this.colorObj = "black";
}

Object.prototype.drawObject = function(){
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.objX, this.objY, this.objW, this.objH);
}

Object.prototype.colapse = function(){
if(

    ball.y - ball.radius< object.objY + object.objH && 
    object.objY + object.objH <= ball.y &&
    // ball.x + ball.radius < object.objX - object.objH &&
    object.objY + object.objH <= ball.y
    ){
        ball.vy = 0;
        ball.vx= 5;
        ball.x -= ball.vx;
    }
    // else if(ball.y + ball.radius <= object.objY - object.objH){
    //     ball.vy= 0;
    //     ball.vx = 5;
    //     ball. x -= ball.vx;
    // }
    // else if(ball.x + ball.radius >= object.objx - object.objW){
    //     console.log(left)
    // }
}

var object = new Object();

var canvas = new Canvas();






// function Canvas(ctx){
//     this.ctx = ctx;
//     this.mapX = 11;
//     this.mapY = 15
//     this.gw = 500/this.mapX;
//     this.gh = 600/this.mapY;
//     this.position = {x:0, y:0};
// }
// window.onload = function(canvas){

//     canvas.onmouseup = function(event){
//         console.log("dentr")
//     this.position.x = Math.floor(event.clientX/this.gw);
//     this.position.y = Math.floor(event.clientY/this.gh);
//     canvas.drawSquare (position.x, position.y, "red")
//  }
// }

// Canvas.prototype.drawSquare = function(x,y,color){
//     this.canvasctx.fillStyle = color;
//     this.realX = x * gw;
//     this.realY = y * gh;
//     ctx.fillRect(realX,realY,gw,gh);
//     }

// Canvas.prototype.background = function(){
//     this.ctx.fillStyle = 'white';
//     this.ctx.fillRect(0,0,500,600);
// }


// var canvas = new Canvas()

