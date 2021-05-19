"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _lodashEs = require("lodash-es");

var _store = require("./store");

function _default() {
  const resolvers = {};

  _store.allResolvers.forEach(resolversGroup => {
    (0, _lodashEs.keys)(resolversGroup).forEach(type => {
      resolvers[type] = { ...resolvers[type],
        ...resolversGroup[type]
      };
    });
  });

  return resolvers;
}