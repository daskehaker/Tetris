import { IMessage } from './../shared/interfaces';
import { MessageDto } from './../Dto/MessageDto';
import { Player } from './../user/player';
import { ChatService } from '../services/chat.service';


export class Context {
  private strategy: defenderStrategy;

  constructor(strategy: defenderStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: defenderStrategy) {
    this.strategy = strategy;
  }

  public defend(chatService: ChatService, player : string) {
    this.strategy.useDefender(null, chatService, player);
  }
}

interface defenderStrategy {
  useDefender(data: string, chatService: ChatService, player: string): string;
}


export class defender1 implements defenderStrategy {
  message: MessageDto;
  public useDefender(data: string, chatService: ChatService, player: string): string {
    
    this.message = new MessageDto(player, "using defender1");
    chatService.broadcastMessage(this.message);

    //console.log("Hello defender1");
    return null;
  }
}

export class defender2 implements defenderStrategy {
  message: MessageDto;
  public useDefender(data: string, chatService: ChatService, player: string): string {
    this.message = new MessageDto(player, "using defender2");
    chatService.broadcastMessage(this.message);

    //console.log("Hello defender2");
    return null;
  }
}

export class defender3 implements defenderStrategy {
  message: MessageDto;
  public useDefender(data: string, chatService: ChatService, player: string): string {
    this.message = new MessageDto("Player ", "used defender3");
    chatService.broadcastMessage(this.message);

    //console.log("Hello defender3");
    return null;
  }
}
