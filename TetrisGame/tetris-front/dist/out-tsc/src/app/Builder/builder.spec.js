import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { PieceBuilder } from './builder';
describe('PieceBuilder', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        TestBed.configureTestingModule({
            declarations: [PieceBuilder]
        });
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PieceBuilder);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    //it('when reset is called it should', () => {
    //  // arrange
    //  const { build } = setup().default();
    //  const p = build();
    //  // act
    //  p.reset();
    //  // assert
    //  // expect(p).toEqual
    //});
    //it('when setShape is called it should', () => {
    //  // arrange
    //  const { build } = setup().default();
    //  const p = build();
    //  // act
    //  p.setShape();
    //  // assert
    //  // expect(p).toEqual
    //});
    //it('when setPlayer is called it should', () => {
    //  // arrange
    //  const { build } = setup().default();
    //  const p = build();
    //  // act
    //  p.setPlayer();
    //  // assert
    //  // expect(p).toEqual
    //});
    //it('when setColor is called it should', () => {
    //  // arrange
    //  const { build } = setup().default();
    //  const p = build();
    //  // act
    //  p.setColor();
    //  // assert
    //  // expect(p).toEqual
    //});
    //it('when getSpecialPiece is called it should', () => {
    //  // arrange
    //  const { build } = setup().default();
    //  const p = build();
    //  // act
    //  p.getSpecialPiece();
    //  // assert
    //  // expect(p).toEqual
    //});
});
//# sourceMappingURL=builder.spec.js.map