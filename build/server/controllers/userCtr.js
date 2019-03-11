'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

require('sequelize');

var _models = require('../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import sequelize from '../../sequelize';

var UserContr = {
  /**
   * 
   */
  createUser: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _req$body, username, profession, password, confirmPassword;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, username = _req$body.username, profession = _req$body.profession, password = _req$body.password, confirmPassword = _req$body.confirmPassword;
              _context.prev = 1;

              //   const isUsername = await User.findone({
              //     where: {
              //       username: username
              //     }
              //   });
              //   if (isUsername) {
              //     return res.status(404).send({ sucsess: false, message: 'Username already in use' });
              //   }
              //   const hash = await bcrypt.hash(password, parseInt(saltRounds, 10));
              console.log(req.body.username);
              _context.next = 5;
              return _models.User.create({
                username: username,
                profession: profession,
                password: password,
                confirmPassword: confirmPassword
              });

            case 5:
              return _context.abrupt('return', res.status(201).send({
                success: true, message: 'User succesfully created'
              }));

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](1);

              console.log(_context.t0);
              res.status(400).send(_context.t0);

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 8]]);
    }));

    function createUser(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return createUser;
  }(),

  /**
   * 
   */
  loginUser: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var _req$body2, username, password;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
              _context2.prev = 1;
              _context2.next = 4;
              return _models.User.findOne({
                where: { password: password }
              });

            case 4:
              return _context2.abrupt('return', res.status(202).send({
                // token: createToken(user.id, user.username),
                message: 'Welcome back ' + username
              }));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](1);

              res.status(400).send(_context2.t0);

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 7]]);
    }));

    function loginUser(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return loginUser;
  }(),

  /**
   * 
   */
  logoutUser: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function logoutUser(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return logoutUser;
  }()
};
exports.default = UserContr;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9jb250cm9sbGVycy91c2VyQ3RyLmpzIl0sIm5hbWVzIjpbIlVzZXJDb250ciIsImNyZWF0ZVVzZXIiLCJyZXEiLCJyZXMiLCJib2R5IiwidXNlcm5hbWUiLCJwcm9mZXNzaW9uIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiVXNlciIsImNyZWF0ZSIsInN0YXR1cyIsInNlbmQiLCJzdWNjZXNzIiwibWVzc2FnZSIsImxvZ2luVXNlciIsImZpbmRPbmUiLCJ3aGVyZSIsImxvZ291dFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7QUFFQSxJQUFNQSxZQUFZO0FBQ2xCOzs7QUFHTUMsWUFKWTtBQUFBLHlHQUlEQyxHQUpDLEVBSUlDLEdBSko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUs4Q0QsSUFBSUUsSUFMbEQsRUFLTkMsUUFMTSxhQUtOQSxRQUxNLEVBS0lDLFVBTEosYUFLSUEsVUFMSixFQUtnQkMsUUFMaEIsYUFLZ0JBLFFBTGhCLEVBSzBCQyxlQUwxQixhQUswQkEsZUFMMUI7QUFBQTs7QUFPZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsc0JBQVFDLEdBQVIsQ0FBWVIsSUFBSUUsSUFBSixDQUFTQyxRQUFyQjtBQWhCYztBQUFBLHFCQWlCTk0sYUFBS0MsTUFBTCxDQUFZO0FBQ2hCUCwwQkFBVUEsUUFETTtBQUVoQkMsNEJBQVlBLFVBRkk7QUFHaEJDLDBCQUFVQSxRQUhNO0FBSWhCQyxpQ0FBaUJBO0FBSkQsZUFBWixDQWpCTTs7QUFBQTtBQUFBLCtDQXVCTEwsSUFBSVUsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCQyx5QkFBUyxJQURpQixFQUNYQyxTQUFTO0FBREUsZUFBckIsQ0F2Qks7O0FBQUE7QUFBQTtBQUFBOztBQTJCVlAsc0JBQVFDLEdBQVI7QUFDRlAsa0JBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQjs7QUE1Qlk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBK0JsQjs7O0FBR01HLFdBbENZO0FBQUEsMkdBa0NGZixHQWxDRSxFQWtDR0MsR0FsQ0g7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQW1DaUJELElBQUlFLElBbkNyQixFQW1DTkMsUUFuQ00sY0FtQ05BLFFBbkNNLEVBbUNJRSxRQW5DSixjQW1DSUEsUUFuQ0o7QUFBQTtBQUFBO0FBQUEscUJBcUNKSSxhQUNMTyxPQURLLENBQ0c7QUFDUEMsdUJBQ0YsRUFBRVosVUFBVUEsUUFBWjtBQUZTLGVBREgsQ0FyQ0k7O0FBQUE7QUFBQSxnREEwQ0hKLElBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUN4QjtBQUNBRSwyQ0FBeUJYO0FBRkQsZUFBckIsQ0ExQ0c7O0FBQUE7QUFBQTtBQUFBOztBQStDTkYsa0JBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQjs7QUEvQ007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBa0RsQjs7O0FBR01NLFlBckRZO0FBQUEsMkdBcUREbEIsR0FyREMsRUFxRElDLEdBckRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDQUFsQjtrQkF3RGVILFMiLCJmaWxlIjoidXNlckN0ci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc2VxdWVsaXplJztcbmltcG9ydCB7IFVzZXIgfWZyb20gJy4uL21vZGVscyc7XG4vLyBpbXBvcnQgc2VxdWVsaXplIGZyb20gJy4uLy4uL3NlcXVlbGl6ZSc7XG5cbmNvbnN0IFVzZXJDb250ciA9IHtcbi8qKlxuICogXG4gKi9cbmFzeW5jIGNyZWF0ZVVzZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwcm9mZXNzaW9uLCBwYXNzd29yZCwgY29uZmlybVBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgIC8vICAgY29uc3QgaXNVc2VybmFtZSA9IGF3YWl0IFVzZXIuZmluZG9uZSh7XG4gICAgLy8gICAgIHdoZXJlOiB7XG4gICAgLy8gICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pO1xuICAgIC8vICAgaWYgKGlzVXNlcm5hbWUpIHtcbiAgICAvLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgc3Vjc2VzczogZmFsc2UsIG1lc3NhZ2U6ICdVc2VybmFtZSBhbHJlYWR5IGluIHVzZScgfSk7XG4gICAgLy8gICB9XG4gICAgLy8gICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHBhcnNlSW50KHNhbHRSb3VuZHMsIDEwKSk7XG4gICAgY29uc29sZS5sb2cocmVxLmJvZHkudXNlcm5hbWUpO1xuICAgICAgYXdhaXQgVXNlci5jcmVhdGUoe1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHByb2Zlc3Npb246IHByb2Zlc3Npb24sXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiBjb25maXJtUGFzc3dvcmRcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ1VzZXIgc3VjY2VzZnVsbHkgY3JlYXRlZCdcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKTtcbiAgICB9XG59LFxuLyoqXG4gKiBcbiAqL1xuYXN5bmMgbG9naW5Vc2VyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IFVzZXJcbiAgICAgICAgLmZpbmRPbmUoe1xuICAgICAgICAgIHdoZXJlOlxuICAgICAgICB7IHBhc3N3b3JkOiBwYXNzd29yZCB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDIpLnNlbmQoe1xuICAgICAgICAgICAgLy8gdG9rZW46IGNyZWF0ZVRva2VuKHVzZXIuaWQsIHVzZXIudXNlcm5hbWUpLFxuICAgICAgICAgICAgbWVzc2FnZTogYFdlbGNvbWUgYmFjayAke3VzZXJuYW1lfWBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSxcbi8qKlxuICogXG4gKi9cbmFzeW5jIGxvZ291dFVzZXIocmVxLCByZXMpIHtcbn1cbn07XG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udHI7XG4iXX0=