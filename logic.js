'use strict';

class Dot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Field {
  constructor(width, height, figures, landscape) {
    this.width = width;
    this.height = height;
    this.figures = figures;
    this.landscape = landscape;
  }
}

function getFigure(array) {
  const figure = [];

  for (let line = 0; line < array.length; line++) {
    for (let column = 0; column < array[line].length; column++) {
      if (array[line][column] === 'p') {
        figure.push(new Dot(column, line));
      }
    }
  }

  return figure;
}

function getLandscape(array) {
  const landscape = [];

  for (let line = 0; line < array.length; line++) {
    for (let column = 0; column < array[line].length; column++) {
      if (array[line][column] === '#') {
        landscape.push(new Dot(column, line));
      }
    }
  }

  return landscape;
}
