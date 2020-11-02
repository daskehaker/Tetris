import { KeyboardControl } from './../../Bridge/KeyboardControl';
import { UserService } from 'src/app/services/user.service';
import { Player } from './../../user/player';
import { PieceDto } from './../../Dto/PieceDto';
import { IPiece } from './../../shared/interfaces';
import { BoardService } from '../../services/board.service';
import { Component, OnInit, ElementRef, ViewChild, HostListener, Input } from '@angular/core';
import { BLOCK_SIZE, ROWS, COLS, KEY, POINTS, COLORS, LINES_PER_LEVEL, LEVEL } from '../../shared/constants';
import { Piece } from 'src/app/models/piece';
import { Key } from 'protractor';
import { RouterState } from '@angular/router';
import { Board } from 'src/app/models/board';
import { Time, getSpeed } from 'src/app/models/time';
import { Points } from 'src/app/shared/points';
import { MessageDto } from '../../Dto/MessageDto';
import { ChatService } from '../../services/chat.service';
import { Context, defender1, defender2 } from '../../Strategy/strategy'
import { Direct } from 'protractor/built/driverProviders';
import { Director, PieceBuilder } from '../../Builder/builder';
import { SpecialPiece } from '../../models/SpecialPiece';
import { Bot } from 'src/app/Singleton/gameBot';

