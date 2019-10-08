import stringify from 'csv-stringify';
import faker from 'faker/locale/fr';
import fs from 'fs';
import path from 'path';
import yargs from 'yargs';

/* Parse command line arguments */

yargs
  .usage('Usage: $0 [options]')
  .example(
    '$0 -n 1000 --file ./sample-data.csv',
    'generate 1000 lines of sample locations data and write them to specified file'
  )
  .alias('f', 'file')
  .nargs('f', 1)
  .describe('f', 'File name')
  .nargs('n', 1)
  .describe('n', 'Number of lines')
  .demandOption(['f', 'n'])
  .help('h')
  .alias('h', 'help');

const { argv } = yargs;

/* Error Handler */

const handleStreamError = err => {
  console.error('💥️', err);
};

/* Initialize CSV output file */

const output = fs.createWriteStream(path.resolve(argv.f));

output.on('error', handleStreamError);

/* Initialize CSV stringifier */
const csvStringifier = stringify();

csvStringifier.on('readable', () => {
  let row;
  // eslint-disable-next-line no-cond-assign
  while ((row = csvStringifier.read())) {
    output.write(row);
  }
});

csvStringifier.on('error', handleStreamError);

/* Generate Sample Data */

csvStringifier.write(['name', 'phone', 'city', 'postalCode', 'countryCode']);

for (let step = 0; step < argv.n; step += 1) {
  const countryCode = Math.random() < 0.1 ? faker.address.countryCode() : 'FR';
  const postalCode =
    countryCode === 'FR'
      ? Math.ceil(99999 * Math.random())
          .toString()
          .padStart(5, 0)
      : '';

  csvStringifier.write([
    faker.commerce.productName(),
    faker.phone.phoneNumber(),
    faker.address.city(),
    postalCode,
    countryCode,
  ]);
}
csvStringifier.end();
