export const COLS = 10;
export const ROWS = 20;
export const BLOCK_SIZE = 30;
export const LINES_PER_LEVEL = 10;

export class KEY {
  static readonly ESC = 27;
  static readonly SPACE = 32;
  static  LEFT = 37;
  static  RIGHT = 39;
  static  DOWN = 40;
  static UP = 38;
  static E = 69;
  static R = 82;
  static D = 68;
  static F = 70;
}

export class POINTS {
  static readonly SINGLE = 100;
  static readonly DOUBLE = 300;
  static readonly TRIPLE = 500;
  static readonly TETRIS = 800;
  static readonly SOFT_DROP = 1;
  static readonly HARD_DROP = 2;
}

export class SHAPES {
  static readonly JShape = [[2, 0, 0], [2, 2, 2], [0, 0, 0]];
  static readonly OShape = [[2, 2, 0], [2, 2, 0], [0, 0, 0]];
  static readonly LShape = [[0, 0, 0], [2, 2, 2], [2, 0, 0]];
  static readonly ZShape = [[0, 0, 0], [2, 2, 0], [0, 2, 2]];
  static readonly TShape = [[2, 2, 2], [0, 2, 0], [0, 0, 0]];
  static readonly SShape = [[0, 0, 0], [0, 2, 2], [2, 2, 0]];
}

export const SHAPE = [
  [[2, 0, 0], [2, 2, 2], [0, 0, 0]],
  [[2, 2, 0], [2, 2, 0], [0, 0, 0]],
  [[0, 0, 0], [2, 2, 2], [2, 0, 0]],
  [[0, 0, 0], [2, 2, 0], [0, 2, 2]],
  [[2, 2, 2], [0, 2, 0], [0, 0, 0]],
  [[0, 0, 0], [0, 2, 2], [2, 2, 0]]
];

export const COLORS = [
  'none',
  'cyan',
  'blue',
  'orange',
  'yellow',
  'green',
  'purple',
  'red'
];

export class LEVEL {
  static readonly 0 = 800;
  static readonly 1 = 720;
  static readonly 2 = 630;
  static readonly 3 = 550;
  static readonly 4 = 470;
  static readonly 5 = 380;
  static readonly 6 = 300;
  static readonly 7 = 220;
  static readonly 8 = 130;
  static readonly 9 = 100;
  static readonly 10 = 80;
  static readonly 11 = 80;
  static readonly 12 = 80;
  static readonly 13 = 70;
  static readonly 14 = 70;
  static readonly 15 = 70;
  static readonly 16 = 50;
  static readonly 17 = 50;
  static readonly 18 = 50;
  static readonly 19 = 30;
  static readonly 20 = 30;
  // 29+ is 20ms
}
