export interface IPiece{
  x: number;
  y: number;
  color: string;
  radius: number;
  shape: number[][];
  power: string;
}

export interface IUser{
  name: string;
  password: string;
}

export interface INewUser{
  name: string;
  password: string;
  password2: string;
}

export interface IMessage{
  user: string,
  msgText: string
}

export interface ISubject{
  add(observer: IObserver);
  remove(observer: IObserver);
  notify();
}

export interface IObserver{
  update(subject: ISubject);
}

