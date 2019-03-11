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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User;


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
              console.log('*****', 'Yolo');
              return _context.abrupt('return', res.status(201).send({
                success: true, message: 'User succesfully created'
              }));

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](1);

              console.log(_context.t0);
              res.status(400).send(_context.t0);

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 14]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9jb250cm9sbGVycy91c2VyQ3RyLmpzIl0sIm5hbWVzIjpbIlVzZXIiLCJtb2RlbHMiLCJVc2VyQ29udHIiLCJjcmVhdGVVc2VyIiwicmVxIiwicmVzIiwiYm9keSIsInVzZXJuYW1lIiwicHJvZmVzc2lvbiIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiZmluZE9uZSIsIndoZXJlIiwiaXNVc2VybmFtZSIsInN0YXR1cyIsInNlbmQiLCJzdWNzZXNzIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGUiLCJzdWNjZXNzIiwibG9naW5Vc2VyIiwibG9nb3V0VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRVFBLEksR0FBU0MsZ0IsQ0FBVEQsSTs7O0FBRVIsSUFBTUUsWUFBWTtBQUNsQjs7O0FBR01DLFlBSlk7QUFBQSx5R0FJREMsR0FKQyxFQUlJQyxHQUpKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFLOENELElBQUlFLElBTGxELEVBS05DLFFBTE0sYUFLTkEsUUFMTSxFQUtJQyxVQUxKLGFBS0lBLFVBTEosRUFLZ0JDLFFBTGhCLGFBS2dCQSxRQUxoQixFQUswQkMsZUFMMUIsYUFLMEJBLGVBTDFCO0FBQUE7QUFBQTtBQUFBLHFCQU9hVixLQUFLVyxPQUFMLENBQWE7QUFDcENDLHVCQUFPO0FBQ0xMLDRCQUFVQTtBQURMO0FBRDZCLGVBQWIsQ0FQYjs7QUFBQTtBQU9OTSx3QkFQTTs7QUFBQSxtQkFZUkEsVUFaUTtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FhSFIsSUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLEVBQUVDLFNBQVMsS0FBWCxFQUFrQkMsU0FBWVYsUUFBWixvQkFBbEIsRUFBckIsQ0FiRzs7QUFBQTtBQWVkO0FBQ0FXLHNCQUFRQyxHQUFSLENBQVksT0FBWixFQUFxQm5CLElBQXJCO0FBaEJjO0FBQUEscUJBaUJOQSxLQUFLb0IsTUFBTCxDQUFZO0FBQ2hCYiwwQkFBVUEsUUFETTtBQUVoQkMsNEJBQVlBLFVBRkk7QUFHaEJDLDBCQUFVQSxRQUhNO0FBSWhCQyxpQ0FBaUJBO0FBSkQsZUFBWixDQWpCTTs7QUFBQTtBQXVCZFEsc0JBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLE1BQXJCO0FBdkJjLCtDQXdCTGQsSUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCTSx5QkFBUyxJQURpQixFQUNYSixTQUFTO0FBREUsZUFBckIsQ0F4Qks7O0FBQUE7QUFBQTtBQUFBOztBQTRCVkMsc0JBQVFDLEdBQVI7QUFDRmQsa0JBQUlTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQjs7QUE3Qlk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBZ0NsQjs7O0FBR01PLFdBbkNZO0FBQUEsMkdBbUNGbEIsR0FuQ0UsRUFtQ0dDLEdBbkNIO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFvQ2lCRCxJQUFJRSxJQXBDckIsRUFvQ05DLFFBcENNLGNBb0NOQSxRQXBDTSxFQW9DSUUsUUFwQ0osY0FvQ0lBLFFBcENKO0FBQUE7QUFBQTtBQUFBLHFCQXNDSlQsS0FDTFcsT0FESyxDQUNHO0FBQ1BDLHVCQUNGLEVBQUVILFVBQVVBLFFBQVo7QUFGUyxlQURILENBdENJOztBQUFBO0FBQUEsZ0RBMkNISixJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEI7QUFDQUUsMkNBQXlCVjtBQUZELGVBQXJCLENBM0NHOztBQUFBO0FBQUE7QUFBQTs7QUFnRE5GLGtCQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEI7O0FBaERNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQW1EbEI7OztBQUdNUSxZQXREWTtBQUFBLDJHQXNERG5CLEdBdERDLEVBc0RJQyxHQXRESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQ0FBbEI7a0JBeURlSCxTIiwiZmlsZSI6InVzZXJDdHIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kZWxzIGZyb20gJy4uL21vZGVscyc7XG5cbmNvbnN0IHsgVXNlciB9ID0gbW9kZWxzO1xuXG5jb25zdCBVc2VyQ29udHIgPSB7XG4vKipcbiAqIFxuICovXG5hc3luYyBjcmVhdGVVc2VyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgcHJvZmVzc2lvbiwgcGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGlzVXNlcm5hbWUgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChpc1VzZXJuYW1lKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IHN1Y3Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBgJHt1c2VybmFtZX0gYWxyZWFkeSBpbiB1c2VgIH0pO1xuICAgICAgfVxuICAgIC8vICAgY29uc3QgaGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBwYXJzZUludChzYWx0Um91bmRzLCAxMCkpO1xuICAgIGNvbnNvbGUubG9nKCcqKioqKicsIFVzZXIpO1xuICAgICAgYXdhaXQgVXNlci5jcmVhdGUoe1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHByb2Zlc3Npb246IHByb2Zlc3Npb24sXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiBjb25maXJtUGFzc3dvcmRcbiAgICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCcqKioqKicsICdZb2xvJyk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoe1xuICAgICAgICBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnVXNlciBzdWNjZXNmdWxseSBjcmVhdGVkJ1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgIH1cbn0sXG4vKipcbiAqIFxuICovXG5hc3luYyBsb2dpblVzZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgVXNlclxuICAgICAgICAuZmluZE9uZSh7XG4gICAgICAgICAgd2hlcmU6XG4gICAgICAgIHsgcGFzc3dvcmQ6IHBhc3N3b3JkIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMikuc2VuZCh7XG4gICAgICAgICAgICAvLyB0b2tlbjogY3JlYXRlVG9rZW4odXNlci5pZCwgdXNlci51c2VybmFtZSksXG4gICAgICAgICAgICBtZXNzYWdlOiBgV2VsY29tZSBiYWNrICR7dXNlcm5hbWV9YFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICAgIH1cbiAgICB9LFxuLyoqXG4gKiBcbiAqL1xuYXN5bmMgbG9nb3V0VXNlcihyZXEsIHJlcykge1xufVxufTtcbmV4cG9ydCBkZWZhdWx0IFVzZXJDb250cjtcbiJdfQ==