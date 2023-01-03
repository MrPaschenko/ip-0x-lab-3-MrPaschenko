'use strict';

const fs = require('fs');

const { getOutput, Field, getFigure, getLandscape } = require('./logic');
const { writeOutput, parseInput } = require('./inputOutput');
const args = process.argv;

function execute(args, fileSystem, output) {
  const regEx = /^.+\.txt$/;
  if (!args) {
    output.showResult('Run communication.js together with .txt file name');
    return;
  }

  if (!regEx.test(args)) {
    output.showResult('Enter only .txt file name');
    return;
  }

  if (!fileSystem.checkFile(args)) {
    output.showResult('File does not exist');
    return;
  }

  const fileContent = fileSystem.readFile(args);
  let isError = false;
  let parsedContent;
  try {
    parsedContent = parseInput(fileContent);
  } catch (e) {
    isError = e.description;
  }

  if (isError) {
    output.showResult(isError);
  } else {
    const field = new Field(
      parsedContent.width,
      parsedContent.height,
      getFigure(parsedContent.array),
      getLandscape(parsedContent.array)
    );

    const finalFieldString = getOutput(field);

    output.showResult(finalFieldString);
    writeOutput(finalFieldString);
  }
}

function main(args) {
  const fileSystem = {
    checkFile(filePath) {
      return fs.existsSync(filePath);
    },
    readFile(filePath) {
      const fileContent = fs.readFileSync((filePath), 'utf-8');
      return fileContent;
    }
  };

  const output = {
    showResult(msg) {
      console.log(msg);
    }
  };

  execute(args[2], fileSystem, output);
}

main(args);

module.exports = {
  execute
};
