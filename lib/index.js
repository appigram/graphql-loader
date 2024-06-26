"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSchema = exports.getSchema = void 0;
var _resolveTypeDefs = _interopRequireDefault(require("./resolveTypeDefs"));
var _resolveResolvers = _interopRequireDefault(require("./resolveResolvers"));
var _store = require("./store");
if (!global.gqlLoader) {
  const loadSchema = function ({
    typeDefs,
    resolvers
  }, origin) {
    _store.allTypeDefs.push(typeDefs);
    _store.allResolvers.push(resolvers);
  };
  const getSchema = function () {
    return {
      typeDefs: (0, _resolveTypeDefs.default)(_store.allTypeDefs),
      resolvers: (0, _resolveResolvers.default)(_store.allResolvers)
    };
  };
  global.gqlLoader = {
    loadSchema,
    getSchema
  };
}
const loadSchema = exports.loadSchema = global.gqlLoader.loadSchema;
const getSchema = exports.getSchema = global.gqlLoader.getSchema;