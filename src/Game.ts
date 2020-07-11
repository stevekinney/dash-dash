import Player from './Player';
import {
  isDown,
  isLeft,
  isRight,
  isUp
  } from './input';

export default class Game {
  player: Player;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.player = new Player(ctx, 64, canvas.height * 0.8, 32, 32);
    this.canvas = canvas;
    this.ctx = ctx;

    document.addEventListener('keydown', (event) => {
      if (isDown(event)) this.player.moveDown();
      if (isUp(event)) this.player.moveUp();
      if (isLeft(event)) this.player.moveLeft();
      if (isRight(event)) this.player.moveRight();
    });
  }

  render(): void {
    const { width, height } = this.canvas;
    this.ctx.clearRect(0, 0, width, height);

    this.player.render();
  }
}
