import { TestBed } from '@angular/core/testing';
import { ConnectionService } from './connection.service';
describe('ConnectionService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ConnectionService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=connection.service.spec.js.map