import fs from 'fs';
import {parse} from 'csv-parse/sync';

const parseInputFile = (fileName: string, delimiter: string) =>{
    const file = fs.readFileSync(fileName);
    const records = parse(file, {delimiter: delimiter, relax_column_count: true});

    return records;
}

export default parseInputFile;