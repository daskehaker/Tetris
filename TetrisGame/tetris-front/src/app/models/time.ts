import { time } from 'console';

export class Time {
  start: number;
  elapsed: number;
  level: number;

  constructor(values?: Object){
    Object.assign(this, values);
  }
}

class TimeFactory {
  public getExpertSpeed(values?: Object) : Time{
    return new ExpertTime(values);
  }

  public getVeryFastSpeed(values?: Object) : Time{
    return new VeryFastTime(values);
  }

  public getFastSpeed(values?: Object): Time{
    return new FastTime(values);
  }

  public getNormalSpeed(values?: Object): Time{
    return new NormalTime(values);
  }

  public getSlowSpeed(values?: Object): Time{
    return new SlowTime(values);
  }
}

class ExpertTime extends Time{
  constructor(values?: Object){
    super(values);
    if(this.level != 50){
      console.log("speed changed to expert by factory");
    }
    this.level = 50;
  }
}

class VeryFastTime extends Time{
  constructor(values?: Object){
    super(values);
    if(this.level != 100){
      console.log("speed changed to very fast by factory");
    }
    this.level = 100;
  }
}

class FastTime extends Time{
  constructor(values?: Object){
    super(values);
    if(this.level != 200){
      console.log("speed changed to fast by factory");
    }
    this.level = 200;
  }
}

class NormalTime extends Time{
  constructor(values?: Object){
    super(values);
    if(this.level != 500){
      console.log("speed changed to normal by factory");
    }
    this.level = 500;
  }
}

class SlowTime extends Time{
  constructor(values?: Object){
    super(values);
    if(this.level != 1000){
      console.log("speed changed to slow by factory");
    }
    this.level = 1000;
  }
}

export function getSpeed(timeObject: Time, level: number){
  var factory = new TimeFactory();
  if(level < 4){
    return factory.getSlowSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
  }
  else if (level < 7){
    return factory.getNormalSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
  }
  else if (level < 10){
    return factory.getFastSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
  }
  else if (level < 12){
    return factory.getVeryFastSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
  }
  else{
    return factory.getExpertSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
  }
}
