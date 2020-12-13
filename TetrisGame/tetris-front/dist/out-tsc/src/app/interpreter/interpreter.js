class DefaultMessage {
    interpret(text) {
        return text;
    }
}
class EmojisMessasge {
    constructor() {
        this.emojiMap = {
            joy: "&#x1f602",
            shades: "&#x1f60e",
            happy: "&#x1f600"
        };
        this.regExpression = /:([^:]*):/g;
    }
    interpret(text) {
        while (this.result = this.regExpression.exec(text)) {
            text = text.replace(this.result[0], this.emojiMap[this.result[1]] == undefined ? "emoji not known" : this.emojiMap[this.result[1]]);
        }
        return text;
    }
}
export function displayedMessage(messageText) {
    console.log("interpretor called");
    const regExpression = /:([^:]*):/g;
    if (messageText.match(regExpression) != null) {
        return new EmojisMessasge().interpret(messageText);
    }
    else {
        return new DefaultMessage().interpret(messageText);
    }
}
//# sourceMappingURL=interpreter.js.map