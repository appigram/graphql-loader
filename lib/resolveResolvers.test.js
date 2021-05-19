"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _resolveResolvers = _interopRequireDefault(require("./resolveResolvers"));

var _lodashEs = require("lodash-es");

/* global describe */

/* global it */

/* global expect */
describe('Resolve resolvers function', () => {
  it('should return one object with types', () => {
    global.allResolvers = [{
      Query: {
        hello: () => 'world'
      }
    }, {
      Query: {
        world: () => 'hello'
      }
    }, {
      Mutation: {
        save: () => 'ad'
      }
    }, {
      Type: {
        field: () => 'afdfdfd'
      }
    }, {
      Type: {
        field2: () => 'afdfdffd'
      }
    }];
    const result = (0, _resolveResolvers.default)();
    expect((0, _lodashEs.keys)(result)).toEqual(['Query', 'Mutation', 'Type']);
  });
  it('should join same type fields', () => {
    global.allResolvers = [{
      Query: {
        hello: () => 'world',
        hola: () => 'mundo'
      }
    }, {
      Query: {
        world: () => 'hello'
      }
    }];
    const result = (0, _resolveResolvers.default)();
    expect((0, _lodashEs.keys)(result.Query)).toEqual(['hello', 'hola', 'world']);
  });
});