@Component({
  selector: 'game-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() boardService: BoardService;
  @Input() userService: UserService;

  // Get reference to the canvas.
  @ViewChild('board', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  player = new Player();
  ctx: CanvasRenderingContext2D;
  board: number[][];
  piece: Piece;
  special: SpecialPiece;
  next: Piece;
  pieceDto: PieceDto;
  time = new Time({ start: 0, elapsed: 0, level: 1000 });
  requestId: number;
  keyboardControl = new KeyboardControl();

  //neveikia
  // moves = {
  //   [KEY.LEFT]: (p: IPiece): IPiece => ({ ...p, x: p.x - 1 }),
  //   [KEY.RIGHT]: (p: IPiece): IPiece => ({ ...p, x: p.x + 1 }),
  //   [KEY.DOWN]: (p: IPiece): IPiece => ({ ...p, y: p.y + 1 }),
  //   [KEY.SPACE]: (p: IPiece): IPiece => ({ ...p, y: p.y + 1 }),
  //   [KEY.UP]: (p: IPiece): IPiece => this.boardService.rotate(p)
  // };
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe((res: any) => {
     this.player = new Player({id: res.userId, name: res.UserName})

    })
    this.initBoard();
  }

 @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    event.preventDefault();
    var p = Object.assign({}, this.piece.dto)
    switch(event.keyCode) {
      case KEY.RIGHT: {
        // p.x++;
        p = this.keyboardControl.right(p);
         break;
        }
        case KEY.LEFT: {
          //p.x--;
          p = this.keyboardControl.left(p);
          break;
        }
        case KEY.DOWN: {
          //p.y++;
          p = this.keyboardControl.down(p);
          break;
        }
        case KEY.UP: {
          //p = this.boardService.rotate(p);
          p = this.keyboardControl.rotate(p)
        }
        default: {
          //statements;
          break;
        }
      }
    this.move(p);
  }

  initBoard() {
    // Get the 2D context that we draw on.
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // Calculate size of canvas from constants.
    this.ctx.canvas.width = COLS * BLOCK_SIZE;
    this.ctx.canvas.height = ROWS * BLOCK_SIZE;

    this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

    this.boardService.getEmptyBoard();
  }

  //play() {
  //  this.board = this.boardService.getBoardById(this.player.Id)
  //  this.piece = new Piece(this.ctx);
  //  //this.piece.draw();
  //  this.animate();
  //  this.boardService.broadcastPiece(this.piece.dto);
  //}

  animate(now = 0) {
    // Update elapsed time.
    this.time.elapsed = now - this.time.start;
    // If elapsed time has passed time for current level
    if (this.time.elapsed > this.time.level) {
      // Reset start time
      this.time.start = now;
      this.time = getSpeed(this.time, this.player.level);
      if(!this.drop()){
        this.gameOver();
        return;
      }
    }
    this.draw();
    this.requestId = requestAnimationFrame(this.animate.bind(this));
  }

  move(p: IPiece) {
    if(this.boardService.valid(p, this.board)){
      this.piece.move(p)
      this.piece.shape = p.shape;
      this.piece.x = p.x;
      this.piece.y = p.y;
      this.boardService.broadcastPiece(this.piece.dto);
    } else console.log("not valid", p, this.piece)
  }

  drop(): boolean {
    var p = Object.assign({}, this.piece.dto)
    p.y++;
    if(this.boardService.valid(p, this.board)){
      this.piece.move(p)
      this.boardService.broadcastPiece(this.piece.dto);
    } else {
      this.freeze();
      this.clearLines();
      this.boardService.broadcastBoard(this.board);
      if (this.piece.y === 0) {
        // Game over
        return false;
      }
      this.piece = new Piece(this.ctx)
      //this.piece = this.next;
      //this.next = new Piece(this.ctx);
      //this.next.drawNext(this.ctxNext);
    }
    return true;
  }


  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.piece.draw();
    this.drawBoard();
  }

  drawBoard() {
    this.board.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.ctx.fillStyle = COLORS[value];
          this.ctx.fillRect(x, y, 1, 1);
        }
      });
    });
  }

  ///when piece cannot move anymore
  freeze() {
    this.piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0) {
          this.board[y + this.piece.y][x + this.piece.x] = value;
        }
      });
    });
    //console.table(this.board);
  }

  clearLines(){
    let lines = 0;
    this.board.forEach((row, y) => {
      // If every value is greater than 0.
      if (row.every(value => value > 0)) {
        lines++;
        // Remove the row.
        this.board.splice(y, 1);
        // Add a zero filled at the top.
        this.board.unshift(Array(COLS).fill(0));
      }
    });
    if (lines > 0) {
      // Add points if we cleared some lines
      this.player.points += this.getLineClearPoints(lines, this.player.level);
      this.player.lines += lines;
        // If we have reached the lines per level
      if (this.player.lines >= 1/*LINES_PER_LEVEL*/) {
        // Goto next level
        this.player.level++;
        // Remove lines so we start working for the next level
        this.player.lines -= 1//LINES_PER_LEVEL;
        // Increase speed of game.
        this.time.level = LEVEL[this.player.level];
      }
    }
  }

  gameOver() {
    cancelAnimationFrame(this.requestId);
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(1, 3, 8, 1.2);
    this.ctx.font = '1px Arial';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('GAME OVER', 1.8, 4);
    const s=Bot.getInstance();
    this.chatService.broadcastMessage(s.gameOverMessage(this.player));
  }

  getLineClearPoints(lines: number, level: number): number {
    const lineClearPoints = lines === 1 ? Points.SINGLE :
          lines === 2 ? Points.DOUBLE :
          lines === 3 ? Points.TRIPLE :
          lines === 4 ? Points.TETRIS : 0;
    return (level + 1) * lineClearPoints;
  }

  defend1() {

    const context = new Context(new defender1());
    context.defend(this.chatService, this.player.name);

  }

  defend2() {

    const context = new Context(new defender2());
    context.defend(this.chatService, this.player.name);

  }


  play() {
    this.board = this.boardService.getBoardById(this.player.Id)
    this.piece = new Piece(this.ctx);
    console.log("play");
    //this.piece.draw();
    this.animate();
    this.boardService.broadcastPiece(this.piece.dto);
  }

  bomb(bomb: SpecialPiece) {
    this.piece.setShape(bomb.shape);
    this.piece.setColor(bomb.color);
    this.piece.setRadius(bomb.radius);

  }

  


  dropBomb() {



    const director = new Director();
    const builder = new PieceBuilder();
    director.setBuilder(builder);

    director.buildBomb();
    const build = builder.getSpecialPiece();
    console.log(build);
    this.bomb(build);
  }

}
