import calculateReactorSafety, { calculateReportSafety } from "./reactor-safety-calculator";

describe('calculateReactorSafety', () => {
    it('calculates safety with test data', () => {
        const result = calculateReactorSafety('test');

        expect(result).toEqual(2);
    })

    it('calculates safety with real data', () => {
        const result = calculateReactorSafety('real');

        expect(result).toEqual(463);
    })
})

describe('calculateReportSafety', () => {
    it('returns true when numbers are increasing', () => {
        const report = [1, 2, 3]
        expect(calculateReportSafety(report)).toBeTruthy();
    })

    it('returns false when numbers are increasing and decreasing', () => {
        const report = [1, 2, 1, 2, 3]
        expect(calculateReportSafety(report)).toBeFalsy();
    })

    it('returns true when numbers are decreasing', () => {
        const report = [3, 2, 1]
        expect(calculateReportSafety(report)).toBeTruthy();
    })

    it('returns true when numbers are decreasing by 3', () => {
        const report = [12, 9, 6]
        expect(calculateReportSafety(report)).toBeTruthy();
    })

    it('returns false when numbers are decreasing by 4', () => {
        const report = [16, 12, 8]
        expect(calculateReportSafety(report)).toBeFalsy();
    })

    it('returns false when numbers are increasing by 4', () => {
        const report = [8, 12, 16]
        expect(calculateReportSafety(report)).toBeFalsy();
    })

    it('returns true when numbers are increasing by 3', () => {
        const report = [3, 6, 8]
        expect(calculateReportSafety(report)).toBeTruthy();
    })

    it('returns false when numbers are decreasing then increasing', () => {
        const report = [9, 7, 5, 6]
        expect(calculateReportSafety(report)).toBeFalsy();
    })

    it('returns false when do not change', () => {
        const report = [9, 7, 7]
        expect(calculateReportSafety(report)).toBeFalsy();
    })
})