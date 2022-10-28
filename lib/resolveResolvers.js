"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _lodash = require("lodash");
function _default(allResolvers = []) {
  const resolvers = {};
  allResolvers.forEach(resolversGroup => {
    (0, _lodash.keys)(resolversGroup).forEach(type => {
      resolvers[type] = {
        ...resolvers[type],
        ...resolversGroup[type]
      };
    });
  });
  return resolvers;
}