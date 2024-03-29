import yargs, { boolean, demandOption, describe } from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplicacion table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplicacion table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Multiplicacion table'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'Multiplicaction-table',
        describe: 'File Name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File Destination'
    })
    .check((argv, options) => {
        // console.log({argv, options})
        if (argv.b <1)  throw 'Error: numero es menor a 0';
        return true;
    })
    .parseSync()