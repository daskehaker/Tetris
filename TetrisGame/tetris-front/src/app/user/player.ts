export class Player {
  Id: string = "";
  name: string = "";
  score: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
