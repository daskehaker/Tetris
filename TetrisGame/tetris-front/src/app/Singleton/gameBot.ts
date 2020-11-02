import { Player } from './../user/player';
import { IMessage } from '../shared/interfaces';
import { MessageDto } from '../Dto/MessageDto';
import { Console } from 'console';

export class Bot {
  private static instance: Bot;

  private constructor() {

  }

  public static getInstance(): Bot {
    if(!Bot.instance) {
      Bot.instance = new Bot();
    }

    return Bot.instance;
  }

  public introRules(): IMessage{
    console.log("SINGLETON player is connected");
    return new MessageDto("Hello I am Singleton Game bot ", "There is only one instance of me. I will Introduce the game rules");
  }

  public gameOverMessage(player: Player): IMessage {
    console.log("SINGLETON anounces game result");
    return new MessageDto("Singleton Bot", `${player.name} end game. His result: ${player.points}`);
  }
}
