(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Adapter/Adapter.ts":
/*!************************************!*\
  !*** ./src/app/Adapter/Adapter.ts ***!
  \************************************/
/*! exports provided: Adapter, MapablePiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adapter", function() { return Adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapablePiece", function() { return MapablePiece; });
/* harmony import */ var src_app_shared_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/user */ "./src/app/shared/user.ts");
/* harmony import */ var _Dto_PieceDto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Dto/PieceDto */ "./src/app/Dto/PieceDto.ts");


class Adapter {
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
        this.user = new src_app_shared_user__WEBPACK_IMPORTED_MODULE_0__["User"](user.name, user.password);
        //this.user.name = ;
        //this.user.password = 
        console.log("ADAPTER naujo vartotojo duomenys buvo adaptuoti");
    }
    getUser() {
        return this.user;
    }
}
class MapablePiece extends _Dto_PieceDto__WEBPACK_IMPORTED_MODULE_1__["PieceDto"] {
    constructor(x, y, color, shape) {
        super();
        this.x = x;
        this.y = y;
        this.shape = shape;
        this.color = color;
    }
}


/***/ }),

/***/ "./src/app/Bridge/GUIControl.ts":
/*!**************************************!*\
  !*** ./src/app/Bridge/GUIControl.ts ***!
  \**************************************/
/*! exports provided: GUIControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUIControl", function() { return GUIControl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _PieceControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PieceControl */ "./src/app/Bridge/PieceControl.ts");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/board.service */ "./src/app/services/board.service.ts");




class GUIControl extends _PieceControl__WEBPACK_IMPORTED_MODULE_1__["PieceControl"] {
    constructor(boardService) {
        super();
        this.boardService = boardService;
        this.emitPiece = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    rotate() {
        console.log("BRIDGE GUI method was called rotate()");
        this.piece = super.rotate(this.piece);
        this.emitterFunction();
        return this.piece;
    }
    right() {
        console.log("BRIDGE GUI method was called right()");
        this.piece = super.right(this.piece);
        this.emitterFunction();
        return this.piece;
    }
    left() {
        console.log("BRIDGE GUI method was called left()");
        this.piece = super.left(this.piece);
        this.emitterFunction();
        return this.piece;
    }
    down() {
        console.log("BRIDGE GUI method was called down()");
        this.piece = super.down(this.piece);
        this.emitterFunction();
        return this.piece;
    }
    emitterFunction() {
        this.emitPiece.emit(this.piece);
    }
}
GUIControl.ɵfac = function GUIControl_Factory(t) { return new (t || GUIControl)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"])); };
GUIControl.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GUIControl, selectors: [["gui-movement"]], inputs: { piece: "piece" }, outputs: { emitPiece: "emitPiece" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 0, consts: [[3, "click"]], template: function GUIControl_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GUIControl_Template_button_click_0_listener() { return ctx.rotate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rotate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GUIControl_Template_button_click_3_listener() { return ctx.right(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GUIControl_Template_button_click_6_listener() { return ctx.left(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GUIControl_Template_button_click_9_listener() { return ctx.down(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GUIControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'gui-movement',
                template: `
    <button (click)="rotate()">Rotate</button>
    <br>
    <button (click)="right()">Right</button>
    <br>
    <button (click)="left()">Left</button>
    <br>
    <button (click)="down()">Down</button>
    `
            }]
    }], function () { return [{ type: _services_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"] }]; }, { piece: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], emitPiece: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/Bridge/KeyboardControl.ts":
/*!*******************************************!*\
  !*** ./src/app/Bridge/KeyboardControl.ts ***!
  \*******************************************/
/*! exports provided: KeyboardControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardControl", function() { return KeyboardControl; });
/* harmony import */ var _PieceControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PieceControl */ "./src/app/Bridge/PieceControl.ts");

class KeyboardControl extends _PieceControl__WEBPACK_IMPORTED_MODULE_0__["PieceControl"] {
    rotate(p) {
        p = super.rotate(p);
        console.log("BRIDGE keyboard input control, rotate()");
        return p;
    }
    right(p) {
        super.right(p);
        console.log("BRIDGE keyboard input control, right()");
        return p;
    }
    left(p) {
        super.left(p);
        console.log("BRIDGE keyboard input control, left()");
        return p;
    }
    down(p) {
        super.down(p);
        console.log("BRIDGE keyboard input control, down()");
        return p;
    }
}


/***/ }),

/***/ "./src/app/Bridge/PieceControl.ts":
/*!****************************************!*\
  !*** ./src/app/Bridge/PieceControl.ts ***!
  \****************************************/
/*! exports provided: PieceControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieceControl", function() { return PieceControl; });
/* harmony import */ var _PieceImplementation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PieceImplementation */ "./src/app/Bridge/PieceImplementation.ts");

class PieceControl {
    constructor() {
        this.pieceImp = new _PieceImplementation__WEBPACK_IMPORTED_MODULE_0__["PieceImplementation"]();
    }
    rotate(piece) {
        let p = JSON.parse(JSON.stringify(piece));
        for (let y = 0; y < p.shape.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
            }
        }
        p.shape.forEach(row => row.reverse());
        return this.pieceImp.move(p);
    }
    right(piece) {
        //let p: IPiece = JSON.parse(JSON.stringify(piece));
        piece.x++;
        return this.pieceImp.move(piece);
    }
    left(piece) {
        //let p: IPiece = JSON.parse(JSON.stringify(piece));
        piece.x--;
        return this.pieceImp.move(piece);
    }
    down(piece) {
        //let p: IPiece = JSON.parse(JSON.stringify(piece));
        piece.y++;
        return this.pieceImp.move(piece);
    }
}


/***/ }),

/***/ "./src/app/Bridge/PieceImplementation.ts":
/*!***********************************************!*\
  !*** ./src/app/Bridge/PieceImplementation.ts ***!
  \***********************************************/
/*! exports provided: PieceImplementation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieceImplementation", function() { return PieceImplementation; });
class PieceImplementation {
    move(p) {
        console.log("Piece implementation move method was called");
        return p;
    }
}


/***/ }),

/***/ "./src/app/Builder/builder.ts":
/*!************************************!*\
  !*** ./src/app/Builder/builder.ts ***!
  \************************************/
/*! exports provided: PieceBuilder, Director */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieceBuilder", function() { return PieceBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Director", function() { return Director; });
/* harmony import */ var _models_SpecialPiece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/SpecialPiece */ "./src/app/models/SpecialPiece.ts");

class PieceBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this.piece = new _models_SpecialPiece__WEBPACK_IMPORTED_MODULE_0__["SpecialPiece"]();
    }
    setShape(shape) {
        this.piece.shape = shape;
    }
    setPlayer(player) {
        this.piece.player = player;
    }
    setColor(color) {
        this.piece.color = color;
    }
    getSpecialPiece() {
        const result = this.piece;
        this.reset();
        return result;
    }
}
class Director {
    setBuilder(builder) {
        this.builder = builder;
    }
    buildBomb() {
        this.builder.setPlayer(this.player);
        this.builder.setColor("Black");
        this.builder.setShape([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
    }
    BuildLongPiece() {
        this.builder.setPlayer(this.player);
        this.builder.setColor("Blue");
        this.builder.setShape([[0, 1, 0], [0, 1, 0], [0, 1, 0]]);
    }
}


/***/ }),

/***/ "./src/app/Command/command.ts":
/*!************************************!*\
  !*** ./src/app/Command/command.ts ***!
  \************************************/
/*! exports provided: changeColor, changeShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeColor", function() { return changeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeShape", function() { return changeShape; });
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants */ "./src/app/shared/constants.ts");

class changeColor {
    constructor(piece) {
        this.state = [];
        this.piece = piece;
    }
    setColor(color) {
        this.piece.color = color;
    }
    execute() {
        this.state.push(this.piece.color);
        console.log(this.state);
        var index = Math.floor(Math.random() * Math.floor(8));
        this.setColor(_shared_constants__WEBPACK_IMPORTED_MODULE_0__["COLORS"][index]);
    }
    undo() {
        var color = this.state[this.state.length - 1];
        this.state.pop();
        this.setColor(color);
    }
}
class changeShape {
    constructor(piece) {
        this.state = [];
        this.piece = piece;
    }
    setShape(shape) {
        this.piece.dto.shape = shape;
        this.piece.shape = this.piece.dto.shape;
        console.log(this.piece.dto);
    }
    execute() {
        this.state.push(this.piece.shape);
        var index = Math.floor(Math.random() * Math.floor(_shared_constants__WEBPACK_IMPORTED_MODULE_0__["SHAPE"].length));
        console.log(index);
        console.log(_shared_constants__WEBPACK_IMPORTED_MODULE_0__["SHAPE"][index]);
        this.setShape(_shared_constants__WEBPACK_IMPORTED_MODULE_0__["SHAPE"][index]);
        console.log("Shape changed");
    }
    undo() {
        var shape = this.state[this.state.length - 1];
        this.state.pop();
        this.setShape(shape);
        console.log("Undo");
    }
}


