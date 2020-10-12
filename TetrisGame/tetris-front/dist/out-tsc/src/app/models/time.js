export class Time {
    constructor(values) {
        Object.assign(this, values);
    }
}
class TimeFactory {
    getExpertSpeed(values) {
        return new ExpertTime(values);
    }
    getVeryFastSpeed(values) {
        return new VeryFastTime(values);
    }
    getFastSpeed(values) {
        return new FastTime(values);
    }
    getNormalSpeed(values) {
        return new NormalTime(values);
    }
    getSlowSpeed(values) {
        return new SlowTime(values);
    }
}
class ExpertTime extends Time {
    constructor(values) {
        super(values);
        if (this.level != 50) {
            console.log("speed changed to expert by factory");
        }
        this.level = 50;
    }
}
class VeryFastTime extends Time {
    constructor(values) {
        super(values);
        if (this.level != 100) {
            console.log("speed changed to very fast by factory");
        }
        this.level = 100;
    }
}
class FastTime extends Time {
    constructor(values) {
        super(values);
        if (this.level != 200) {
            console.log("speed changed to fast by factory");
        }
        this.level = 200;
    }
}
class NormalTime extends Time {
    constructor(values) {
        super(values);
        if (this.level != 500) {
            console.log("speed changed to normal by factory");
        }
        this.level = 500;
    }
}
class SlowTime extends Time {
    constructor(values) {
        super(values);
        if (this.level != 1000) {
            console.log("speed changed to slow by factory");
        }
        this.level = 1000;
    }
}
export function getSpeed(timeObject, points) {
    var factory = new TimeFactory();
    if (points < 300) {
        return factory.getSlowSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
    }
    else if (points < 500) {
        return factory.getNormalSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
    }
    else if (points < 700) {
        return factory.getFastSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
    }
    else if (points < 900) {
        return factory.getVeryFastSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
    }
    else {
        return factory.getExpertSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
    }
}
//# sourceMappingURL=time.js.map