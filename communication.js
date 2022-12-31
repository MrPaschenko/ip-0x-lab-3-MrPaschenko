'use strict';

const {
  Field,
  getOutput,
  getFigure,
  getLandscape,
} = require('./logic');

const {
  input,
  output,
} = require('./inputOutput');

const rawField = input('./input.txt');
const field = new Field(
  rawField.width,
  rawField.height,
  getFigure(rawField.array),
  getLandscape(rawField.array)
);

output(getOutput(field));
