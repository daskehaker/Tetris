
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PositionTask } from '../../Composite/composite';
import { BoardComponent } from './board.component';
import { HttpClientModule, HttpHandler, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { ChatService } from '../../services/chat.service';
import { HttpClient } from '@microsoft/signalr';
import { UserService } from '../../services/user.service';
import { Player } from '../../user/player';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let mockAccountService = {};

  let chatServiceStub: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent],
      imports: [HttpClientModule],
      providers: [{ provide: UserService, useValue: mockAccountService }]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    console.log("hello");
    console.log(fixture);
    expect(component).toBeTruthy();
  });

  //beforeEach(() => {
  //  TestBed.configureTestingModule({
  //    declarations: [BoardComponent],
  //    imports: [HttpClientModule],
  //    providers: [{
  //      provide: ChatService,
  //      useValue: authServiceStub
  //    }]
  //  }).compileComponents();

  //  authServiceStub = {
  //    getUserProfile: () => of({ profile: {} })
  //  };
  //  fixture = TestBed.createComponent(BoardComponent);
  //  component = fixture.componentInstance;

  //  fixture.detectChanges();
  //});

  //it('when positionTask is called it should', () => {
  //  // arrange
  //  const task = new Task("name", "2", "");
  //  console.log(component);
  //  // act
  //  component
  //  component.positionTask("blue", [0, 0, 1], "blue", [0, 0, 1], task);
  //  console.log(task.checkIfCompleted());
  //  // assert
  //  expect(task).toBeTruthy();
  //});



  //it('when ngOnInit is called it should', () => {
  //  // arrange
  //  //const { build } = setup().default();
  //  //const b = build();

  //  // act
  //  console.log("hello");
  //  component.ngOnInit();
  //  // assert
  //  expect(component).toBeTruthy();
  //});


  //it('when keyEvent is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  const event = new KeyboardEvent("keypress", {"key": "Enter"});
  //  // act
  //  b.keyEvent(event);
  //  // assert
  //  expect(b).toEqual
  //});
  //it('when initBoard is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.initBoard();
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when animate is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.animate();
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when move is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  const p: Piece = null;
  //  // act
  //  b.move(p);
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when drop is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.drop();
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when draw is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.draw();
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when drawBoard is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.drawBoard();
  //  // assert
  //  // expect(b).toEqual
  //});
  // it('when freeze is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.freeze();
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when clearLines is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.clearLines();
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when gameOver is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.gameOver();
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when getLineClearPoints is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.getLineClearPoints(1,1);
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when play is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.play();
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when player1 is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.player1();
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when bomb is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  const bomb: SpecialPiece = new SpecialPiece();
  //  // act
  //  b.bomb(bomb);
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when getAK47 is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.getAK47();
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when getUSP is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.getUSP();
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when player2 is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.player2();
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when clone is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  const gun: ConcreteGun = new ConcreteGun();
  //  // act
  //  b.clone(gun);
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when cloneDeep is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  const gun: USPGun = new USPGun();
  //  // act
  //  b.cloneDeep(gun);
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when setVersus is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  const gun: ConcreteGun = new ConcreteGun();
  //  // act
  //  b.setVersus(gun, "Jack");
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when shoot is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.shoot();
  //  // assert
  //  // expect(b).toEqual
  //});
  //it('when dropBomb is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.dropBomb();
  //  // assert
  //  // expect(b).toEqual
  //});

  //it('when test is called it should', () => {
  //  // arrange
  //  const { build } = setup().default();
  //  const b = build();
  //  // act
  //  b.test();
  //  // assert
  //   expect(b).toEqual
  //});
  
});
