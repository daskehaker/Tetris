
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Builder } from 'protractor';
import { USPGun } from './../../Prototype/USPGun';
import { AK47Gun } from './../../Prototype/AK47Gun';
import { Facade, AK47, USP, Gun } from '../../models/Facade_Prototype';
import { BLOCK_SIZE, ROWS, COLS, KEY, POINTS, COLORS, LINES_PER_LEVEL, LEVEL } from '../../shared/constants';
import { Piece } from 'src/app/models/piece';
import { getSpeed, Time } from 'src/app/models/time';
import { UserService } from 'src/app/services/user.service';
import { Director, PieceBuilder } from '../../Builder/builder';
import { changeColor, changeShape } from '../../Command/command';
import { SpecialPiece } from '../../models/SpecialPiece';
import { BoardService } from '../../services/board.service';
import { ChatService } from '../../services/chat.service';
import { Context, defender1, defender2, defender3, defender4 } from '../../Strategy/strategy';
import { OponentBoardComponent } from '../oponent-board/oponent-board.component';
import { PieceDto } from './../../Dto/PieceDto';
import { IPiece } from './../../shared/interfaces';
import { Player } from './../../user/player';
import { Bot } from 'src/app/Singleton/gameBot';
import { KeyboardControl } from './../../Bridge/KeyboardControl';
import { ConcreteGun } from 'src/app/Prototype/ConcreteGun';
import { Oponent } from 'src/app/Prototype/Oponent';
import { Task, TaskBank } from 'src/app/Composite/composite';
import { Stopwatch } from "ts-stopwatch";
import { SHAPES } from 'src/app/shared/constants'
import { Level1BankHandler, Level2BankHandler, Level3BankHandler, Level4BankHandler } from '../../ChainOfResponsibility/chain';
//import { Facade } from 'src/app/models/Facade';


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
  stopwatch: Stopwatch = new Stopwatch();
  strategy = new Context(new defender1());
  pieceCount = 0;
  commandColor: changeColor;
  commandShape: changeShape;
  keyboardControl = new KeyboardControl();
  gunsArray: ConcreteGun[] = [];
  gunsDeepCopiesArray: ConcreteGun[] = [];
  gunsShallowCopiesArray: ConcreteGun[] = [];
  oponents: Oponent[] = [{id: "1", name: "Petras"}, {id: "1", name: "Jonas"}, {id: "1", name: "Ona"}]




  task1 = new Task('Raudonas J-blokas nukrenta', 1, '../../../assets/images/RedJ90.png');
  task2 = new Task('Mėlynas Z-blokas nukrenta', 1, '../../../assets/images/BlueZ90.png');
  task3 = new Task('Raudonas J-blokas nukrenta', 1, '../../../assets/images/RedJ90.png');
  task4 = new Task('Geltonas T-Blokas nukrenta', 1, '../../../assets/images/YellowT90.png');
  task5 = new Task('Žalias S-blokas nukrenta', 1, '../../../assets/images/GreenS90.png');
  task6 = new Task('Mėlynas T-blokas nukrenta', 1, '../../../assets/images/BlueT.png');
  task7 = new Task('Raudonas Z-blokas nukrenta', 1, '../../../assets/images/RedZ.png');
  task8 = new Task('Žalias T-blokas nukrenta', 1, '../../../assets/images/GreenT270.png');

  rootTaskBank = new TaskBank();
  TaskBank1 = new TaskBank();
  TaskBank2 = new TaskBank();
  TaskBank3 = new TaskBank();
  TaskBank4 = new TaskBank();
  taskToScreen1: Task = this.task7;
  taskToScreen2: Task = this.task8;
  completed1:string = "none";
  completed2: string = "none";

  level1: Level1BankHandler = new Level1BankHandler(this.TaskBank4);
  level2: Level2BankHandler = new Level2BankHandler(this.TaskBank3);
  level3: Level3BankHandler = new Level3BankHandler(this.TaskBank2);
  level4: Level4BankHandler = new Level4BankHandler(this.TaskBank1);

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
      case KEY.E: {
        if (this.commandShape == null) {
          this.commandShape = new changeShape(this.piece);
        }
        this.commandShape.execute();
        break;
      }
      case KEY.R: {
        this.commandShape.undo();
        break;
      }
      case KEY.D: {
        if (this.commandColor == null) {
          this.commandColor = new changeColor(this.piece);
        }
        this.commandColor.execute();
        break;
      }
      case KEY.F: {
        this.commandColor.undo();
        break;
      }
      case KEY.RIGHT:{
        // p.x++;
        this.move(this.keyboardControl.right(p));
          break;
      }
      case KEY.LEFT: {
        //p.x--;
        this.move(this.keyboardControl.left(p));
        break;
      }
      case KEY.DOWN: {
        //p.y++;
        this.move(this.keyboardControl.down(p));
        break;
      }
      case KEY.UP: {
        //p = this.boardService.rotate(p);
        this.move(this.keyboardControl.rotate(p));
        this.piece.rotationCount++;
        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }


  initBoard() {
    this.level1.setNext(this.level2)
    this.level2.setNext(this.level3)
    this.level3.setNext(this.level4)

    this.rootTaskBank.addComponent(this.TaskBank1);

    this.TaskBank1.addComponent(this.task1);
    this.TaskBank1.addComponent(this.task2);
    this.TaskBank1.addComponent(this.TaskBank2)

    this.TaskBank2.addComponent(this.task3);
    this.TaskBank2.addComponent(this.task4);
    this.TaskBank2.addComponent(this.TaskBank3);

    this.TaskBank3.addComponent(this.task5);
    this.TaskBank3.addComponent(this.task6);
    this.TaskBank3.addComponent(this.TaskBank4);

    this.TaskBank4.addComponent(this.task7);
    this.TaskBank4.addComponent(this.task8);


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
      if (this.pieceCount > 0) {
        //this.move(this.blue.handle(this.piece.color, this.player.name, this.piece, this.boardService));
        //=============Strategy Spell=======================
        switch (this.piece.color.toLowerCase()) {
          case "blue":
            this.strategy.setStrategy(new defender1());
            this.move(this.strategy.defend(this.player.name, this.piece, this.boardService));
            break;
          case "yellow":
            this.strategy.setStrategy(new defender4());
            this.strategy.defend(this.player.name, this.piece, this.boardService);
            break;
          default:
        }
      //==================================
      }


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
      this.pieceCount--;
      //=============Strategy Spell=======================
      if (this.pieceCount > 0) {
        if (this.piece.color.toLowerCase() == "green") {
          this.strategy.setStrategy(new defender2());
          this.strategy.defend(this.player.name, this.piece, this.boardService);
        } else if (this.piece.color.toLowerCase() == "red") {
          this.strategy.setStrategy(new defender3());
          this.strategy.defend(this.player.name, this.piece, this.boardService);
        } else {
          KEY.RIGHT = 39;
          KEY.LEFT = 37;
        }

      } else {
        KEY.RIGHT = 39;
        KEY.LEFT = 37;
      }


      this.piece.rotationCount = 0;
      KEY.UP = 38;
      this.commandColor = null;
      this.commandShape = null;
      /////



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
    if (!this.TaskBank4.checkIfCompleted()) {
      this.positionTask('red', this.rotateClockwise(SHAPES.ZShape, 0).toString(), this.piece.color, this.piece.shape.toString(), this.taskToScreen1);
      this.positionTask('green', this.rotateClockwise(SHAPES.TShape, 3).toString(), this.piece.color, this.piece.shape.toString(), this.taskToScreen2);
      if (this.taskToScreen1.checkIfCompleted())
      {
        this.completed1 = "completed";
      }
      if (this.taskToScreen2.checkIfCompleted()) {
        this.completed2 = "completed";
      }
      if (this.TaskBank4.checkIfCompleted()){
        this.taskToScreen1 = this.task5;
        this.taskToScreen2 = this.task6;
        this.completed1 = "none";
        this.completed2 = "none";
      }

    } else if (!this.TaskBank3.checkIfCompleted()) {
      this.positionTask('green', this.rotateClockwise(SHAPES.SShape, 1).toString(), this.piece.color, this.piece.shape.toString(), this.taskToScreen1);
      this.positionTask('blue', SHAPES.TShape.toString(), this.piece.color, this.piece.shape.toString(), this.taskToScreen2);
      if (this.taskToScreen1.checkIfCompleted()) {
        this.completed1 = "completed";
      }
      if (this.taskToScreen2.checkIfCompleted()) {
        this.completed2 = "completed";
      }
      if (this.TaskBank3.checkIfCompleted()) {
        this.taskToScreen1 = this.task4;
        this.taskToScreen2 = this.task3;
        this.completed1 = "none";
        this.completed2 = "none";
      }

    } else if (!this.TaskBank2.checkIfCompleted()) {
      this.positionTask('yellow', this.rotateClockwise(SHAPES.TShape, 1).toString(), this.piece.color, this.piece.shape.toString(), this.taskToScreen1);
      this.positionTask('red', this.rotateClockwise(SHAPES.JShape, 1).toString(), this.piece.color, this.piece.shape.toString(), this.taskToScreen2);
      if (this.taskToScreen1.checkIfCompleted()) {
        this.completed1 = "completed";
      }
      if (this.taskToScreen2.checkIfCompleted()) {
        this.completed2 = "completed";
      }
      if (this.TaskBank2.checkIfCompleted()) {
        this.taskToScreen1 = this.task1;
        this.taskToScreen2 = this.task2;
        this.completed1 = "none";
        this.completed2 = "none";
      }

    } else if (!this.TaskBank1.checkIfCompleted()) {
      this.positionTask('red', this.rotateClockwise(SHAPES.JShape, 1).toString(), this.piece.color, this.piece.shape.toString(), this.taskToScreen1);
      this.positionTask('blue', this.rotateClockwise(SHAPES.ZShape, 1).toString(), this.piece.color, this.piece.shape.toString(), this.taskToScreen2);
      if (this.taskToScreen1.checkIfCompleted()) {
        this.completed1 = "completed";
      }
      if (this.taskToScreen2.checkIfCompleted()) {
        this.completed2 = "completed";
      }
      if (this.TaskBank1.checkIfCompleted()) {
        this.taskToScreen1 = null;
        this.taskToScreen2 = null;
        this.completed1 = "none";
        this.completed2 = "none";
      }
    }
    

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
    const lineClearPoints = lines === 1 ? POINTS.SINGLE :
          lines === 2 ? POINTS.DOUBLE :
          lines === 3 ? POINTS.TRIPLE :
          lines === 4 ? POINTS.TETRIS : 0;
    return (level + 1) * lineClearPoints;
  }


  play() {
    this.board = this.boardService.getBoardById(this.player.Id)
    this.piece = new Piece(this.ctx);
    console.log("play");
    //this.piece.draw();
    this.animate();
    this.boardService.broadcastPiece(this.piece.dto);
  }


  player1() {
    if (this.player.points >= -200) {
      this.player.points -= 200;
      this.pieceCount = 5;
    }
  }


  bomb(bomb: SpecialPiece) {
    this.piece.setShape(bomb.shape);
    this.piece.setColor(bomb.color);
    this.piece.setRadius(bomb.radius);

  }

  getAK47(){
    this.player.points = this.player.points - 50;
    const kalasas = new AK47Gun();
    kalasas.owner = this.player;
    this.gunsArray.push(kalasas);
  }

  getUSP(){
    this.player.points = this.player.points - 50;
    const usp = new USPGun();
    usp.owner = this.player;
    this.gunsArray.push(usp);
  }

  player2() {
    this.player.points = 1;
    const director = new Director();
    const builder = new PieceBuilder();
    director.setBuilder(builder);
    director.buildBomb();
    var bomb = builder.getSpecialPiece();
    this.piece.color = bomb.color;
    this.piece.shape = bomb.shape;
    this.piece.dto.shape = bomb.shape;
  }


  clone(gun: ConcreteGun){
    this.player.points = this.player.points - 10;
    const newGun = gun.clone();
    this.gunsShallowCopiesArray.push(newGun)
  }

  cloneDeep(gun: USPGun){
    this.player.points = this.player.points - 15;
    this.gunsDeepCopiesArray.push(gun.cloneDeep());
  }

  setVersus(gun: ConcreteGun, name: string){
    gun.oponent.name = name;
  }

  shoot(gun?: ConcreteGun){
    if(gun){
      console.log(gun.damage + gun.oponent.name);
      let index = this.gunsDeepCopiesArray.indexOf(gun);
      this.gunsDeepCopiesArray.splice(index, 1);
    }
    else {
        this.gunsShallowCopiesArray.forEach(element => {
          console.log(element.damage + element.oponent.name);
          this.player.points = this.player.points - 5;
          this.gunsShallowCopiesArray = [];
        });
    }
  }
  dropBomb() {
    const director = new Director();
    const builder = new PieceBuilder();
    director.setBuilder(builder);
    director.buildBomb();
    const build = builder.getSpecialPiece();
    this.bomb(build);
  }




  //Composite

  positionTask(requiredColor, requiredShape, color, shape, task: Task) {
    console.log(color)
    console.log(requiredShape == shape)
    if (requiredColor == color && requiredShape == shape) {
      task.decreaseCounter();
      if (task.getCount() == 0) {
        task.setToCompleted();
      }
    }
  }




  rotateClockwise = function (clockwise, N) {
    var matrix = JSON.parse(JSON.stringify(clockwise));
    for (var m = 0; m < N; m++) {
      matrix = matrix.reverse();
      // swap the symmetric elements
      for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < i; j++) {
          var temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
        }
      }
    }
    return matrix;
  };

  prizeMultiplier = [false, false, false, false];
  
  test() {
    const inARow = 1;
    console.log("start")
    this.level1.handle(this.player, this.prizeMultiplier, inARow);
    console.log(this.prizeMultiplier)
    console.log(inARow)
    console.log("end")
  }

}
