'use strict';

const fs = require('fs');
module.exports = {
  input,
  output,
};

function input(filePath) {
  const string = fs.readFileSync(filePath, 'utf8');
  const generalArray = string.split('\n');

  if (/^\d+ \d+$/.test(generalArray[0]) === false) {
    throw new Error('Incorrect size');
  }

  const width = parseInt(generalArray[0].split(' ')[1]);
  if (width < 1) {
    throw new Error('Incorrect width');
  }

  const height = parseInt(generalArray[0].split(' ')[0]);
  if (height < 1) {
    throw new Error('Incorrect height');
  }

  const array = generalArray.slice(1, 1 + height);
  if (array.length !== height) {
    throw new Error('Incorrect height');
  }
  for (const element of array) {
    if (element.length !== width) {
      throw new Error('Incorrect width');
    }
  }

  return {
    width,
    height,
    array,
  };
}

function output(string) {
  fs.writeFileSync('output.txt', string);
}
