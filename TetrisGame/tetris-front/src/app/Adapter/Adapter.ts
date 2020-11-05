import { User } from 'src/app/shared/user';
import { IUser, INewUser } from './../shared/interfaces';
import { PieceDto } from './../Dto/PieceDto';
import { IAdapter } from './IAdapter';

export class Adapter implements IAdapter{
    piece: PieceDto
    user: IUser
    
    constructor(){ 
    }
    
    mapSpawnPiece(x: number, y: number, color: string, shape: number[][]) {
        let receivePiece: PieceDto = new MapablePiece(x, y, color, shape);
        this.piece = receivePiece;
        console.log("ADAPTER dalele buvo adaptuota");
    }

    getPiece(): PieceDto{
        return this.piece;
    }

    mapUser(user: INewUser){
        this.user = new User(user.name, user.password)
        //this.user.name = ;
        //this.user.password = 
        console.log("ADAPTER naujo vartotojo duomenys buvo adaptuoti");
    }

    getUser(): IUser{
        return this.user
    }

}

export class MapablePiece extends PieceDto{
    x: number;
    y: number;
    color: string;
    shape: number[][]

    constructor(x: number, y: number, color: string, shape: number[][]){ 
        super();
        this.x = x;
        this.y = y;
        this.shape = shape;
        this.color = color;
    }
}