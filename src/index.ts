import Game from './Game';
import { canvas, ctx } from './canvas';

const game = new Game(canvas, ctx);

const main = () => {
  game.render();
  requestAnimationFrame(main);
};

main();