/***/ }),

/***/ "./src/app/Composite/composite.ts":
/*!****************************************!*\
  !*** ./src/app/Composite/composite.ts ***!
  \****************************************/
/*! exports provided: TimerTask, Task, TaskBank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerTask", function() { return TimerTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBank", function() { return TaskBank; });
class TimerTask {
    constructor(taskName, count) {
        this.isCompleted = false;
        this.taskName = taskName;
        this.count = count;
    }
    setToCompleted() {
        this.isCompleted = true;
    }
    getTaskName() {
        return this.taskName;
    }
    getCount() {
        return this.count;
    }
    checkIfCompleted() {
        return this.isCompleted;
    }
}
class Task {
    constructor(taskName, count, imgURL) {
        this.isCompleted = false;
        this.taskName = taskName;
        this.count = count;
        this.imgURL = imgURL;
    }
    setToCompleted() {
        this.isCompleted = true;
    }
    getTaskName() {
        return this.taskName;
    }
    getCount() {
        return this.count;
    }
    checkIfCompleted() {
        return this.isCompleted;
    }
}
class TaskBank {
    constructor() {
        this.tasksArray = [];
    }
    addComponent(taskComponent) {
        this.tasksArray.push(taskComponent);
    }
    getTasks() {
        return this.tasksArray;
    }
    checkIfCompleted() {
        return this.tasksArray.every(function (element) {
            return element.checkIfCompleted();
        });
    }
}


/***/ }),

/***/ "./src/app/Dto/MessageDto.ts":
/*!***********************************!*\
  !*** ./src/app/Dto/MessageDto.ts ***!
  \***********************************/
/*! exports provided: MessageDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDto", function() { return MessageDto; });
class MessageDto {
    constructor(user, msgText) {
        this.user = user;
        this.msgText = msgText;
    }
}


/***/ }),

/***/ "./src/app/Dto/PieceDto.ts":
/*!*********************************!*\
  !*** ./src/app/Dto/PieceDto.ts ***!
  \*********************************/
/*! exports provided: PieceDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieceDto", function() { return PieceDto; });
class PieceDto {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.color = "";
        this.shape = null;
    }
}


/***/ }),

/***/ "./src/app/Prototype/AK47Gun.ts":
/*!**************************************!*\
  !*** ./src/app/Prototype/AK47Gun.ts ***!
  \**************************************/
/*! exports provided: AK47Gun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AK47Gun", function() { return AK47Gun; });
/* harmony import */ var _ConcreteGun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConcreteGun */ "./src/app/Prototype/ConcreteGun.ts");

class AK47Gun extends _ConcreteGun__WEBPACK_IMPORTED_MODULE_0__["ConcreteGun"] {
    constructor() {
        super();
        this.name = "AK47";
        this.damage = 'Damage from AK47 to ';
        console.log("PROTOTYPE AK47 Sukurtas");
    }
}


/***/ }),

/***/ "./src/app/Prototype/ConcreteGun.ts":
/*!******************************************!*\
  !*** ./src/app/Prototype/ConcreteGun.ts ***!
  \******************************************/
/*! exports provided: ConcreteGun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcreteGun", function() { return ConcreteGun; });
/* harmony import */ var _Oponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Oponent */ "./src/app/Prototype/Oponent.ts");

class ConcreteGun {
    constructor() {
        this.oponent = new _Oponent__WEBPACK_IMPORTED_MODULE_0__["Oponent"]({ id: "", name: "Not set" });
    }
    clone() {
        console.log("PROTOTYPE Sukurta shallow kopija");
        return Object.assign({}, this);
    }
}


/***/ }),

/***/ "./src/app/Prototype/Oponent.ts":
/*!**************************************!*\
  !*** ./src/app/Prototype/Oponent.ts ***!
  \**************************************/
/*! exports provided: Oponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oponent", function() { return Oponent; });
class Oponent {
    constructor(values = {}) {
        Object.assign(this, values);
    }
}


/***/ }),

/***/ "./src/app/Prototype/USPGun.ts":
/*!*************************************!*\
  !*** ./src/app/Prototype/USPGun.ts ***!
  \*************************************/
/*! exports provided: USPGun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USPGun", function() { return USPGun; });
/* harmony import */ var _ConcreteGun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConcreteGun */ "./src/app/Prototype/ConcreteGun.ts");

class USPGun extends _ConcreteGun__WEBPACK_IMPORTED_MODULE_0__["ConcreteGun"] {
    constructor() {
        super();
        this.name = "USP";
        this.damage = 'Damage from USP to ';
        console.log("PROTOTYPE USP Sukurtas");
    }
    cloneDeep() {
        const clone = Object.assign({}, this);
        clone.oponent = Object.assign({}, this.oponent);
        console.log("PROTOTYPE Sukurta deep kopija");
        return clone;
    }
}


/***/ }),

/***/ "./src/app/Singleton/gameBot.ts":
/*!**************************************!*\
  !*** ./src/app/Singleton/gameBot.ts ***!
  \**************************************/
/*! exports provided: Bot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bot", function() { return Bot; });
/* harmony import */ var _Dto_MessageDto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Dto/MessageDto */ "./src/app/Dto/MessageDto.ts");

class Bot {
    constructor() {
    }
    static getInstance() {
        if (!Bot.instance) {
            Bot.instance = new Bot();
        }
        return Bot.instance;
    }
    introRules() {
        return new _Dto_MessageDto__WEBPACK_IMPORTED_MODULE_0__["MessageDto"]("Hello I am Singleton Game bot ", "There is only one instance of me. I will Introduce the game rules");
    }
    gameOverMessage(player) {
        console.log("SINGLETON anounces game result");
        return new _Dto_MessageDto__WEBPACK_IMPORTED_MODULE_0__["MessageDto"]("Singleton Bot", `${player.name} end game. His result: ${player.points}`);
    }
}


/***/ }),

/***/ "./src/app/Strategy/strategy.ts":
/*!**************************************!*\
  !*** ./src/app/Strategy/strategy.ts ***!
  \**************************************/
/*! exports provided: Context, defender1, defender2, defender3, defender4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defender1", function() { return defender1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defender2", function() { return defender2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defender3", function() { return defender3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defender4", function() { return defender4; });
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants */ "./src/app/shared/constants.ts");

