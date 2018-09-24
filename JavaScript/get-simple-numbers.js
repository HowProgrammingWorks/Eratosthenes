'use strict';

const getArrayOfSimpleNumbers = range => {
  const array = [];
  for (let i = 2; i < range; i++) array.push(i);

  let erased;
  while (erased !== 0) {
    const divider = array[0];
    erased = 0;
    process.stdout.write('divider: ' + divider + ' ');
    for (const value of array) {
      if (value % divider === 0 && value !== divider) {
        array.splice(array.indexOf(value), 1);
        array.splice(array.indexOf(divider), 1);
        array.push(divider);
        erased++;
      }
    }

    console.log('array after erasing: ' + array);
  }
  return array;//.sort((a, b) => a - b)
};

if (process.argv.length > 2) {
  console.log('\nresult: ' + getArrayOfSimpleNumbers(process.argv[2]));
} else {
  console.log('Program allows getting simple number');
  console.log('Sieve of Eratosthenes is used.');
  console.log('usage:\n node ./get-simple-numbers.js [renge of numbers]\n');
  console.log('example:\n node ./get-simple-numbers.js 100\n');

}
