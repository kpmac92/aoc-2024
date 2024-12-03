import parseInputFile from '../utils/parse-input-file';

const calculateListDistance = (prefix : string) => {
    const records = parseInputFile(`src/day1/${prefix}-data.txt`, '   ')

    let list1 : string[] = [];
    let list2 : string[] = [];
    records.forEach(record => {
        list1.push(record[0])
        list2.push(record[1])
    })

    list1.sort()
    list2.sort()

    let sum : number = 0;
    list1.forEach((number, index) => {
        const diff =  Math.abs(parseInt(number) - parseInt(list2[index]))
        sum += diff
    })

    return sum
}

export default calculateListDistance;