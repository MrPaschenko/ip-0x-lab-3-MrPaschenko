'use strict';

const fs = require('fs');
module.exports = {
  input,
  output,
};

function input(filePath) {
  const string = fs.readFileSync(filePath, 'utf8');
  const generalArray = string.split('\n');

  const width = parseInt(generalArray[0].split(' ')[1]);
  const height = parseInt(generalArray[0].split(' ')[0]);
  const array = generalArray.slice(1, 1 + height);

  return {
    width,
    height,
    array,
  };
}

function output(string) {
  fs.writeFileSync('output.txt', string);
}
