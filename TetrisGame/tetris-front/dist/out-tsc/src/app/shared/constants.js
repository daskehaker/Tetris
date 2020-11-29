export const COLS = 10;
export const ROWS = 20;
export const BLOCK_SIZE = 30;
export const LINES_PER_LEVEL = 10;
export class KEY {
}
KEY.ESC = 27;
KEY.SPACE = 32;
KEY.LEFT = 37;
KEY.RIGHT = 39;
KEY.DOWN = 40;
KEY.UP = 38;
KEY.E = 69;
KEY.R = 82;
KEY.D = 68;
KEY.F = 70;
export class POINTS {
}
POINTS.SINGLE = 100;
POINTS.DOUBLE = 300;
POINTS.TRIPLE = 500;
POINTS.TETRIS = 800;
POINTS.SOFT_DROP = 1;
POINTS.HARD_DROP = 2;
export class SHAPES {
}
SHAPES.JShape = [[2, 0, 0], [2, 2, 2], [0, 0, 0]];
SHAPES.OShape = [[2, 2, 0], [2, 2, 0], [0, 0, 0]];
SHAPES.LShape = [[0, 0, 0], [2, 2, 2], [2, 0, 0]];
SHAPES.ZShape = [[0, 0, 0], [2, 2, 0], [0, 2, 2]];
SHAPES.TShape = [[2, 2, 2], [0, 2, 0], [0, 0, 0]];
SHAPES.SShape = [[0, 0, 0], [0, 2, 2], [2, 2, 0]];
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
}
LEVEL[0] = 800;
LEVEL[1] = 720;
LEVEL[2] = 630;
LEVEL[3] = 550;
LEVEL[4] = 470;
LEVEL[5] = 380;
LEVEL[6] = 300;
LEVEL[7] = 220;
LEVEL[8] = 130;
LEVEL[9] = 100;
LEVEL[10] = 80;
LEVEL[11] = 80;
LEVEL[12] = 80;
LEVEL[13] = 70;
LEVEL[14] = 70;
LEVEL[15] = 70;
LEVEL[16] = 50;
LEVEL[17] = 50;
LEVEL[18] = 50;
LEVEL[19] = 30;
LEVEL[20] = 30;
//# sourceMappingURL=constants.js.map