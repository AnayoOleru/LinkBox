'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

require('sequelize');

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserContr = {
  /**
   * 
   */
  createUser: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _req$body, username, profession, password, confirmPassword, isUsername;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, username = _req$body.username, profession = _req$body.profession, password = _req$body.password, confirmPassword = _req$body.confirmPassword;
              _context.prev = 1;
              _context.next = 4;
              return _user2.default.findOne({
                where: {
                  username: username
                }
              });

            case 4:
              isUsername = _context.sent;

              if (!isUsername) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return', res.status(404).send({ sucsess: false, message: 'Username already in use' }));

            case 7:
              _context.next = 9;
              return _user2.default.create({
                username: username,
                profession: profession,
                password: password,
                confirmPassword: confirmPassword
              });

            case 9:
              return _context.abrupt('return', res.status(201).send({
                success: true, message: 'User succesfully created'
              }));

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](1);

              console.log(_context.t0);
              res.status(400).send(_context.t0);

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 12]]);
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
              return _user2.default.findOne({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9jb250cm9sbGVycy91c2VyQ3RyLmpzIl0sIm5hbWVzIjpbIlVzZXJDb250ciIsImNyZWF0ZVVzZXIiLCJyZXEiLCJyZXMiLCJib2R5IiwidXNlcm5hbWUiLCJwcm9mZXNzaW9uIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJVc2VyIiwiZmluZE9uZSIsIndoZXJlIiwiaXNVc2VybmFtZSIsInN0YXR1cyIsInNlbmQiLCJzdWNzZXNzIiwibWVzc2FnZSIsImNyZWF0ZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwibG9naW5Vc2VyIiwibG9nb3V0VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNsQjs7O0FBR01DLFlBSlk7QUFBQSx5R0FJREMsR0FKQyxFQUlJQyxHQUpKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFLOENELElBQUlFLElBTGxELEVBS05DLFFBTE0sYUFLTkEsUUFMTSxFQUtJQyxVQUxKLGFBS0lBLFVBTEosRUFLZ0JDLFFBTGhCLGFBS2dCQSxRQUxoQixFQUswQkMsZUFMMUIsYUFLMEJBLGVBTDFCO0FBQUE7QUFBQTtBQUFBLHFCQU9hQyxlQUFLQyxPQUFMLENBQWE7QUFDcENDLHVCQUFPO0FBQ0xOLDRCQUFVQTtBQURMO0FBRDZCLGVBQWIsQ0FQYjs7QUFBQTtBQU9OTyx3QkFQTTs7QUFBQSxtQkFZUkEsVUFaUTtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FhSFQsSUFBSVUsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLEVBQUVDLFNBQVMsS0FBWCxFQUFrQkMsU0FBUyx5QkFBM0IsRUFBckIsQ0FiRzs7QUFBQTtBQUFBO0FBQUEscUJBZ0JOUCxlQUFLUSxNQUFMLENBQVk7QUFDaEJaLDBCQUFVQSxRQURNO0FBRWhCQyw0QkFBWUEsVUFGSTtBQUdoQkMsMEJBQVVBLFFBSE07QUFJaEJDLGlDQUFpQkE7QUFKRCxlQUFaLENBaEJNOztBQUFBO0FBQUEsK0NBc0JMTCxJQUFJVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJJLHlCQUFTLElBRGlCLEVBQ1hGLFNBQVM7QUFERSxlQUFyQixDQXRCSzs7QUFBQTtBQUFBO0FBQUE7O0FBMEJWRyxzQkFBUUMsR0FBUjtBQUNGakIsa0JBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQjs7QUEzQlk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBOEJsQjs7O0FBR01PLFdBakNZO0FBQUEsMkdBaUNGbkIsR0FqQ0UsRUFpQ0dDLEdBakNIO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFrQ2lCRCxJQUFJRSxJQWxDckIsRUFrQ05DLFFBbENNLGNBa0NOQSxRQWxDTSxFQWtDSUUsUUFsQ0osY0FrQ0lBLFFBbENKO0FBQUE7QUFBQTtBQUFBLHFCQW9DSkUsZUFDTEMsT0FESyxDQUNHO0FBQ1BDLHVCQUNGLEVBQUVKLFVBQVVBLFFBQVo7QUFGUyxlQURILENBcENJOztBQUFBO0FBQUEsZ0RBeUNISixJQUFJVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEI7QUFDQUUsMkNBQXlCWDtBQUZELGVBQXJCLENBekNHOztBQUFBO0FBQUE7QUFBQTs7QUE4Q05GLGtCQUFJVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEI7O0FBOUNNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQWlEbEI7OztBQUdNUSxZQXBEWTtBQUFBLDJHQW9ERHBCLEdBcERDLEVBb0RJQyxHQXBESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQ0FBbEI7a0JBdURlSCxTIiwiZmlsZSI6InVzZXJDdHIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5cbmNvbnN0IFVzZXJDb250ciA9IHtcbi8qKlxuICogXG4gKi9cbmFzeW5jIGNyZWF0ZVVzZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwcm9mZXNzaW9uLCBwYXNzd29yZCwgY29uZmlybVBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaXNVc2VybmFtZSA9IGF3YWl0IFVzZXIuZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGlzVXNlcm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHsgc3Vjc2VzczogZmFsc2UsIG1lc3NhZ2U6ICdVc2VybmFtZSBhbHJlYWR5IGluIHVzZScgfSk7XG4gICAgICB9XG4gICAgLy8gICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHBhcnNlSW50KHNhbHRSb3VuZHMsIDEwKSk7XG4gICAgICBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgcHJvZmVzc2lvbjogcHJvZmVzc2lvbixcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6IGNvbmZpcm1QYXNzd29yZFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoe1xuICAgICAgICBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnVXNlciBzdWNjZXNmdWxseSBjcmVhdGVkJ1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgIH1cbn0sXG4vKipcbiAqIFxuICovXG5hc3luYyBsb2dpblVzZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgVXNlclxuICAgICAgICAuZmluZE9uZSh7XG4gICAgICAgICAgd2hlcmU6XG4gICAgICAgIHsgcGFzc3dvcmQ6IHBhc3N3b3JkIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMikuc2VuZCh7XG4gICAgICAgICAgICAvLyB0b2tlbjogY3JlYXRlVG9rZW4odXNlci5pZCwgdXNlci51c2VybmFtZSksXG4gICAgICAgICAgICBtZXNzYWdlOiBgV2VsY29tZSBiYWNrICR7dXNlcm5hbWV9YFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICAgIH1cbiAgICB9LFxuLyoqXG4gKiBcbiAqL1xuYXN5bmMgbG9nb3V0VXNlcihyZXEsIHJlcykge1xufVxufTtcbmV4cG9ydCBkZWZhdWx0IFVzZXJDb250cjtcbiJdfQ==