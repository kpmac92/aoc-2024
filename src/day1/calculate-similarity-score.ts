import fs from 'fs';
import {parse} from 'csv-parse/sync';

const calculateSimilarityScore = (prefix: string) => {
    const file = fs.readFileSync(`src/day1/${prefix}-data.txt`)
    const records = parse(file, {delimiter: '   '})

    let list1 : number[] = [];
    let list2 : number[] = [];

    records.forEach(record => {
        list1.push(record[0])
        list2.push(record[1])
    })

    let score = 0;

    list1.forEach(number => {
        const list2Count = list2.reduce((prev, curr) => curr === number ?  prev + 1  : prev, 0)
        score += number * list2Count;
    })

    return score;
}

export default calculateSimilarityScore;