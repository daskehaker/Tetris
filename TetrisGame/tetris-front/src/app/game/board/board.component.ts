import { PieceDto } from '../../Dto/PieceDto';
import { BoardService } from '../../services/board.service';
import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { BLOCK_SIZE, ROWS, COLS, KEY } from '../../shared/constants';

@Component({
  selector: 'game-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  // Get reference to the canvas.
  @ViewChild('board', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D;
  points: number;
  lines: number;
  level: number;
  board: number[][];
  piece: PieceDto;

  constructor (private boardService: BoardService) {}

  ngOnInit(): void {
    this.initBoard();
    this.boardService.retrieveMapperObject().subscribe((receivedObj: PieceDto) => {
      this.piece = receivedObj;
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.draw(receivedObj)
    });
  }


  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == KEY.LEFT) {
      // If the keyCode exists in our moves stop the event from bubbling.
      event.preventDefault();
      // Get the next state of the piece.
      this.boardService.MoveLeft(this.piece);
      // Move the piece
      // Clear the old position before drawing
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      // Draw the new position.
    }
    if (event.keyCode == KEY.RIGHT) {
      // If the keyCode exists in our moves stop the event from bubbling.
      event.preventDefault();
      // Get the next state of the piece.
      this.boardService.MoveRight(this.piece);
      // Move the piece
      // Clear the old position before drawing
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      // Draw the new position.
    }
    if (event.keyCode == KEY.DOWN) {
      // If the keyCode exists in our moves stop the event from bubbling.
      event.preventDefault();
      // Get the next state of the piece.
      this.boardService.MoveDown(this.piece);
      // Move the piece
      // Clear the old position before drawing
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      // Draw the new position.
    }
  }

  draw(obj: PieceDto) {
    this.ctx.fillStyle = obj.color;
    obj.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          // this.x & this.y = position on the board
          // x & y position are the positions of the shape
          this.ctx.fillRect(obj.x + x, obj.y + y, 1, 1);
        }
      });
    });
  }

  initBoard() {
    // Get the 2D context that we draw on.
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // Calculate size of canvas from constants.
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;

    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

    this.boardService.getEmptyBoard().subscribe((res: number[][]) => this.board=res);
  }

  play() {
    this.boardService.broadcastPiece();
  }
}
