const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const recursiveEqArrays = require('./recursiveEqArrays');
const recursiveEqObject = require('./recursiveEqObject');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  recursiveEqArrays,
  recursiveEqObject,
  takeUntil,
  without,
};