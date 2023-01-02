'use strict';

const {
  execute
} = require('./communication');
const fs = require('fs');

test('No arguments', () => {
  const messages = [];

  //Given
  const fileSystem = {
    checkFile(file) {
      return fs.existsSync(file);
    },
    readFile(fileName) {
      const fileContent = fs.readFileSync((fileName), 'utf-8');
      return fileContent;
    }
  };

  //Mock
  const output = {
    showResult(msg) {
      messages.push(msg);
    }
  };

  //When
  execute(null, fileSystem, output);

  //Then
  expect(messages).toEqual(['Run communication.js together with .txt file name']);
});
