'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// specifying paths required for sequelize
exports.default = {
  // holds db config settings and authentication(i.e, to check if the db is connected)
  "config": _path2.default.resolve('./server/config', 'config.json'),
  //   holds application models 
  "models-path": _path2.default.resolve('./server/models'),
  //   will holds seed data(will not be used in this tutorial)
  "seeders-path": _path2.default.resolve('./server/seeders'),
  //   will hold our application migrations
  "migrations-path": _path2.default.resolve('./server/migrations')
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcXVlbGl6ZS5qcyJdLCJuYW1lcyI6WyJwYXRoIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUNBO2tCQUNlO0FBQ1g7QUFDRixZQUFVQSxlQUFLQyxPQUFMLENBQWEsaUJBQWIsRUFBZ0MsYUFBaEMsQ0FGRztBQUdmO0FBQ0UsaUJBQWVELGVBQUtDLE9BQUwsQ0FBYSxpQkFBYixDQUpGO0FBS2Y7QUFDRSxrQkFBZ0JELGVBQUtDLE9BQUwsQ0FBYSxrQkFBYixDQU5IO0FBT2Y7QUFDRSxxQkFBbUJELGVBQUtDLE9BQUwsQ0FBYSxxQkFBYjtBQVJOLEMiLCJmaWxlIjoic2VxdWVsaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG4vLyBzcGVjaWZ5aW5nIHBhdGhzIHJlcXVpcmVkIGZvciBzZXF1ZWxpemVcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvLyBob2xkcyBkYiBjb25maWcgc2V0dGluZ3MgYW5kIGF1dGhlbnRpY2F0aW9uKGkuZSwgdG8gY2hlY2sgaWYgdGhlIGRiIGlzIGNvbm5lY3RlZClcbiAgXCJjb25maWdcIjogcGF0aC5yZXNvbHZlKCcuL3NlcnZlci9jb25maWcnLCAnY29uZmlnLmpzb24nKSxcbi8vICAgaG9sZHMgYXBwbGljYXRpb24gbW9kZWxzIFxuICBcIm1vZGVscy1wYXRoXCI6IHBhdGgucmVzb2x2ZSgnLi9zZXJ2ZXIvbW9kZWxzJyksXG4vLyAgIHdpbGwgaG9sZHMgc2VlZCBkYXRhKHdpbGwgbm90IGJlIHVzZWQgaW4gdGhpcyB0dXRvcmlhbClcbiAgXCJzZWVkZXJzLXBhdGhcIjogcGF0aC5yZXNvbHZlKCcuL3NlcnZlci9zZWVkZXJzJyksXG4vLyAgIHdpbGwgaG9sZCBvdXIgYXBwbGljYXRpb24gbWlncmF0aW9uc1xuICBcIm1pZ3JhdGlvbnMtcGF0aFwiOiBwYXRoLnJlc29sdmUoJy4vc2VydmVyL21pZ3JhdGlvbnMnKVxufTtcbiJdfQ==