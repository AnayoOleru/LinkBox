'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _jwt = require('../helpers/jwt');

var _jwt2 = _interopRequireDefault(_jwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User;


var UserContr = {
  /**
   * 
   */
  createUser: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _req$body, username, profession, password, confirmPassword, isUsername, userToken, token;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, username = _req$body.username, profession = _req$body.profession, password = _req$body.password, confirmPassword = _req$body.confirmPassword;
              _context.prev = 1;
              _context.next = 4;
              return User.findOne({
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

              return _context.abrupt('return', res.status(404).send({ sucsess: false, message: username + ' already in use' }));

            case 7:

              //   const hash = await bcrypt.hash(password, parseInt(saltRounds, 10));
              console.log('*****', User);
              _context.next = 10;
              return User.create({
                username: username,
                profession: profession,
                password: password,
                confirmPassword: confirmPassword
              });

            case 10:
              userToken = { username: username };
              token = _jwt2.default.generateToken(userToken);

              console.log('*****');
              return _context.abrupt('return', res.status(201).header('x-auth-token', token).json({
                success: true,
                message: 'User succesfully created',
                token: token,
                username: username,
                profession: profession
              }));

            case 16:
              _context.prev = 16;
              _context.t0 = _context['catch'](1);

              console.log(_context.t0);
              res.status(400).send(_context.t0);

            case 20:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 16]]);
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
              return User.findOne({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9jb250cm9sbGVycy91c2VyQ3RyLmpzIl0sIm5hbWVzIjpbIlVzZXIiLCJtb2RlbHMiLCJVc2VyQ29udHIiLCJjcmVhdGVVc2VyIiwicmVxIiwicmVzIiwiYm9keSIsInVzZXJuYW1lIiwicHJvZmVzc2lvbiIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiZmluZE9uZSIsIndoZXJlIiwiaXNVc2VybmFtZSIsInN0YXR1cyIsInNlbmQiLCJzdWNzZXNzIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGUiLCJ1c2VyVG9rZW4iLCJ0b2tlbiIsIlRva2VuIiwiZ2VuZXJhdGVUb2tlbiIsImhlYWRlciIsImpzb24iLCJzdWNjZXNzIiwibG9naW5Vc2VyIiwibG9nb3V0VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFUUEsSSxHQUFTQyxnQixDQUFURCxJOzs7QUFFUixJQUFNRSxZQUFZO0FBQ2xCOzs7QUFHTUMsWUFKWTtBQUFBLHlHQUlEQyxHQUpDLEVBSUlDLEdBSko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUs4Q0QsSUFBSUUsSUFMbEQsRUFLTkMsUUFMTSxhQUtOQSxRQUxNLEVBS0lDLFVBTEosYUFLSUEsVUFMSixFQUtnQkMsUUFMaEIsYUFLZ0JBLFFBTGhCLEVBSzBCQyxlQUwxQixhQUswQkEsZUFMMUI7QUFBQTtBQUFBO0FBQUEscUJBT2FWLEtBQUtXLE9BQUwsQ0FBYTtBQUNwQ0MsdUJBQU87QUFDTEwsNEJBQVVBO0FBREw7QUFENkIsZUFBYixDQVBiOztBQUFBO0FBT05NLHdCQVBNOztBQUFBLG1CQVlSQSxVQVpRO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQWFIUixJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBRUMsU0FBUyxLQUFYLEVBQWtCQyxTQUFZVixRQUFaLG9CQUFsQixFQUFyQixDQWJHOztBQUFBOztBQWdCZDtBQUNBVyxzQkFBUUMsR0FBUixDQUFZLE9BQVosRUFBcUJuQixJQUFyQjtBQWpCYztBQUFBLHFCQWtCTkEsS0FBS29CLE1BQUwsQ0FBWTtBQUNoQmIsMEJBQVVBLFFBRE07QUFFaEJDLDRCQUFZQSxVQUZJO0FBR2hCQywwQkFBVUEsUUFITTtBQUloQkMsaUNBQWlCQTtBQUpELGVBQVosQ0FsQk07O0FBQUE7QUF5Qk5XLHVCQXpCTSxHQXlCTSxFQUFFZCxVQUFVQSxRQUFaLEVBekJOO0FBMkJOZSxtQkEzQk0sR0EyQkVDLGNBQU1DLGFBQU4sQ0FBb0JILFNBQXBCLENBM0JGOztBQTRCZEgsc0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBNUJjLCtDQTZCTGQsSUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JXLE1BQWhCLENBQXVCLGNBQXZCLEVBQXVDSCxLQUF2QyxFQUE4Q0ksSUFBOUMsQ0FBbUQ7QUFDeERDLHlCQUFTLElBRCtDO0FBRXhEVix5QkFBUywwQkFGK0M7QUFHeERLLHVCQUFPQSxLQUhpRDtBQUl4RGYsMEJBQVVBLFFBSjhDO0FBS3hEQyw0QkFBWUE7QUFMNEMsZUFBbkQsQ0E3Qks7O0FBQUE7QUFBQTtBQUFBOztBQXFDVlUsc0JBQVFDLEdBQVI7QUFDRmQsa0JBQUlTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQjs7QUF0Q1k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBeUNsQjs7O0FBR01hLFdBNUNZO0FBQUEsMkdBNENGeEIsR0E1Q0UsRUE0Q0dDLEdBNUNIO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkE2Q2lCRCxJQUFJRSxJQTdDckIsRUE2Q05DLFFBN0NNLGNBNkNOQSxRQTdDTSxFQTZDSUUsUUE3Q0osY0E2Q0lBLFFBN0NKO0FBQUE7QUFBQTtBQUFBLHFCQStDSlQsS0FDTFcsT0FESyxDQUNHO0FBQ1BDLHVCQUNGLEVBQUVILFVBQVVBLFFBQVo7QUFGUyxlQURILENBL0NJOztBQUFBO0FBQUEsZ0RBb0RISixJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEI7QUFDQUUsMkNBQXlCVjtBQUZELGVBQXJCLENBcERHOztBQUFBO0FBQUE7QUFBQTs7QUF5RE5GLGtCQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEI7O0FBekRNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQTREbEI7OztBQUdNYyxZQS9EWTtBQUFBLDJHQStERHpCLEdBL0RDLEVBK0RJQyxHQS9ESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQ0FBbEI7a0JBa0VlSCxTIiwiZmlsZSI6InVzZXJDdHIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kZWxzIGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgVG9rZW4gZnJvbSAnLi4vaGVscGVycy9qd3QnO1xuXG5jb25zdCB7IFVzZXIgfSA9IG1vZGVscztcblxuY29uc3QgVXNlckNvbnRyID0ge1xuLyoqXG4gKiBcbiAqL1xuYXN5bmMgY3JlYXRlVXNlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHByb2Zlc3Npb24sIHBhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpc1VzZXJuYW1lID0gYXdhaXQgVXNlci5maW5kT25lKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoaXNVc2VybmFtZSkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoeyBzdWNzZXNzOiBmYWxzZSwgbWVzc2FnZTogYCR7dXNlcm5hbWV9IGFscmVhZHkgaW4gdXNlYCB9KTtcbiAgICAgIH1cblxuICAgIC8vICAgY29uc3QgaGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBwYXJzZUludChzYWx0Um91bmRzLCAxMCkpO1xuICAgIGNvbnNvbGUubG9nKCcqKioqKicsIFVzZXIpO1xuICAgICAgYXdhaXQgVXNlci5jcmVhdGUoe1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHByb2Zlc3Npb246IHByb2Zlc3Npb24sXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiBjb25maXJtUGFzc3dvcmRcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1c2VyVG9rZW4gPSB7IHVzZXJuYW1lOiB1c2VybmFtZSB9XG5cbiAgICAgIGNvbnN0IHRva2VuID0gVG9rZW4uZ2VuZXJhdGVUb2tlbih1c2VyVG9rZW4pO1xuICAgIGNvbnNvbGUubG9nKCcqKioqKicpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5oZWFkZXIoJ3gtYXV0aC10b2tlbicsIHRva2VuKS5qc29uKHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSwgXG4gICAgICAgIG1lc3NhZ2U6ICdVc2VyIHN1Y2Nlc2Z1bGx5IGNyZWF0ZWQnLFxuICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgcHJvZmVzc2lvbjogcHJvZmVzc2lvblxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgIH1cbn0sXG4vKipcbiAqIFxuICovXG5hc3luYyBsb2dpblVzZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgVXNlclxuICAgICAgICAuZmluZE9uZSh7XG4gICAgICAgICAgd2hlcmU6XG4gICAgICAgIHsgcGFzc3dvcmQ6IHBhc3N3b3JkIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMikuc2VuZCh7XG4gICAgICAgICAgICAvLyB0b2tlbjogY3JlYXRlVG9rZW4odXNlci5pZCwgdXNlci51c2VybmFtZSksXG4gICAgICAgICAgICBtZXNzYWdlOiBgV2VsY29tZSBiYWNrICR7dXNlcm5hbWV9YFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICAgIH1cbiAgICB9LFxuLyoqXG4gKiBcbiAqL1xuYXN5bmMgbG9nb3V0VXNlcihyZXEsIHJlcykge1xufVxufTtcbmV4cG9ydCBkZWZhdWx0IFVzZXJDb250cjtcbiJdfQ==