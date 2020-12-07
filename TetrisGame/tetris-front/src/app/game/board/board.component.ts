import { PlayingState } from './../../State/PlayingState';
import { EndedState } from './../../State/EndedState';
import { PendingState } from './../../State/PendingState';
import { IState } from './../../State/IState';
import { BombIterator } from './../../Iterator/BombIterator';
import { Collection } from './../../Iterator/collection';
import { UserService } from 'src/app/services/user.service';
import { Player } from './../../user/player';
import { PieceDto } from './../../Dto/PieceDto';
import { IPiece } from './../../shared/interfaces';
import { BoardService } from '../../services/board.service';
import { Component, OnInit, ElementRef, ViewChild, HostListener, Input, EventEmitter } from '@angular/core';
import { BLOCK_SIZE, ROWS, COLS, KEY, POINTS, COLORS, LINES_PER_LEVEL, LEVEL } from '../../shared/constants';
import { Piece } from 'src/app/models/piece';
import { Time, getSpeed } from 'src/app/models/time';
import { Points } from 'src/app/shared/points';
import { ChatService } from '../../services/chat.service';
import { Context, defender1, defender2 } from '../../Strategy/strategy'
import { Director, PieceBuilder } from '../../Builder/builder';
import { SpecialPiece } from '../../models/SpecialPiece';
import { Bot } from 'src/app/Singleton/gameBot';
import { KeyboardControl } from './../../Bridge/KeyboardControl';
import { Oponent } from 'src/app/Prototype/Oponent';
import { Facade } from 'src/app/Facade/facade';
import { Exploder } from 'src/app/Template/Exploder';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'game-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent extends Exploder implements OnInit  {
  @Input() boardService: BoardService;
  @Input() userService: UserService;

  // Get reference to the canvas.
  @ViewChild('board', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  facade = new Facade()
  ctx: CanvasRenderingContext2D;
  board: number[][];
  piece: Piece;
  special: SpecialPiece;
  next: Piece;
  pieceDto: PieceDto;
  time = new Time({ start: 0, elapsed: 0, level: 1000 });
  requestId: number;
  keyboardControl = new KeyboardControl();
  currentState: IState = new PendingState();

  oponents: Oponent[] = [{id: "1", name: "Petras"}, {id: "1", name: "Jonas"}, {id: "1", name: "Ona"}]
  
  constructor(private chatService: ChatService) {
    super()
    
  }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe((res: any) => {
     this.facade = new Facade(new Player({id: res.userId, name: res.UserName}));

    })
    this.initBoard();
  }

  explodeBoard(event){
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    super.templateMethodSetExploder(event, rect);

    let collection = new Collection(this.board)

    let iterator = super.getIterator(collection);

    this.doExplosion(iterator);
  }
  
  doExplosion(iterator: BombIterator){
    for(let i=0; i<9; i++){
      super.templateMethodDoExplosion(iterator)
    }
  }
  changeCellValue(iterator: BombIterator){
    this.board[iterator.currentY()][iterator.currentX()]=0;
  }
  changeIteratorSide(iterator: BombIterator){
    iterator.setSide(this.getRandomInt(4));
  }
  changeIteratoNext(iterator: BombIterator){
    iterator.next();
  }

  logCoordinates(x: number, y: number){
    console.log(`Lentos koordinatės X: ${x} Y: ${y}`)
  }

  payForExploder(){
    this.facade.changePlayerPoints(-100)
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
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

  animate(now = 0) {
    // Update elapsed time.
    this.time.elapsed = now - this.time.start;
    // If elapsed time has passed time for current level
    if (this.time.elapsed > this.time.level) {
      // Reset start time
      this.time.start = now;
      this.time = getSpeed(this.time, this.facade.PlayerSystem.getPlayerLevel());
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
      this.facade.PlayerSystem.changePlayerPoints(this.getLineClearPoints(lines, this.facade.PlayerSystem.getPlayerLevel()))
      this.facade.PlayerSystem.changePlayerLines(lines);
        // If we have reached the lines per level
      if (this.facade.PlayerSystem.getPlayerLines() >= 1/*LINES_PER_LEVEL*/) {
        // Goto next level
        this.facade.PlayerSystem.changePlayerLevel(1);
        // Remove lines so we start working for the next level
        this.facade.PlayerSystem.changePlayerLines(-1)//LINES_PER_LEVEL;
        // Increase speed of game.
        this.time.level = LEVEL[this.facade.PlayerSystem.getPlayerLevel()];
      }
    }
  }

  gameOver() {
    this.currentState = new EndedState()
    cancelAnimationFrame(this.requestId);
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(1, 3, 8, 1.2);
    this.ctx.font = '1px Arial';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('GAME OVER', 1.8, 4);
    const s=Bot.getInstance();
    this.chatService.broadcastMessage(s.gameOverMessage(this.facade.PlayerSystem.Player));
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
    context.defend(this.chatService, this.facade.PlayerSystem.getPlayerName());

  }

  defend2() {

    const context = new Context(new defender2());
    context.defend(this.chatService, this.facade.PlayerSystem.getPlayerName());

  }


  play() {
    this.currentState = this.currentState.buttonPress();
    this.board = this.boardService.getBoardById(this.facade.PlayerSystem.getPlayerId())
    this.piece = new Piece(this.ctx);
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