class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    defend(player, piece, board) {
        return this.strategy.useDefender(player, piece, board);
    }
}
class defender1 {
    useDefender(player, piece, board) {
        console.log("defender 1");
        return board.rotate(piece);
    }
}
class defender2 {
    useDefender(player, piece, board) {
        var temp = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].RIGHT;
        _shared_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].RIGHT = _shared_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].LEFT;
        _shared_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].LEFT = temp;
        console.log("defender 2");
        return null;
    }
}
class defender3 {
    useDefender(player, piece, board) {
        _shared_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].RIGHT = null;
        _shared_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].LEFT = null;
        console.log("defender 3");
        return null;
    }
}
class defender4 {
    useDefender(player, piece, board) {
        if (piece.rotationCount >= 2) {
            _shared_constants__WEBPACK_IMPORTED_MODULE_0__["KEY"].UP = null;
        }
        console.log("defender 4");
        return null;
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");








const routes = [
    { path: '', redirectTo: 'game', pathMatch: 'full' },
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_0__["GameComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [
            { path: 'registration', component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"] },
            { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'tetris-front';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tetris Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _game_board_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/board/board.component */ "./src/app/game/board/board.component.ts");
/* harmony import */ var _game_oponent_board_oponent_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game/oponent-board/oponent-board.component */ "./src/app/game/oponent-board/oponent-board.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _Bridge_GUIControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Bridge/GUIControl */ "./src/app/Bridge/GUIControl.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
        _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
        _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"],
        _user_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _game_game_component__WEBPACK_IMPORTED_MODULE_13__["GameComponent"],
        _game_oponent_board_oponent_board_component__WEBPACK_IMPORTED_MODULE_8__["OponentBoardComponent"],
        _game_board_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"],
        _Bridge_GUIControl__WEBPACK_IMPORTED_MODULE_14__["GUIControl"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
                    _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                    _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
                    _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"],
                    _user_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                    _game_game_component__WEBPACK_IMPORTED_MODULE_13__["GameComponent"],
                    _game_oponent_board_oponent_board_component__WEBPACK_IMPORTED_MODULE_8__["OponentBoardComponent"],
                    _game_board_board_component__WEBPACK_IMPORTED_MODULE_7__["BoardComponent"],
                    _Bridge_GUIControl__WEBPACK_IMPORTED_MODULE_14__["GUIControl"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _Singleton_gameBot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Singleton/gameBot */ "./src/app/Singleton/gameBot.ts");
/* harmony import */ var _Dto_MessageDto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Dto/MessageDto */ "./src/app/Dto/MessageDto.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function ChatComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mObj_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", mObj_r1.user === ctx_r0.msgDto.user ? "in-msg" : "ex-msg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", mObj_r1.user, " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](mObj_r1.msgText);
} }
class ChatComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.msgDto = new _Dto_MessageDto__WEBPACK_IMPORTED_MODULE_1__["MessageDto"]("", "");
        this.msgInboxArray = [];
    }
    ngOnInit() {
        this.chatService.retrieveMapperObject().subscribe((receivedObj) => {
            this.addToInbox(receivedObj);
        });
    }
    //Creates Game Bot Singleton instance and itroduces rules to players
    introduceRules() {
        const s1 = _Singleton_gameBot__WEBPACK_IMPORTED_MODULE_0__["Bot"].getInstance();
        const s2 = _Singleton_gameBot__WEBPACK_IMPORTED_MODULE_0__["Bot"].getInstance();
        if (s1 === s2) {
            console.log('Singleton works, both variables contain the same instance.');
        }
        else {
            console.log('Singleton failed, variables contain different instances.');
        }
        console.log("Singletone sent message to chat");
        this.chatService.broadcastMessage(s1.introRules());
    }
    // calls the service method to get the new messages sent
    addToInbox(obj) {
        let newObj = new _Dto_MessageDto__WEBPACK_IMPORTED_MODULE_1__["MessageDto"](obj.user, obj.msgText);
        this.msgInboxArray.push(newObj);
    }
    //sends the message via service
    send() {
        if (this.msgDto) {
            if (this.msgDto.user.length == 0 || this.msgDto.msgText.length == 0) {
                window.alert("Both fields are required. ");
                return;
            }
            else {
                this.chatService.broadcastMessage(this.msgDto);
            }
        }
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["chat"]], decls: 12, vars: 3, consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Type message here", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger", 3, "click"], ["type", "text", "placeholder", "Your name", 3, "ngModel", "ngModelChange"], [3, "ngClass"], [1, "msg-italic-style"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Public Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ChatComponent_li_6_Template, 5, 3, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_8_listener($event) { return ctx.msgDto.msgText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_9_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_11_listener($event) { return ctx.msgDto.user = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.msgInboxArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.msgDto.msgText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.msgDto.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css']
            }]
    }], function () { return [{ type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game/board/board.component.ts":
/*!***********************************************!*\
  !*** ./src/app/game/board/board.component.ts ***!
  \***********************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Prototype_USPGun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Prototype/USPGun */ "./src/app/Prototype/USPGun.ts");
/* harmony import */ var _Prototype_AK47Gun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Prototype/AK47Gun */ "./src/app/Prototype/AK47Gun.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var src_app_models_piece__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/piece */ "./src/app/models/piece.ts");
/* harmony import */ var src_app_models_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/time */ "./src/app/models/time.ts");
/* harmony import */ var _Builder_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Builder/builder */ "./src/app/Builder/builder.ts");
/* harmony import */ var _Command_command__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Command/command */ "./src/app/Command/command.ts");
/* harmony import */ var _Strategy_strategy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Strategy/strategy */ "./src/app/Strategy/strategy.ts");
/* harmony import */ var _user_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../user/player */ "./src/app/user/player.ts");
/* harmony import */ var src_app_Singleton_gameBot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Singleton/gameBot */ "./src/app/Singleton/gameBot.ts");
/* harmony import */ var _Bridge_KeyboardControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../Bridge/KeyboardControl */ "./src/app/Bridge/KeyboardControl.ts");
/* harmony import */ var src_app_Composite_composite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Composite/composite */ "./src/app/Composite/composite.ts");
/* harmony import */ var ts_stopwatch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ts-stopwatch */ "./node_modules/ts-stopwatch/dist/es/index.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _Bridge_GUIControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Bridge/GUIControl */ "./src/app/Bridge/GUIControl.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


















