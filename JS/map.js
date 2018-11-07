function Map(ctx,obstacle) {
    this.ctx = ctx;
    this.obstacle = obstacle;
    this.position = {x: 0, y: 0};
    this.mapX = 11;
    this.mapY = 15;
    this.gw = 500 / this.mapX;
    this.gh = 600 / this.mapY;
    this.realX = this.position.x * this.gw;
    this.realY = this.position.y * this.gh;
    this.adjX = 22.5; //ajusta un elemento al centro de la casilla
    this.adjY = 25;
    this.position = {x:0, y:0};
}

