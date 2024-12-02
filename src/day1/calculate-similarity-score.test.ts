import calculateSimilarityScore from "./calculate-similarity-score";

describe('calculateSimilarityScore', () => {
    it('cacluates similarity score from test data', () => {
        const result = calculateSimilarityScore('test-2');
        expect(result).toEqual(31)
    })

    it('cacluates similarity score from sample data', () => {
        const result = calculateSimilarityScore('sample');
        expect(result).toEqual(25358365)
    })
})