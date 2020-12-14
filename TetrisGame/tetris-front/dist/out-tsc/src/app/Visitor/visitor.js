export class EasyDifficultyVisitor {
    visitPositionTask(el) {
        el.setCount(3);
    }
    visitTimeTask(el) {
        throw new Error('Method not implemented.');
    }
    visitControlTask(el) {
        throw new Error('Method not implemented.');
    }
}
export class MediumDifficultyVisitor {
    visitPositionTask(el) {
        el.setCount(5);
    }
    visitTimeTask(el) {
        throw new Error('Method not implemented.');
    }
    visitControlTask(el) {
        throw new Error('Method not implemented.');
    }
}
export class HardDifficultyVisitor {
    visitPositionTask(el) {
        el.setCount(8);
    }
    visitTimeTask(el) {
        throw new Error('Method not implemented.');
    }
    visitControlTask(el) {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=visitor.js.map