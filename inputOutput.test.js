'use strict';

const { parseInput, writeOutput } = require('./inputOutput');

test('Parse input (1)', () => {
  const fileContent = '7 8\n' +
    '..p.....\n' +
    '.ppp....\n' +
    '..p.....\n' +
    '........\n' +
    '...#....\n' +
    '...#...#\n' +
    '#..#####';

  const expectedOutput = {
    width: 8,
    height: 7,
    array: [
      '..p.....',
      '.ppp....',
      '..p.....',
      '........',
      '...#....',
      '...#...#',
      '#..#####'
    ]
  };

  expect(parseInput(fileContent)).toEqual(expectedOutput);
});

test('Parse input (2)', () => {
  const fileContent = '6 8\n' +
    '..p.....\n' +
    '.ppp....\n' +
    '..pp....\n' +
    '...p..#.\n' +
    '......#.\n' +
    '...#..##';

  const expectedOutput = {
    width: 8,
    height: 6,
    array: [
      '..p.....',
      '.ppp....',
      '..pp....',
      '...p..#.',
      '......#.',
      '...#..##'
    ]
  };

  expect(parseInput(fileContent)).toEqual(expectedOutput);
});

