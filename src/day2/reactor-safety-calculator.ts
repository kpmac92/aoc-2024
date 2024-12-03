import parseInputFile from "../utils/parse-input-file";

const calculateReactorSafety = (prefix: string) => {
    const reports = parseInputFile(`src/day2/${prefix}-data.txt`, ' ')

    return reports.reduce((safeReports, report) => calculateReportSafety(report) ? safeReports + 1 : safeReports, 0 );
}

export const calculateReportSafety = (report: number[]) => {
    let isSafe = true;
    let isIncreasing = true;
    report.forEach((number, index) => {
        if(index === 0) {
            return;
        }

        const delta = number - report[index - 1];
        
        if(checkForDirectionChange(isIncreasing, delta, index)) {
            isSafe = false;
            return;
        }

        isIncreasing = delta > 0;

        const absDelta = Math.abs(delta);


        if(absDelta > 0 && absDelta < 4) {
            return;
        }

        isSafe = false;
    })

    return isSafe;
}

const checkForDirectionChange = (isIncreasing: boolean, delta: number, index: number) => {
    return isIncreasing === (delta < 0) && index > 1
}

export default calculateReactorSafety;