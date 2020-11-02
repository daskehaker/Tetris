import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  boardService: BoardService
  userService: UserService

  constructor(private bService: BoardService, private uService:UserService) {
    this.boardService = bService;
    this.userService = uService;
  }

  ngOnInit(): void {
  }

}
