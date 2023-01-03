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

test('Test getLandscape', () => {
  expect(getLandscape([
    '..p.....',
    '.ppp....',
    '..p.....',
    '........',
    '...#....',
    '...#...#',
    '#..#####'
  ])).toEqual([
    new Dot(3, 4),
    new Dot(3, 5),
    new Dot(7, 5),
    new Dot(0, 6),
    new Dot(3, 6),
    new Dot(4, 6),
    new Dot(5, 6),
    new Dot(6, 6),
    new Dot(7, 6),
  ]);
});
