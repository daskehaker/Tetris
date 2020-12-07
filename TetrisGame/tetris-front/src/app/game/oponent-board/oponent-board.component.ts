import { BombIterator } from './../../Iterator/BombIterator';
import { Iterator } from './../../Iterator/Iterator';
import { SubscriberService } from './../../services/subscriber.service';
import { IObserver, ISubject } from './../../shared/interfaces';
import { Player } from './../../user/player';
import { PieceDto } from './../../Dto/PieceDto';
import { BoardService } from './../../services/board.service';
import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { COLS, BLOCK_SIZE, ROWS, COLORS } from '../../shared/constants';
import { IPiece } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/services/user.service';
import { Exploder } from 'src/app/Template/Exploder';
import { Collection } from 'src/app/Iterator/collection';

@Component({
  selector: 'oponent-board',
  templateUrl: './oponent-board.component.html',
  styleUrls: ['./oponent-board.component.css']
})
export class OponentBoardComponent extends Exploder implements OnInit, IObserver, OnDestroy {
  @Input() boardService: BoardService;
  @Input() userService: UserService;
  
  @ViewChild('board', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  
  ctx: CanvasRenderingContext2D;
  pieceDto: PieceDto;
  board: number[][];
  player = new Player({id: "fde6a897-12ca-4cb1-a40e-6f608949b4de", name: "player2"})
  
  constructor(private subscriberService: SubscriberService) {
    super();
  }
  
  ngOnInit(): void {
    this.subscriberService.add(this);
    this.initBoard();
    this.boardService.retrieveMapperPiece().subscribe((receivedObj: IPiece) => {
      this.pieceDto = receivedObj;
      this.draw(receivedObj)
    });
  }

  protected changeCellValue(iterator: BombIterator) {
    this.board[iterator.currentY()][iterator.currentX()]=0;
  }
  protected changeIteratorSide(iterator: BombIterator) {
    iterator.setSide(2);
  }
  protected changeIteratoNext(iterator: BombIterator) {
    iterator.next();
  }
  protected logCoordinates(x: number, y: number) {
    console.log(`Priesininko koordinatės X: ${x} Y: ${y}`)
  }

  explodeBoard(event){
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    super.templateMethodSetExploder(event, rect);

    let collection = new Collection(this.board)

    let iterator = super.getIterator(collection);

    this.doExplosion(iterator);
    
  }
  
  doExplosion(iterator: BombIterator){
    for(let i=0; i<4; i++){
      super.templateMethodDoExplosion(iterator)
    }
  }

  payForExploder(){
    return
  }

  ngOnDestroy(){
    this.subscriberService.remove(this);
  }

  update(subject: ISubject) {
    console.log("OBSERVER updates oponent board");
    this.subscriberService.retrieveMapperBoard().subscribe((retrieveObj: number[][]) => {
      this.board = retrieveObj;
    })
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

  draw(obj: PieceDto) {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
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
    this.drawBoard();
  }

  drawBoard() {
    if(this.board != null){
      this.board.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            this.ctx.fillStyle = COLORS[value];
            this.ctx.fillRect(x, y, 1, 1);
          }
        });
      });
    }
  }
}
