import { Subject } from 'rxjs';
import { INewUser, IUser } from '../shared/interfaces';
import { PieceDto } from './../Dto/PieceDto';

export interface IAdapter {
    mapSpawnPiece(x: number, y: number, color: string, shape: number[][]);
    getPiece(): PieceDto
    mapUser(user: INewUser);
    getUser(): IUser

}