const _c0 = ["board"];
function BoardComponent_li_41_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_li_41_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const gun_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.cloneDeep(gun_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Klonuoti (Deep) -15 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardComponent_li_41_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_li_41_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const gun_r4 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.clone(gun_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Klonuoti -10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BoardComponent_li_41_button_5_Template, 3, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_li_41_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const gun_r4 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.setVersus(gun_r4, "Jonas"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Jonas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_li_41_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const gun_r4 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.setVersus(gun_r4, "Petras"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Petras");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_li_41_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const gun_r4 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.setVersus(gun_r4, "Ona"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ona");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gun_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", gun_r4.name, " priklausantis ", gun_r4.owner.name, " oponentas ", gun_r4.oponent.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gun_r4.name == "USP");
} }
function BoardComponent_li_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gun_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", gun_r14.name, " oponentas ", gun_r14.oponent.name, " ");
} }
function BoardComponent_li_53_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_li_53_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const gun_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.setVersus(gun_r15, "Jonas"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Jonas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_li_53_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const gun_r15 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.setVersus(gun_r15, "Petras"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Petras");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_li_53_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const gun_r15 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.setVersus(gun_r15, "Ona"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ona");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_li_53_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const gun_r15 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.shoot(gun_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Shoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gun_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", gun_r15.name, " oponentas ", gun_r15.oponent.name, " ");
} }
//import { Facade } from 'src/app/models/Facade';
class BoardComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.player = new _user_player__WEBPACK_IMPORTED_MODULE_9__["Player"]();
        this.time = new src_app_models_time__WEBPACK_IMPORTED_MODULE_5__["Time"]({ start: 0, elapsed: 0, level: 1000 });
        this.stopwatch = new ts_stopwatch__WEBPACK_IMPORTED_MODULE_13__["Stopwatch"]();
        this.strategy = new _Strategy_strategy__WEBPACK_IMPORTED_MODULE_8__["Context"](new _Strategy_strategy__WEBPACK_IMPORTED_MODULE_8__["defender1"]());
        this.pieceCount = 0;
        this.keyboardControl = new _Bridge_KeyboardControl__WEBPACK_IMPORTED_MODULE_11__["KeyboardControl"]();
        this.gunsArray = [];
        this.gunsDeepCopiesArray = [];
        this.gunsShallowCopiesArray = [];
        this.oponents = [{ id: "1", name: "Petras" }, { id: "1", name: "Jonas" }, { id: "1", name: "Ona" }];
        this.task1 = new src_app_Composite_composite__WEBPACK_IMPORTED_MODULE_12__["Task"]('Raudonas J nukrenta ɾ', 2, './../../../images/T180.svg');
        this.task2 = new src_app_Composite_composite__WEBPACK_IMPORTED_MODULE_12__["Task"]('Mėlynas Z-blokas nukrenta N', 2, './../../../images/J180.svg');
        this.task3 = new src_app_Composite_composite__WEBPACK_IMPORTED_MODULE_12__["Task"]('Raudonas L nukrenta ﹂', 2, './../../../images/J180.svg');
        this.task4 = new src_app_Composite_composite__WEBPACK_IMPORTED_MODULE_12__["Task"]('geltonas T nukrenta ⊣', 2, './../../../images/J180.svg');
        this.task5 = new src_app_Composite_composite__WEBPACK_IMPORTED_MODULE_12__["Task"]('Žalias S-blokas nukrenta ᔕ', 2, './../../../images/J180.svg');
        this.task6 = new src_app_Composite_composite__WEBPACK_IMPORTED_MODULE_12__["Task"]('Mėlynas T-blokas nukrenta T', 2, './../../../images/J180.svg');
        this.rootTaskBank = new src_app_Composite_composite__WEBPACK_IMPORTED_MODULE_12__["TaskBank"]();
        this.TaskBank1 = new src_app_Composite_composite__WEBPACK_IMPORTED_MODULE_12__["TaskBank"]();
        this.TaskBank2 = new src_app_Composite_composite__WEBPACK_IMPORTED_MODULE_12__["TaskBank"]();
        this.TaskBank3 = new src_app_Composite_composite__WEBPACK_IMPORTED_MODULE_12__["TaskBank"]();
        this.date = new Date();
        this.rotateClockwise = function (clockwise, N) {
            var matrix = JSON.parse(JSON.stringify(clockwise));
            for (var m = 0; m < N; m++) {
                matrix = matrix.reverse();
                // swap the symmetric elements
                for (var i = 0; i < matrix.length; i++) {
                    for (var j = 0; j < i; j++) {
                        var temp = matrix[i][j];
                        matrix[i][j] = matrix[j][i];
                        matrix[j][i] = temp;
                    }
                }
            }
            return matrix;
        };
    }
    ngOnInit() {
        this.userService.getUserProfile().subscribe((res) => {
            this.player = new _user_player__WEBPACK_IMPORTED_MODULE_9__["Player"]({ id: res.userId, name: res.UserName });
        });
        this.initBoard();
    }
    keyEvent(event) {
        event.preventDefault();
        var p = Object.assign({}, this.piece.dto);
        switch (event.keyCode) {
            case _shared_constants__WEBPACK_IMPORTED_MODULE_3__["KEY"].E: {
                if (this.commandShape == null) {
                    this.commandShape = new _Command_command__WEBPACK_IMPORTED_MODULE_7__["changeShape"](this.piece);
                }
                this.commandShape.execute();
                break;
            }
            case _shared_constants__WEBPACK_IMPORTED_MODULE_3__["KEY"].R: {
                this.commandShape.undo();
                break;
            }
            case _shared_constants__WEBPACK_IMPORTED_MODULE_3__["KEY"].D: {
                if (this.commandColor == null) {
                    this.commandColor = new _Command_command__WEBPACK_IMPORTED_MODULE_7__["changeColor"](this.piece);
                }
                this.commandColor.execute();
                break;
            }
            case _shared_constants__WEBPACK_IMPORTED_MODULE_3__["KEY"].F: {
                this.commandColor.undo();
                break;
            }
            case _shared_constants__WEBPACK_IMPORTED_MODULE_3__["KEY"].RIGHT: {
                // p.x++;
                this.move(this.keyboardControl.right(p));
                break;
            }
            case _shared_constants__WEBPACK_IMPORTED_MODULE_3__["KEY"].LEFT: {
                //p.x--;
                this.move(this.keyboardControl.left(p));
                break;
            }
            case _shared_constants__WEBPACK_IMPORTED_MODULE_3__["KEY"].DOWN: {
                //p.y++;
                this.move(this.keyboardControl.down(p));
                break;
            }
            case _shared_constants__WEBPACK_IMPORTED_MODULE_3__["KEY"].UP: {
                //p = this.boardService.rotate(p);
                this.move(this.keyboardControl.rotate(p));
                this.piece.rotationCount++;
                break;
            }
            default: {
                //statements;
                break;
            }
        }
    }
    initBoard() {
        this.rootTaskBank.addComponent(this.TaskBank1);
        this.rootTaskBank.addComponent(this.TaskBank2);
        this.rootTaskBank.addComponent(this.TaskBank3);
        this.TaskBank1.addComponent(this.task1);
        this.TaskBank1.addComponent(this.task2);
        this.TaskBank2.addComponent(this.task3);
        this.TaskBank2.addComponent(this.task4);
        this.TaskBank3.addComponent(this.task5);
        this.TaskBank3.addComponent(this.task6);
        // Get the 2D context that we draw on.
        this.ctx = this.canvas.nativeElement.getContext('2d');
        // Calculate size of canvas from constants.
        this.ctx.canvas.width = _shared_constants__WEBPACK_IMPORTED_MODULE_3__["COLS"] * _shared_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_SIZE"];
        this.ctx.canvas.height = _shared_constants__WEBPACK_IMPORTED_MODULE_3__["ROWS"] * _shared_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_SIZE"];
        this.ctx.scale(_shared_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_SIZE"], _shared_constants__WEBPACK_IMPORTED_MODULE_3__["BLOCK_SIZE"]);
        this.boardService.getEmptyBoard();
    }
    //play() {
    //  this.board = this.boardService.getBoardById(this.player.Id)
    //  this.piece = new Piece(this.ctx);
    //  //this.piece.draw();
    //  this.animate();
    //  this.boardService.broadcastPiece(this.piece.dto);
    //}
    animate(now = 0) {
        console.log(this.stopwatch.getTime());
        // Update elapsed time.
        this.time.elapsed = now - this.time.start;
        // If elapsed time has passed time for current level
        if (this.time.elapsed > this.time.level) {
            // Reset start time
            this.time.start = now;
            this.time = Object(src_app_models_time__WEBPACK_IMPORTED_MODULE_5__["getSpeed"])(this.time, this.player.level);
            if (this.pieceCount > 0) {
                //this.move(this.blue.handle(this.piece.color, this.player.name, this.piece, this.boardService));
                //=============Strategy Spell=======================
                switch (this.piece.color.toLowerCase()) {
                    case "blue":
                        this.strategy.setStrategy(new _Strategy_strategy__WEBPACK_IMPORTED_MODULE_8__["defender1"]());
                        this.move(this.strategy.defend(this.player.name, this.piece, this.boardService));
                        break;
                    case "yellow":
                        this.strategy.setStrategy(new _Strategy_strategy__WEBPACK_IMPORTED_MODULE_8__["defender4"]());
                        this.strategy.defend(this.player.name, this.piece, this.boardService);
                        break;
                    default:
                }
                //==================================
            }
            if (!this.drop()) {
                this.gameOver();
                return;
            }
        }
        this.draw();
        this.requestId = requestAnimationFrame(this.animate.bind(this));
    }
    move(p) {
        if (this.boardService.valid(p, this.board)) {
            this.piece.move(p);
            this.piece.shape = p.shape;
            this.piece.x = p.x;
            this.piece.y = p.y;
            this.boardService.broadcastPiece(this.piece.dto);
        }
        else
            console.log("not valid", p, this.piece);
    }
    drop() {
        var p = Object.assign({}, this.piece.dto);
        p.y++;
        if (this.boardService.valid(p, this.board)) {
            this.piece.move(p);
            this.boardService.broadcastPiece(this.piece.dto);
        }
        else {
            this.freeze();
            this.clearLines();
            this.boardService.broadcastBoard(this.board);
            if (this.piece.y === 0) {
                // Game over
                return false;
            }
            this.piece = new src_app_models_piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](this.ctx);
            this.pieceCount--;
            //=============Strategy Spell=======================
            if (this.pieceCount > 0) {
                if (this.piece.color.toLowerCase() == "green") {
                    this.strategy.setStrategy(new _Strategy_strategy__WEBPACK_IMPORTED_MODULE_8__["defender2"]());
                    this.strategy.defend(this.player.name, this.piece, this.boardService);
                }
                else if (this.piece.color.toLowerCase() == "red") {
                    this.strategy.setStrategy(new _Strategy_strategy__WEBPACK_IMPORTED_MODULE_8__["defender3"]());
                    this.strategy.defend(this.player.name, this.piece, this.boardService);
                }
                else {
                    _shared_constants__WEBPACK_IMPORTED_MODULE_3__["KEY"].RIGHT = 39;
                    _shared_constants__WEBPACK_IMPORTED_MODULE_3__["KEY"].LEFT = 37;
                }
            }
            else {
                _shared_constants__WEBPACK_IMPORTED_MODULE_3__["KEY"].RIGHT = 39;
                _shared_constants__WEBPACK_IMPORTED_MODULE_3__["KEY"].LEFT = 37;
            }
            this.piece.rotationCount = 0;
            _shared_constants__WEBPACK_IMPORTED_MODULE_3__["KEY"].UP = 38;
            this.commandColor = null;
            this.commandShape = null;
            /////
            //this.piece = this.next;
            //this.next = new Piece(this.ctx);
            //this.next.drawNext(this.ctxNext);
        }
        return true;
    }
    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.piece.draw();
        this.drawBoard();
    }
    drawBoard() {
        this.board.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillStyle = _shared_constants__WEBPACK_IMPORTED_MODULE_3__["COLORS"][value];
                    this.ctx.fillRect(x, y, 1, 1);
                }
            });
        });
    }
    ///when piece cannot move anymore
    freeze() {
        this.piece.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.board[y + this.piece.y][x + this.piece.x] = value;
                }
            });
        });
        //console.table(this.board);
    }
    clearLines() {
        let lines = 0;
        this.board.forEach((row, y) => {
            // If every value is greater than 0.
            if (row.every(value => value > 0)) {
                lines++;
                // Remove the row.
                this.board.splice(y, 1);
                // Add a zero filled at the top.
                this.board.unshift(Array(_shared_constants__WEBPACK_IMPORTED_MODULE_3__["COLS"]).fill(0));
            }
        });
        if (lines > 0) {
            // Add points if we cleared some lines
            this.player.points += this.getLineClearPoints(lines, this.player.level);
            this.player.lines += lines;
            // If we have reached the lines per level
            if (this.player.lines >= 1 /*LINES_PER_LEVEL*/) {
                // Goto next level
                this.player.level++;
                // Remove lines so we start working for the next level
                this.player.lines -= 1; //LINES_PER_LEVEL;
                // Increase speed of game.
                this.time.level = _shared_constants__WEBPACK_IMPORTED_MODULE_3__["LEVEL"][this.player.level];
            }
        }
    }
    gameOver() {
        cancelAnimationFrame(this.requestId);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(1, 3, 8, 1.2);
        this.ctx.font = '1px Arial';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText('GAME OVER', 1.8, 4);
        const s = src_app_Singleton_gameBot__WEBPACK_IMPORTED_MODULE_10__["Bot"].getInstance();
        this.chatService.broadcastMessage(s.gameOverMessage(this.player));
    }
    getLineClearPoints(lines, level) {
        const lineClearPoints = lines === 1 ? _shared_constants__WEBPACK_IMPORTED_MODULE_3__["POINTS"].SINGLE :
            lines === 2 ? _shared_constants__WEBPACK_IMPORTED_MODULE_3__["POINTS"].DOUBLE :
                lines === 3 ? _shared_constants__WEBPACK_IMPORTED_MODULE_3__["POINTS"].TRIPLE :
                    lines === 4 ? _shared_constants__WEBPACK_IMPORTED_MODULE_3__["POINTS"].TETRIS : 0;
        return (level + 1) * lineClearPoints;
    }
    play() {
        this.board = this.boardService.getBoardById(this.player.Id);
        this.piece = new src_app_models_piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](this.ctx);
        console.log("play");
        //this.piece.draw();
        this.animate();
        this.boardService.broadcastPiece(this.piece.dto);
    }
    player1() {
        if (this.player.points >= -200) {
            this.player.points -= 200;
            this.pieceCount = 5;
        }
    }
    bomb(bomb) {
        this.piece.setShape(bomb.shape);
        this.piece.setColor(bomb.color);
        this.piece.setRadius(bomb.radius);
    }
    getAK47() {
        this.player.points = this.player.points - 50;
        const kalasas = new _Prototype_AK47Gun__WEBPACK_IMPORTED_MODULE_2__["AK47Gun"]();
        kalasas.owner = this.player;
        this.gunsArray.push(kalasas);
    }
    getUSP() {
        this.player.points = this.player.points - 50;
        const usp = new _Prototype_USPGun__WEBPACK_IMPORTED_MODULE_1__["USPGun"]();
        usp.owner = this.player;
        this.gunsArray.push(usp);
    }
    player2() {
        const director = new _Builder_builder__WEBPACK_IMPORTED_MODULE_6__["Director"]();
        const builder = new _Builder_builder__WEBPACK_IMPORTED_MODULE_6__["PieceBuilder"]();
        director.setBuilder(builder);
        director.buildBomb();
        var bomb = builder.getSpecialPiece();
        this.piece.color = bomb.color;
        this.piece.shape = bomb.shape;
        this.piece.dto.shape = bomb.shape;
    }
    clone(gun) {
        this.player.points = this.player.points - 10;
        const newGun = gun.clone();
        this.gunsShallowCopiesArray.push(newGun);
    }
    cloneDeep(gun) {
        this.player.points = this.player.points - 15;
        this.gunsDeepCopiesArray.push(gun.cloneDeep());
    }
    setVersus(gun, name) {
        gun.oponent.name = name;
    }
    shoot(gun) {
        if (gun) {
            console.log(gun.damage + gun.oponent.name);
            let index = this.gunsDeepCopiesArray.indexOf(gun);
            this.gunsDeepCopiesArray.splice(index, 1);
        }
        else {
            this.gunsShallowCopiesArray.forEach(element => {
                console.log(element.damage + element.oponent.name);
                this.player.points = this.player.points - 5;
                this.gunsShallowCopiesArray = [];
            });
        }
    }
    dropBomb() {
        const director = new _Builder_builder__WEBPACK_IMPORTED_MODULE_6__["Director"]();
        const builder = new _Builder_builder__WEBPACK_IMPORTED_MODULE_6__["PieceBuilder"]();
        director.setBuilder(builder);
        director.buildBomb();
        const build = builder.getSpecialPiece();
        this.bomb(build);
    }
    //Composite
    positionTask(requiredColor, requiredShape, color, shape, task) {
        if (requiredColor === color && requiredShape === shape) {
            task.setToCompleted();
        }
    }
    test() {
        console.log(this.rootTaskBank.getTasks());
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_14__["ChatService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["game-board"]], viewQuery: function BoardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, hostBindings: function BoardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function BoardComponent_keydown_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { boardService: "boardService", userService: "userService" }, decls: 54, vars: 8, consts: [[3, "piece", "emitPiece"], [1, "grid"], [1, "game-board"], ["board", ""], [1, "right-column"], ["src", "../../../assets/images/T180.png", "alt", "J"], [1, "play-button", 3, "click"], [1, "play-button", 2, "color", "red"], [1, "play-button", 2, "color", "yellow", 3, "click"], [4, "ngFor", "ngForOf"], [3, "click"], [3, "click", 4, "ngIf"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "gui-movement", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emitPiece", function BoardComponent_Template_gui_movement_emitPiece_2_listener($event) { return ctx.move($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "TETRIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tasks:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_21_listener() { return ctx.play(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_23_listener() { return ctx.test(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Spell 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_25_listener() { return ctx.player1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Spell 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_27_listener() { return ctx.player2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Spell 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Defender 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Defender 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_33_listener() { return ctx.getAK47(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Gauti AK47 (-50)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_35_listener() { return ctx.getUSP(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Gauti USP (-50)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Turimi ginklai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, BoardComponent_li_41_Template, 13, 4, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Ginklu shallow klonai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_46_listener() { return ctx.shoot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Shoot -5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, BoardComponent_li_49_Template, 3, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Ginklu Deep klonai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, BoardComponent_li_53_Template, 12, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.player.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("piece", ctx.piece);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Score: ", ctx.player.points, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lines: ", ctx.player.lines, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level: ", ctx.player.level, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gunsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gunsShallowCopiesArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gunsDeepCopiesArray);
    } }, directives: [_Bridge_GUIControl__WEBPACK_IMPORTED_MODULE_15__["GUIControl"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'game-board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.css']
            }]
    }], function () { return [{ type: _services_chat_service__WEBPACK_IMPORTED_MODULE_14__["ChatService"] }]; }, { boardService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['board', { static: true }]
        }], keyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/board.component */ "./src/app/game/board/board.component.ts");
