'use strict';

const { Dot, Field, getOutput, getFigure, getLandscape } = require('./logic');

test('Test getFigure', () => {
  expect(getFigure([
    '..p.....',
    '.ppp....',
    '..p.....',
    '........',
    '...#....',
    '...#...#',
    '#..#####'
  ])).toEqual([
    new Dot(2, 0),
    new Dot(1, 1),
    new Dot(2, 1),
    new Dot(3, 1),
    new Dot(2, 2)
  ]);
});
