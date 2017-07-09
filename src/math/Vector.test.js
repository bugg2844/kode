import Vector from '../../src/math/Vector';

describe('rotate', () => {
    describe('rotating [1,0,0] 90 degrees', () => {

        const v = new Vector(1,0,0);
        v.rotate(Math.PI / 2);
        
        it('sets x to 0', () => {

            expect(v.x).toEqual(0);
        });

        it('sets y to 1', () => {
            expect(v.y).toEqual(1);
        });
    });
});