/* harmony import */ var _oponent_board_oponent_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oponent-board/oponent-board.component */ "./src/app/game/oponent-board/oponent-board.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat/chat.component */ "./src/app/chat/chat.component.ts");







class GameComponent {
    constructor(bService, uService) {
        this.bService = bService;
        this.uService = uService;
        this.boardService = bService;
        this.userService = uService;
    }
    ngOnInit() {
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 8, vars: 4, consts: [[1, "container"], [1, "row"], [1, "col"], [3, "boardService", "userService"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "game-board", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "oponent-board", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boardService", ctx.boardService)("userService", ctx.userService);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boardService", ctx.boardService)("userService", ctx.userService);
    } }, directives: [_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"], _oponent_board_oponent_board_component__WEBPACK_IMPORTED_MODULE_4__["OponentBoardComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.css']
            }]
    }], function () { return [{ type: _services_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game/oponent-board/oponent-board.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/game/oponent-board/oponent-board.component.ts ***!
  \***************************************************************/
/*! exports provided: OponentBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OponentBoardComponent", function() { return OponentBoardComponent; });
/* harmony import */ var _user_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../user/player */ "./src/app/user/player.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _services_subscriber_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/subscriber.service */ "./src/app/services/subscriber.service.ts");





const _c0 = ["board"];
class OponentBoardComponent {
    constructor(subscriberService) {
        this.subscriberService = subscriberService;
        //token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOiJmZGU2YTg5Ny0xMmNhLTRjYjEtYTQwZS02ZjYwODk0OWI0ZGUiLCJuYmYiOjE2MDE4ODgzNTQsImV4cCI6MTYxNzYxMzE1NCwiaWF0IjoxNjAxODg4MzU0fQ.Zpv7hvOteKNtd9RGEzxux6ZT4-C9nnmnIKVt4j_kMMM"
        this.player = new _user_player__WEBPACK_IMPORTED_MODULE_0__["Player"]({ id: "fde6a897-12ca-4cb1-a40e-6f608949b4de", name: "player2" });
    }
    getPlayerName() {
        return null;
    }
    ngOnInit() {
        this.subscriberService.add(this);
        this.initBoard();
        this.boardService.retrieveMapperPiece().subscribe((receivedObj) => {
            this.pieceDto = receivedObj;
            this.draw(receivedObj);
        });
        /*this.boardService.retrieveMapperBoard().subscribe((retrieveObj: number[][]) => {
          this.board = retrieveObj;
          //this.drawBoard()
        })*/
    }
    ngOnDestroy() {
        this.subscriberService.remove(this);
    }
    update(subject) {
        console.log("OBSERVER updates oponent board");
        this.subscriberService.retrieveMapperBoard().subscribe((retrieveObj) => {
            this.board = retrieveObj;
        });
    }
    initBoard() {
        // Get the 2D context that we draw on.
        this.ctx = this.canvas.nativeElement.getContext('2d');
        // Calculate size of canvas from constants.
        this.ctx.canvas.width = _shared_constants__WEBPACK_IMPORTED_MODULE_2__["COLS"] * _shared_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SIZE"];
        this.ctx.canvas.height = _shared_constants__WEBPACK_IMPORTED_MODULE_2__["ROWS"] * _shared_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SIZE"];
        this.ctx.scale(_shared_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SIZE"], _shared_constants__WEBPACK_IMPORTED_MODULE_2__["BLOCK_SIZE"]);
        this.boardService.getEmptyBoard();
    }
    draw(obj) {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = obj.color;
        obj.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    // this.x & this.y = position on the board
                    // x & y position are the positions of the shape
                    this.ctx.fillRect(obj.x + x, obj.y + y, 1, 1);
                }
            });
        });
        this.drawBoard();
    }
    drawBoard() {
        if (this.board != null) {
            this.board.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value > 0) {
                        this.ctx.fillStyle = _shared_constants__WEBPACK_IMPORTED_MODULE_2__["COLORS"][value];
                        this.ctx.fillRect(x, y, 1, 1);
                    }
                });
            });
        }
    }
}
OponentBoardComponent.ɵfac = function OponentBoardComponent_Factory(t) { return new (t || OponentBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_subscriber_service__WEBPACK_IMPORTED_MODULE_3__["SubscriberService"])); };
OponentBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OponentBoardComponent, selectors: [["oponent-board"]], viewQuery: function OponentBoardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, inputs: { boardService: "boardService", userService: "userService" }, decls: 6, vars: 1, consts: [[1, "grid"], [1, "oponent-board", 2, "border", "2px solid black"], ["board", ""], [1, "right-column"]], template: function OponentBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.player.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvb3BvbmVudC1ib2FyZC9vcG9uZW50LWJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OponentBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'oponent-board',
                templateUrl: './oponent-board.component.html',
                styleUrls: ['./oponent-board.component.css']
            }]
    }], function () { return [{ type: _services_subscriber_service__WEBPACK_IMPORTED_MODULE_3__["SubscriberService"] }]; }, { boardService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], userService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['board', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/models/SpecialPiece.ts":
/*!****************************************!*\
  !*** ./src/app/models/SpecialPiece.ts ***!
  \****************************************/
/*! exports provided: SpecialPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialPiece", function() { return SpecialPiece; });
class SpecialPiece {
}


/***/ }),

