export interface IPiece{
  x: number;
  y: number;
  color: string;
  shape: number[][];
}

export interface IUser{
  name: string;
  password: string;
}

export interface IMessage{
  user: string,
  msgText: string
}
