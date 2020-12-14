import { ControlTask, PositionTask, TimeTask } from "../Composite/composite";

export interface Visitor{
  visitPositionTask(el: PositionTask);
  visitTimeTask(el: TimeTask);
  visitControlTask(el: ControlTask)
}


export class EasyDifficultyVisitor implements Visitor{
  visitPositionTask(el: PositionTask) {
    el.setCount(1);
  }
  visitTimeTask(el: TimeTask) {
    el.setTime(1000);
  }
  visitControlTask(el: ControlTask) {
    el.setRequired(1);
  }
}

export class MediumDifficultyVisitor implements Visitor{
  visitPositionTask(el: PositionTask) {
    el.setCount(5);
  }
  visitTimeTask(el: TimeTask) {
    el.setTime(30000);
  }
  visitControlTask(el: ControlTask) {
    el.setRequired(20);
  }

}

export class HardDifficultyVisitor implements Visitor{
  visitPositionTask(el: PositionTask) {
    el.setCount(8);
  }
  visitTimeTask(el: TimeTask) {
    el.setTime(60000);
  }
  visitControlTask(el: ControlTask) {
    el.setRequired(50);
  }
}
