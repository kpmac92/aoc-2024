import fs from 'fs';
import {parse} from 'csv-parse/sync';

const parseInputFile = (fileName: string, delimiter: string) =>{
    const file = fs.readFileSync(fileName);
    const records = parse(file, {delimiter: delimiter});

    return records;
}

export default parseInputFile;