import {compoundInterest} from './finance.utils.js';

describe('finance utils',()=> {
    test('compoundInterest',()=> {

        const principal = 2000;
        const time = 5;
        const rate = .08;
        const n = 12;

        const actual = compoundInterest(principal, time, rate, n)
        const expected = 979.6914166032097;
        
        expect(actual).toBe(expected);
    })
})