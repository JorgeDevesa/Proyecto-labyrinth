function DrawObstacles(ctx) {
    this.ctx = ctx;
  }
  
  DrawObstacles.prototype.fixedObstacles = function(
    ctx,
    x,
    y,
    width,
    height,
    radius,
    color,
    rotation
  ) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate(rotation);
    ctx.translate(-(x + width / 2), -(y + height / 2));
    ctx.moveTo(x, y + radius);
    ctx.strokeStyle = color;
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };
  
  DrawObstacles.prototype.motionObstacles = function(
    ctx,
    x,
    y,
    width,
    height,
    radius,
    color,
    vx,
    vy
  ) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.fillStyle = color;
    ctx.lineTo(x, y + (height + 4) - radius);
    ctx.quadraticCurveTo(x, y + (height + 4), x + radius, y + (height + 4));
    ctx.lineTo(x + (width) - radius, y + (height + 4));
    ctx.quadraticCurveTo(
      x + (width),
      y + (height + 4),
      x + (width),
      y + (height + 4) - radius
    );
    ctx.lineTo(x + (width), y + radius);
    ctx.quadraticCurveTo(x + (width), y, x + (width) - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.fill();
    ctx.closePath();
  };
  
  DrawObstacles.prototype.moveObstacles = function(obs) {
      obs.objX += obs.vx
    if (obs.objX >= 400 && obs.vx === 5) {
      obs.vx *= -1;
    } 
    if (obs.objX <= 50 && obs.vx === -5) {
        obs.vx *= -1
    }
  };
  