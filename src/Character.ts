import { canvas } from './canvas';

export default class Character {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  velocity: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    x = canvas.width / 2,
    y = canvas.height / 2,
    width = 10,
    height = 10,
    initialVelocity = 5,
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocity = initialVelocity;
  }

  get top(): number {
    return this.y;
  }

  get bottom(): number {
    return this.top + this.height;
  }

  get left(): number {
    return this.x;
  }

  get right(): number {
    return this.left + this.width;
  }

  move({ x = 0, y = 0 }: Geometry.coordinate): Character {
    this.x += x;
    this.y += y;

    return this;
  }

  moveTo({ x, y }: Geometry.coordinate): Character {
    if (x !== undefined) this.x = x;
    if (y !== undefined) this.y = y;

    return this;
  }

  moveUp(y = -this.velocity): Character {
    if (this.top + y < 0) return this.moveTo({ y: 0 });
    return this.move({ y });
  }

  moveDown(y = this.velocity): Character {
    if (this.bottom + y > this.canvas.height)
      return this.moveTo({ y: this.canvas.height - this.height });
    return this.move({ y });
  }

  moveRight(x = this.velocity): Character {
    if (this.right + x > this.canvas.width)
      return this.moveTo({ x: this.canvas.width - this.width });
    return this.move({ x });
  }

  moveLeft(x = -this.velocity): Character {
    if (this.left + x < 0) return this.moveTo({ x: 0 });
    return this.move({ x });
  }

  render(): void {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.stroke();
  }
}
