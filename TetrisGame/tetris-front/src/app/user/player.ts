export class Player {
  Id: string = "";
  name: string = "";
  points: number = 0;
  lines: number = 0;
  level: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
