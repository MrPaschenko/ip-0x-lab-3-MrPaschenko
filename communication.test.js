'use strict';

const {
  execute
} = require('./communication');
const fs = require('fs');

let messages = [];
const outputMock = {
  showResult(msg) {
    messages.push(msg);
  }
};

const fileSystemDefaultMock = {
  checkFile(filePath) {
    throw new Error('checkFile() has been called unexpectedly');
  },
  readFile(filePath) {
    throw new Error('readFile() has been called unexpectedly');
  }
};

test('No arguments', () => {
  //When
  execute(null, fileSystemDefaultMock, outputMock);

  //Then
  expect(messages).toEqual(['Run communication.js together with .txt file name']);
});

test('File does not exist', () => {
  messages = [];

  //Mock
  const fileSystemMock = {
    checkFile(filePath) {
      return false;
    },
    readFile(filePath) {
      throw new Error('readFile() has been called unexpectedly');
    }
  };

  //When
  execute(['', '', '123.txt'], fileSystemMock, outputMock);

  //Then
  expect(messages).toEqual(['File does not exist']);
});
