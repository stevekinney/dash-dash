const matches = (keycode: number) => (event: KeyboardEvent) =>
  event.keyCode === keycode;

export const isLeft = matches(37);
export const isUp = matches(38);
export const isRight = matches(39);
export const isDown = matches(40);
