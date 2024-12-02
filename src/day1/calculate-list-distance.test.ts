import calculateListDistance from "./calculate-list-distance";

describe('calculateListDistance', () => {
    it('calculates the total distance from test file', () => {
        const result = calculateListDistance('test');
        expect(result).toEqual(60117)
    })

    it('calculates the total distance from sample file', () => {
        const result = calculateListDistance('sample');
        expect(result).toEqual(2580760)
    })
})