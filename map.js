function Map(ctx) {
    this.ctx = ctx;
    this.position = {x: 0, y: 0};
    this.mapX = 11;
    this.mapY = 15;
    this.gw = 500 / this.mapX;
    this.gh = 600 / this.mapY;
    this.realX = this.position.x * this.gw;
    this.realY = this.position.y * this.gh;


}

Map.prototype.drawSquare = function(x, y, color) {
  this.ctx.fillStyle = color;
  this.ctx.fillRect(realX, realY, gw, gh);
  console.log(drawSquare)
};

Map.prototype.onmouseup = function(event) {
  position.x = Math.floor(event.clientX / gw);
  position.y = Math.floor(event.clientY / gh);
  this.drawSquare(position.x, position.y, "red");
};

// Map.function.background = function() {
//   ctx.fillStyle = "white";
//   ctx.fillRect(0, 0, 500, 600);
// };