/***/ "./src/app/models/board.ts":
/*!*********************************!*\
  !*** ./src/app/models/board.ts ***!
  \*********************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
class Board {
    constructor(values) {
        Object.assign(this, values);
    }
}


/***/ }),

/***/ "./src/app/models/piece.ts":
/*!*********************************!*\
  !*** ./src/app/models/piece.ts ***!
  \*********************************/
/*! exports provided: Piece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Piece", function() { return Piece; });
/* harmony import */ var _Dto_PieceDto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Dto/PieceDto */ "./src/app/Dto/PieceDto.ts");
/* harmony import */ var _piecesAbstractFactory_abstractFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../piecesAbstractFactory/abstractFactory */ "./src/app/piecesAbstractFactory/abstractFactory.ts");


class Piece {
    constructor(ctx) {
        this.ctx = ctx;
        this.rotationCount = 0;
        this.dto = new _Dto_PieceDto__WEBPACK_IMPORTED_MODULE_0__["PieceDto"]();
        this.spawn();
    }
    move(p) {
        this.x = this.dto.x = p.x;
        this.y = this.dto.y = p.y;
        this.shape = this.dto.shape = p.shape;
    }
    spawn() {
        this.dto = Object(_piecesAbstractFactory_abstractFactory__WEBPACK_IMPORTED_MODULE_1__["getRandomPiece"])();
        this.color = this.dto.color;
        this.shape = this.dto.shape;
        // Position where the shape spawns.
        this.x = this.dto.x = 3;
        this.y = this.dto.y = 0;
    }
    setShape(shape) {
        this.dto.shape = shape;
    }
    setPower(power) {
        this.dto.power = power;
    }
    setColor(color) {
        this.dto.color = color;
    }
    setRadius(radius) {
        this.dto.radius = radius;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    // this.x & this.y = position on the board
                    // x & y position are the positions of the shape
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }
}


/***/ }),

/***/ "./src/app/models/time.ts":
/*!********************************!*\
  !*** ./src/app/models/time.ts ***!
  \********************************/
/*! exports provided: Time, getSpeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpeed", function() { return getSpeed; });
class Time {
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
function getSpeed(timeObject, level) {
    var factory = new TimeFactory();
    if (level < 4) {
        return factory.getSlowSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
    }
    else if (level < 7) {
        return factory.getNormalSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
    }
    else if (level < 10) {
        return factory.getFastSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
    }
    else if (level < 12) {
        return factory.getVeryFastSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
    }
    else {
        return factory.getExpertSpeed({ start: timeObject.start, elapsed: timeObject.elapsed, level: timeObject.level });
    }
}


/***/ }),

/***/ "./src/app/piecesAbstractFactory/abstractFactory.ts":
/*!**********************************************************!*\
  !*** ./src/app/piecesAbstractFactory/abstractFactory.ts ***!
  \**********************************************************/
/*! exports provided: BlueJShape, getRandomPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueJShape", function() { return BlueJShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomPiece", function() { return getRandomPiece; });
class RedFactory {
    createJShape() {
        return new RedJShape();
    }
    createOShape() {
        return new RedOShape();
    }
    createLShape() {
        return new RedLShape();
    }
    createZShape() {
        return new RedZShape();
    }
    createTShape() {
        return new RedTShape();
    }
    createSShape() {
        return new RedSShape();
    }
}
class BlueFactory {
    createJShape() {
        const simple = new ConcreteBlueJShape();
        const decorator1 = new SoundDecorator(simple);
        return new AlertDecorator(decorator1);
    }
    createOShape() {
        return new BlueOShape();
    }
    createLShape() {
        return new BlueLShape();
    }
    createZShape() {
        return new BlueZShape();
    }
    createTShape() {
        return new BlueTShape();
    }
    createSShape() {
        return new BlueSShape();
    }
}
class GreenFactory {
    createJShape() {
        return new GreenJShape();
    }
    createOShape() {
        return new GreenOShape();
    }
    createLShape() {
        return new GreenLShape();
    }
    createZShape() {
        return new GreenZShape();
    }
    createTShape() {
        return new GreenTShape();
    }
    createSShape() {
        return new GreenSShape();
    }
}
class YellowFactory {
    createJShape() {
        return new YellowJShape();
    }
    createOShape() {
        return new YellowOShape();
    }
    createLShape() {
        return new YellowLShape();
    }
    createZShape() {
        return new YellowZShape();
    }
    createTShape() {
        return new YellowTShape();
    }
    createSShape() {
        return new YellowSShape();
    }
}
class JShape {
    constructor() {
        this.shape = [[2, 0, 0], [2, 2, 2], [0, 0, 0]];
    }
}
class RedJShape extends JShape {
    constructor() {
        super();
        this.color = "red";
        console.log("abstract factory created red JShape");
    }
}
class BlueJShape extends JShape {
    constructor() {
        super();
        this.color = "blue";
    }
}
class GreenJShape extends JShape {
    constructor() {
        super();
        this.color = "green";
        console.log("abstract factory created green JShape");
    }
}
class YellowJShape extends JShape {
    constructor() {
        super();
        this.color = "yellow";
        console.log("abstract factory created yellow JShape");
    }
}
class OShape {
    constructor() {
        this.shape = [[2, 2, 0], [2, 2, 0], [0, 0, 0]];
    }
}
class RedOShape extends OShape {
    constructor() {
        super();
        this.color = "red";
        console.log("abstract factory created red OShape");
    }
}
class BlueOShape extends OShape {
    constructor() {
        super();
        this.color = "blue";
        console.log("abstract factory created blue OShape");
    }
}
class GreenOShape extends OShape {
    constructor() {
        super();
        this.color = "green";
        console.log("abstract factory created green OShape");
    }
}
class YellowOShape extends OShape {
    constructor() {
        super();
        this.color = "yellow";
        console.log("abstract factory created yellow OShape");
    }
}
class LShape {
    constructor() {
        this.shape = [[0, 0, 0], [2, 2, 2], [2, 0, 0]];
    }
}
class RedLShape extends LShape {
    constructor() {
        super();
        this.color = "red";
        console.log("abstract factory created red LShape");
    }
}
class BlueLShape extends LShape {
    constructor() {
        super();
        this.color = "blue";
        console.log("abstract factory created blue LShape");
    }
}
class GreenLShape extends LShape {
    constructor() {
        super();
        this.color = "green";
        console.log("abstract factory created green LShape");
    }
}
class YellowLShape extends LShape {
    constructor() {
        super();
        this.color = "yellow";
        console.log("abstract factory created yellow LShape");
    }
}
class ZShape {
    constructor() {
        this.shape = [[0, 0, 0], [2, 2, 0], [0, 2, 2]];
    }
}
class RedZShape extends ZShape {
    constructor() {
        super();
        this.color = "red";
        console.log("abstract factory created red ZShape");
    }
}
class BlueZShape extends ZShape {
    constructor() {
        super();
        this.color = "blue";
        console.log("abstract factory created blue ZShape");
    }
}
class GreenZShape extends ZShape {
    constructor() {
        super();
        this.color = "green";
        console.log("abstract factory created green ZShape");
    }
}
class YellowZShape extends ZShape {
    constructor() {
        super();
        this.color = "yellow";
        console.log("abstract factory created yellow ZShape");
    }
}
class TShape {
    constructor() {
        this.shape = [[2, 2, 2], [0, 2, 0], [0, 0, 0]];
    }
}
class RedTShape extends TShape {
    constructor() {
        super();
        this.color = "red";
        console.log("abstract factory created red TShape");
    }
}
class BlueTShape extends TShape {
    constructor() {
        super();
        this.color = "blue";
        console.log("abstract factory created blue TShape");
    }
}
class GreenTShape extends TShape {
    constructor() {
        super();
        this.color = "green";
        console.log("abstract factory created green TShape");
    }
}
class YellowTShape extends TShape {
    constructor() {
        super();
        this.color = "yellow";
        console.log("abstract factory created yellow TShape");
    }
}
class SShape {
    constructor() {
        this.shape = [[0, 0, 0], [0, 2, 2], [2, 2, 0]];
    }
}
class RedSShape extends SShape {
    constructor() {
        super();
        this.color = "red";
        console.log("abstract factory created red SShape");
    }
}
class BlueSShape extends SShape {
    constructor() {
        super();
        this.color = "blue";
        console.log("abstract factory created blue SShape");
    }
}
class GreenSShape extends SShape {
    constructor() {
        super();
        this.color = "green";
        console.log("abstract factory created green SShape");
    }
}
class YellowSShape extends SShape {
    constructor() {
        super();
        this.color = "yellow";
        console.log("abstract factory created yellow SShape");
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function getRandomPiece() {
    var factoryType = getRandomInt(4);
    let factory = null;
    switch (factoryType) {
        case 0: {
            factory = new RedFactory();
            break;
        }
        case 1: {
            factory = new BlueFactory();
            break;
        }
        case 2: {
            factory = new GreenFactory();
            break;
        }
        case 3: {
            factory = new YellowFactory();
            break;
        }
        default: {
            factory = new BlueFactory();
            break;
        }
    }
    var pieceType = getRandomInt(6);
    switch (pieceType) {
        case 0: {
            return factory.createJShape();
            break;
        }
        case 1: {
            return factory.createOShape();
            break;
        }
        case 2: {
            return factory.createLShape();
            break;
        }
        case 3: {
            return factory.createZShape();
            break;
        }
        case 4: {
            return factory.createTShape();
            break;
        }
        case 5: {
            return factory.createSShape();
            break;
        }
        default: {
            return factory.createJShape();
            break;
        }
    }
}
class ConcreteBlueJShape extends BlueJShape {
    constructor() {
        super();
        this.color = "blue";
        console.log("ConcreteBlueJShape created");
    }
    operation() {
        return 'ConcreteComponent';
    }
}
class Decorator extends BlueJShape {
    constructor(component) {
        super();
        this.wrapee = component;
    }
    operation(option) {
        if (option !== 1) {
            var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
            snd.play();
        }
        else {
            alert("Decorator alert!");
        }
    }
}
class AlertDecorator extends Decorator {
    constructor(shape) {
        super(shape);
        console.log("using alert decorator");
        this.operation();
    }
    operation() {
        super.operation(1);
    }
}
class SoundDecorator extends Decorator {
    constructor(shape) {
        super(shape);
        console.log("using sound decorator");
        this.operation();
    }
    operation() {
        super.operation(2);
    }
}


/***/ }),

