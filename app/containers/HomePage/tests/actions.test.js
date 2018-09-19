import { ACTIVE_PANEL } from '../constants';
import { activePanel } from '../actions';


describe('Home Actions', () => {
    describe('activePanel', () => {
        it('should return the correct type and the pass active', () => {
            const active = 1;
            const expectedResult = {
                type: ACTIVE_PANEL,
                active
            };

            expect(activePanel(active)).toEqual(expectedResult);
        });
    });
});
