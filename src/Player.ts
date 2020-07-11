import Character from '~Character';

export default class Player extends Character {
  image = new Image(this.width, this.height);

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
  ) {
    super(ctx, x, y, width, height);
    this.image.src = require('~images/owlet-monster/owlet-monster.png');
  }

  render(): void {
    this.ctx.drawImage(this.image, this.x, this.y);
  }
}