/***/ "./src/app/services/board.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/board.service.ts ***!
  \*******************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var _user_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../user/player */ "./src/app/user/player.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _models_board__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/board */ "./src/app/models/board.ts");
/* harmony import */ var _Adapter_Adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Adapter/Adapter */ "./src/app/Adapter/Adapter.ts");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./connection.service */ "./src/app/services/connection.service.ts");











class BoardService {
    constructor(http, connectionService) {
        this.http = http;
        this.connectionService = connectionService;
        this.rootUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].rootUrl + "board/";
        this.boards = [];
        this.sharedPiece = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.sharedBoard = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.adapter = new _Adapter_Adapter__WEBPACK_IMPORTED_MODULE_7__["Adapter"]();
        this.connectionService.connection.on("Spawn", (x, y, color, shape) => {
            this.adapter.mapSpawnPiece(x, y, color, shape);
            this.sharedPiece.next(this.adapter.getPiece());
        });
        this.connectionService.connection.on("BroadcastBoard", (board) => {
            this.sharedBoard.next(board);
        });
        this.connectionService.add(this);
    }
    /* ****************************** Public Mehods **************************************** */
    update() {
        if (this.connectionService.getState() == true) {
            console.log("Board Observer reacted to event");
        }
    }
    broadcastBoard(board) {
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        this.http.post(this.rootUrl + 'broadcarst/board', board, { headers: tokenHeader }).subscribe();
    }
    broadcastPiece(piece) {
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        this.http.post(this.rootUrl + 'start', piece, { headers: tokenHeader }).subscribe();
    }
    broadcastPieceBuilder(piece) {
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        this.http.post(this.rootUrl + 'start', piece, { headers: tokenHeader }).subscribe();
    }
    getEmptyBoard() {
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        this.http.get(this.rootUrl, { headers: tokenHeader }).subscribe((res) => {
            let board = new _models_board__WEBPACK_IMPORTED_MODULE_6__["Board"]({
                player: new _user_player__WEBPACK_IMPORTED_MODULE_0__["Player"]({ id: res.Player }),
                height: res.Height,
                width: res.Width,
                boradMatrix: res.BoardMatrix
            });
            this.boards.push(board);
        });
    }
    getBoards() {
        return this.boards;
    }
    getBoardById(id) {
        return this.boards.find(b => b.player.Id === id).boradMatrix;
    }
    retrieveMapperPiece() {
        return this.sharedPiece.asObservable();
    }
    retrieveMapperBoard() {
        return this.sharedBoard.asObservable();
    }
    // -------------- GAME LOGIC --------------------
    valid(p, board) {
        return p.shape.every((row, dy) => {
            return row.every((value, dx) => {
                let x = p.x + dx;
                let y = p.y + dy;
                return (this.isEmpty(value) ||
                    (this.insideWalls(x) &&
                        this.aboveFloor(y) &&
                        this.notOccupied(board, x, y)));
            });
        });
    }
    isEmpty(value) {
        return value === 0;
    }
    insideWalls(x) {
        return x >= 0 && x < _shared_constants__WEBPACK_IMPORTED_MODULE_5__["COLS"];
    }
    aboveFloor(y) {
        return y <= _shared_constants__WEBPACK_IMPORTED_MODULE_5__["ROWS"];
    }
    notOccupied(board, x, y) {
        return board[y] && board[y][x] === 0;
    }
    rotate(piece) {
        let p = JSON.parse(JSON.stringify(piece));
        for (let y = 0; y < p.shape.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
            }
        }
        p.shape.forEach(row => row.reverse());
        return p;
    }
}
BoardService.ɵfac = function BoardService_Factory(t) { return new (t || BoardService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_connection_service__WEBPACK_IMPORTED_MODULE_8__["ConnectionService"])); };
BoardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BoardService, factory: BoardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BoardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _connection_service__WEBPACK_IMPORTED_MODULE_8__["ConnectionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _Singleton_gameBot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Singleton/gameBot */ "./src/app/Singleton/gameBot.ts");
/* harmony import */ var _Dto_MessageDto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Dto/MessageDto */ "./src/app/Dto/MessageDto.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connection.service */ "./src/app/services/connection.service.ts");








class ChatService {
    constructor(http, connectionService) {
        this.http = http;
        this.connectionService = connectionService;
        this.POST_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].rootUrl + "chat/send/";
        this.receiveMessageObject = new _Dto_MessageDto__WEBPACK_IMPORTED_MODULE_1__["MessageDto"]("", "");
        this.sharedObj = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.connectionService.connection.on("ReceiveOne", (user, message) => {
            this.mapReceiveMessage(user, message);
        });
        this.connectionService.add(this);
    }
    mapReceiveMessage(user, message) {
        this.receiveMessageObject.user = user;
        this.receiveMessageObject.msgText = message;
        this.sharedObj.next(this.receiveMessageObject);
    }
    /* ****************************** Public Mehods **************************************** */
    //Cals the controller method
    broadcastMessage(msgDto) {
        //console.log(msgDto)
        this.http.post(this.POST_URL, msgDto).subscribe();
    }
    retrieveMapperObject() {
        return this.sharedObj.asObservable();
    }
    update() {
        if (this.connectionService.getState() == true) {
            console.log("Chat Observer reacted to event");
            this.http.post(this.POST_URL, _Singleton_gameBot__WEBPACK_IMPORTED_MODULE_0__["Bot"].getInstance().introRules()).subscribe();
        }
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_connection_service__WEBPACK_IMPORTED_MODULE_6__["ConnectionService"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _connection_service__WEBPACK_IMPORTED_MODULE_6__["ConnectionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/connection.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/connection.service.ts ***!
  \************************************************/
/*! exports provided: ConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionService", function() { return ConnectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/signalr */ "./node_modules/@microsoft/signalr/dist/esm/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ConnectionService {
    constructor(http) {
        this.http = http;
        this.connectoin = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]().withUrl("https://localhost:44356/tetrissocket", {
            //player1 Token
            accessTokenFactory: () => localStorage.getItem('token')
        }) //mapping to the tetrishus as in startup
            .configureLogging(_microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information)
            .build();
        this.POST_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].rootUrl + "chat/send/";
        this.state = false;
        this.observers = [];
        this.connectoin.onclose(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.start();
        }));
        this.start();
    }
    // Observer metodai --------------------------
    add(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }
    remove(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }
    notify() {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    //----------------------------------------------
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.connectoin.start();
                console.log("connected!");
                this.state = true;
                this.notify();
            }
            catch (err) {
                console.log(err);
                console.log("Prisijungti nepavyko");
                setTimeout(() => this.start(), 5000);
            }
        });
    }
    get connection() {
        return this.connectoin;
    }
    getState() {
        return this.state;
    }
}
ConnectionService.ɵfac = function ConnectionService_Factory(t) { return new (t || ConnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ConnectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConnectionService, factory: ConnectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConnectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/subscriber.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/subscriber.service.ts ***!
  \************************************************/
/*! exports provided: SubscriberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriberService", function() { return SubscriberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connection.service */ "./src/app/services/connection.service.ts");




class SubscriberService {
    constructor(connectionService) {
        this.connectionService = connectionService;
        this.sharedBoard = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.observers = [];
        this.connectionService.connection.on("BroadcastBoard", (board) => {
            this.boardState = board;
            this.sharedBoard.next(board);
            this.notify('Subscriber service Subject: Notifying observers...');
        });
    }
    add(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subscriber service Subject: Observer has been attached already.');
        }
        console.log('Subscriber service Subject: Attached an observer.');
        this.observers.push(observer);
    }
    remove(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subscriber service Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subscriber service Subject: Detached an observer.');
    }
    notify(line) {
        if (line)
            console.log(line);
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    retrieveMapperBoard() {
        return this.sharedBoard.asObservable();
    }
}
SubscriberService.ɵfac = function SubscriberService_Factory(t) { return new (t || SubscriberService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"])); };
SubscriberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubscriberService, factory: SubscriberService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscriberService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _Adapter_Adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Adapter/Adapter */ "./src/app/Adapter/Adapter.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.rootUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rootUrl + "appusers/";
    }
    register(newUser) {
        this.adapter = new _Adapter_Adapter__WEBPACK_IMPORTED_MODULE_0__["Adapter"]();
        this.adapter.mapUser(newUser);
        return this.http.post(this.rootUrl + 'register', this.adapter.getUser());
    }
    login(user) {
        return this.http.post(this.rootUrl + 'login', user);
    }
    getUserProfile() {
        var tokenHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rootUrl + "userprofiles/", { headers: tokenHeader });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/constants.ts":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: COLS, ROWS, BLOCK_SIZE, LINES_PER_LEVEL, KEY, POINTS, SHAPES, SHAPE, COLORS, LEVEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLS", function() { return COLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROWS", function() { return ROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCK_SIZE", function() { return BLOCK_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINES_PER_LEVEL", function() { return LINES_PER_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY", function() { return KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINTS", function() { return POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPES", function() { return SHAPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPE", function() { return SHAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEVEL", function() { return LEVEL; });
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const LINES_PER_LEVEL = 10;
class KEY {
}
KEY.ESC = 27;
KEY.SPACE = 32;
KEY.LEFT = 37;
KEY.RIGHT = 39;
KEY.DOWN = 40;
KEY.UP = 38;
KEY.E = 69;
KEY.R = 82;
KEY.D = 68;
KEY.F = 70;
class POINTS {
}
POINTS.SINGLE = 100;
POINTS.DOUBLE = 300;
POINTS.TRIPLE = 500;
POINTS.TETRIS = 800;
POINTS.SOFT_DROP = 1;
POINTS.HARD_DROP = 2;
class SHAPES {
}
SHAPES.JShape = [[2, 0, 0], [2, 2, 2], [0, 0, 0]];
SHAPES.OShape = [[2, 2, 0], [2, 2, 0], [0, 0, 0]];
SHAPES.LShape = [[0, 0, 0], [2, 2, 2], [2, 0, 0]];
SHAPES.ZShape = [[0, 0, 0], [2, 2, 0], [0, 2, 2]];
SHAPES.TShape = [[2, 2, 2], [0, 2, 0], [0, 0, 0]];
SHAPES.SShape = [[0, 0, 0], [0, 2, 2], [2, 2, 0]];
const SHAPE = [
    [[2, 0, 0], [2, 2, 2], [0, 0, 0]],
    [[2, 2, 0], [2, 2, 0], [0, 0, 0]],
    [[0, 0, 0], [2, 2, 2], [2, 0, 0]],
    [[0, 0, 0], [2, 2, 0], [0, 2, 2]],
    [[2, 2, 2], [0, 2, 0], [0, 0, 0]],
    [[0, 0, 0], [0, 2, 2], [2, 2, 0]]
];
const COLORS = [
    'none',
    'cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'purple',
    'red'
];
class LEVEL {
}
LEVEL[0] = 800;
LEVEL[1] = 720;
LEVEL[2] = 630;
LEVEL[3] = 550;
LEVEL[4] = 470;
LEVEL[5] = 380;
LEVEL[6] = 300;
LEVEL[7] = 220;
LEVEL[8] = 130;
LEVEL[9] = 100;
LEVEL[10] = 80;
LEVEL[11] = 80;
LEVEL[12] = 80;
LEVEL[13] = 70;
LEVEL[14] = 70;
LEVEL[15] = 70;
LEVEL[16] = 50;
LEVEL[17] = 50;
LEVEL[18] = 50;
LEVEL[19] = 30;
LEVEL[20] = 30;


/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], decls: 12, vars: 0, consts: [[1, "navbar", "navbar-light", "bg-light"], [1, "container"], ["id", "navbarMenu"], [1, "navbar", "mr-auto"], [1, "nav-item"], ["routerLink", "user/login", 1, "nav-link"], [1, "sr-only"], ["routerLink", "game", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/user.ts":
/*!********************************!*\
  !*** ./src/app/shared/user.ts ***!
  \********************************/
/*! exports provided: User, NewUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUser", function() { return NewUser; });
class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
}
class NewUser {
    constructor(name, password, password2) {
        this.name = name;
        this.password = password;
        this.password2 = password2;
    }
}


/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _shared_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/user */ "./src/app/shared/user.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class LoginComponent {
    constructor(service) {
        this.service = service;
        this.model = new _shared_user__WEBPACK_IMPORTED_MODULE_0__["User"]("", "");
    }
    onSubmit() {
        this.service.login(this.model).subscribe((res) => localStorage.setItem('token', res.token));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 12, vars: 3, consts: [[3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exampleInputPassword1"], ["type", "text", "id", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.model.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/player.ts":
/*!********************************!*\
  !*** ./src/app/user/player.ts ***!
  \********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor(values = {}) {
        this.Id = "";
        this.name = "";
        this.points = 0;
        this.lines = 0;
        this.level = 0;
        Object.assign(this, values);
    }
}


/***/ }),

/***/ "./src/app/user/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/user */ "./src/app/shared/user.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class RegistrationComponent {
    constructor(service) {
        this.service = service;
        this.model = new src_app_shared_user__WEBPACK_IMPORTED_MODULE_1__["NewUser"]("", "", "");
    }
    onSubmit() {
        this.service.register(this.model).subscribe(res => console.log(res));
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 16, vars: 4, consts: [[3, "ngSubmit"], ["registrationForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exampleInputPassword1"], ["type", "text", "id", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exampleInputPassword2"], ["type", "text", "id", "password2", "name", "password2", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_5_listener($event) { return ctx.model.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_9_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_13_listener($event) { return ctx.model.password2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.password2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/user/login/"]; };
const _c1 = function () { return ["/user/registration/"]; };
class UserComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 13, vars: 4, consts: [[1, "container"], [1, "row"], [1, "nav", "nav-tabs", "justify-content-center"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "col-md-8"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    rootUrl: "https://localhost:44356/api/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dovsav\Documents\GitHub\Tetris\TetrisGame\tetris-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map