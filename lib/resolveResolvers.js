"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _lodash = _interopRequireDefault(require("lodash.keys"));
function _default(allResolvers = []) {
  const resolvers = {};
  allResolvers.forEach(resolversGroup => {
    (0, _lodash.default)(resolversGroup).forEach(type => {
      resolvers[type] = {
        ...resolvers[type],
        ...resolversGroup[type]
      };
    });
  });
  return resolvers;
}