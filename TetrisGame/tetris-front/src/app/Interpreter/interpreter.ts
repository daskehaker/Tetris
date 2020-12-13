import { TestComponentRenderer } from '@angular/core/testing';

interface IInterpretable {
  interpret(message:String) :string
}
class DefaultMessage implements IInterpretable{
  interpret(text){
    return text;
  }
}
class EmojisMessasge implements IInterpretable  {

  emojiMap = {
    joy: "&#x1f602",
    shades: "&#x1f60e",
    happy: "&#x1f600"
  }
  regExpression = /:([^:]*):/g
  result: any;

  interpret(text) {
    while (this.result = this.regExpression.exec(text)) {
      text = text.replace(this.result[0], this.emojiMap[this.result[1]] == undefined ? "emoji not known" : this.emojiMap[this.result[1]])
    }
    return text
  }
}

export function displayedMessage(messageText:String){
  console.log("interpretor called");
  const regExpression = /:([^:]*):/g
  if(messageText.match(regExpression) != null){
    return new EmojisMessasge().interpret(messageText);
  }
  else{
    return new DefaultMessage().interpret(messageText);
  }
}
