import { TestBed } from '@angular/core/testing';
import { BoardService } from './board.service';
describe('BoardService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BoardService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=board.service.spec.js.map