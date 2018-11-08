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
  ctx.lineTo(x + (width + 20) - radius, y + (height + 4));
  ctx.quadraticCurveTo(
    x + (width + 20),
    y + (height + 4),
    x + (width + 20),
    y + (height + 4) - radius
  );
  ctx.lineTo(x + (width + 20), y + radius);
  ctx.quadraticCurveTo(x + (width + 20), y, x + (width + 20) - radius, y);
  ctx.lineTo(x + radius, y);
  ctx.quadraticCurveTo(x, y, x, y + radius);
  ctx.fill();
  ctx.closePath();
};

DrawObstacles.prototype.moveObstacles = function(obs) {
    obs.xMotion += obs.vxMotion
  if (obs.xMotion >= 400 && obs.vxMotion === 5) {
    obs.vxMotion *= -1;
  } 
  if (obs.xMotion <= 50 && obs.vxMotion === -5) {
      obs.vxMotion *= -1
  }
};
