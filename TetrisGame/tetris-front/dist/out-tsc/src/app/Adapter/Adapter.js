import { User } from 'src/app/shared/user';
import { PieceDto } from './../Dto/PieceDto';
export class Adapter {
    constructor() {
    }
    mapSpawnPiece(x, y, color, shape) {
        let receivePiece = new MapablePiece(x, y, color, shape);
        this.piece = receivePiece;
        console.log("ADAPTER dalele buvo adaptuota");
    }
    getPiece() {
        return this.piece;
    }
    mapUser(user) {
        this.user = new User(user.name, user.password);
        //this.user.name = ;
        //this.user.password = 
        console.log("ADAPTER naujo vartotojo duomenys buvo adaptuoti");
    }
    getUser() {
        return this.user;
    }
}
export class MapablePiece extends PieceDto {
    constructor(x, y, color, shape) {
        super();
        this.x = x;
        this.y = y;
        this.shape = shape;
        this.color = color;
    }
}
//# sourceMappingURL=Adapter.js.map