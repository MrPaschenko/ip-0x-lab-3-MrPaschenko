'use strict';

const {
  execute
} = require('./communication');
const fs = require('fs');

test('No arguments', () => {
  const messages = [];

  //Mock
  const output = {
    showResult(msg) {
      messages.push(msg);
    }
  };

  //When
  const fileSystem = {
    checkFile(file) {
      return fs.existsSync(file);
    },
    readFile(fileName) {
      const fileContent = fs.readFileSync((fileName), 'utf-8');
      return fileContent;
    }
  };
  execute(null, fileSystem, output);

  //Then
  expect(messages).toEqual(['Run communication.js together with .txt file name']);
});
