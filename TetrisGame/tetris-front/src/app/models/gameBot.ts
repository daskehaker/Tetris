import { IMessage } from './../shared/interfaces';
import { MessageDto } from './../Dto/MessageDto';

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
    return new MessageDto("Hello I am Singleton Game bot ", "There is only one instance of me. I will Introduce the game rules");
  }
}
