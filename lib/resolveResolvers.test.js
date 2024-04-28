"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _resolveResolvers = _interopRequireDefault(require("./resolveResolvers"));
var _lodash = _interopRequireDefault(require("lodash.keys"));
/* global describe */
/* global it */
/* global expect */

describe('Resolve resolvers function', () => {
  it('should return one object with types', () => {
    const allResolvers = [{
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
    const result = (0, _resolveResolvers.default)(allResolvers);
    expect((0, _lodash.default)(result)).toEqual(['Query', 'Mutation', 'Type']);
  });
  it('should join same type fields', () => {
    const allResolvers = [{
      Query: {
        hello: () => 'world',
        hola: () => 'mundo'
      }
    }, {
      Query: {
        world: () => 'hello'
      }
    }];
    const result = (0, _resolveResolvers.default)(allResolvers);
    expect((0, _lodash.default)(result.Query)).toEqual(['hello', 'hola', 'world']);
  });
});