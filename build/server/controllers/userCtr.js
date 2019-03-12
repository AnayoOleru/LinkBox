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

var _inputVal = require('../validations/inputVal');

var _inputVal2 = _interopRequireDefault(_inputVal);

var _passwordVal = require('../validations/passwordVal');

var _passwordVal2 = _interopRequireDefault(_passwordVal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User;


var UserContr = {
  /**
   * 
   */
  createUser: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _req$body, username, profession, password, confirmPassword, isUsername, hashPassword, userToken, token;

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
              if (!(!username || !profession || !password || !confirmPassword)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return', res.status(400).send({
                "status": 400,
                "error": "Some values are missing"
              }));

            case 9:
              if (_inputVal2.default.isWhiteSpace(username, profession, password, confirmPassword)) {
                _context.next = 11;
                break;
              }

              return _context.abrupt('return', res.status(400).send({
                "status": 400,
                "error": "White Space are not allowed in input fields"
              }));

            case 11:
              if (_passwordVal2.default.ispasswordValid(password)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt('return', res.status(400).send({
                "status": 400,
                "error": "Password must be minimum eight characters, at least one letter and one number:"
              }));

            case 13:
              if (_inputVal2.default.isName(username, profession)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt('return', res.status(400).send({
                "status": 400,
                "error": "Names must only be Alphabets, spaces are allowed"
              }));

            case 15:

              //   const hash = await bcrypt.hash(password, parseInt(saltRounds, 10));
              hashPassword = _jwt2.default.hashPassword(password);


              console.log('*****', User);
              _context.next = 19;
              return User.create({
                username: username,
                profession: profession,
                password: hashPassword,
                confirmPassword: confirmPassword
              });

            case 19:
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

            case 25:
              _context.prev = 25;
              _context.t0 = _context['catch'](1);

              console.log(_context.t0);
              res.status(400).send(_context.t0);

            case 29:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 25]]);
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
      var _req$body2, username, password, passwordExist, userToken;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
              _context2.prev = 1;

              if (!(!username || !password)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({
                "status": 400,
                "error": "Some values are missing"
              }));

            case 4:
              if (_inputVal2.default.isWhiteSpace(username, password)) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({
                "status": 400,
                "error": "White Space are not allowed in input fields"
              }));

            case 6:
              if (_passwordVal2.default.ispasswordValid(password)) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({
                "status": 400,
                "error": "Password is incorrect"
              }));

            case 8:
              if (_inputVal2.default.isName(username)) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({
                "status": 400,
                "error": "Names must only be Alphabets, spaces are allowed"
              }));

            case 10:
              _context2.next = 12;
              return User.findOne({
                where: { password: password }
              });

            case 12:
              passwordExist = _context2.sent;

              if (passwordExist) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt('return', res.status(404).send({ sucsess: false, message: username + ' does not exist, please register' }));

            case 15:
              userToken = { username: username };

              _jwt2.default.generateToken(userToken);
              return _context2.abrupt('return', res.status(202).send({
                // token: createToken(user.id, user.username),
                message: 'Welcome back ' + username
              }));

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2['catch'](1);

              res.status(400).send(_context2.t0);

            case 23:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 20]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9jb250cm9sbGVycy91c2VyQ3RyLmpzIl0sIm5hbWVzIjpbIlVzZXIiLCJtb2RlbHMiLCJVc2VyQ29udHIiLCJjcmVhdGVVc2VyIiwicmVxIiwicmVzIiwiYm9keSIsInVzZXJuYW1lIiwicHJvZmVzc2lvbiIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiZmluZE9uZSIsIndoZXJlIiwiaXNVc2VybmFtZSIsInN0YXR1cyIsInNlbmQiLCJzdWNzZXNzIiwibWVzc2FnZSIsImlucHV0VmFsIiwiaXNXaGl0ZVNwYWNlIiwicGFzc3dvcmRWYWwiLCJpc3Bhc3N3b3JkVmFsaWQiLCJpc05hbWUiLCJoYXNoUGFzc3dvcmQiLCJIYXNoUGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlIiwidXNlclRva2VuIiwidG9rZW4iLCJUb2tlbiIsImdlbmVyYXRlVG9rZW4iLCJoZWFkZXIiLCJqc29uIiwic3VjY2VzcyIsImxvZ2luVXNlciIsInBhc3N3b3JkRXhpc3QiLCJsb2dvdXRVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7SUFFUUEsSSxHQUFTQyxnQixDQUFURCxJOzs7QUFFUixJQUFNRSxZQUFZO0FBQ2xCOzs7QUFHTUMsWUFKWTtBQUFBLHlHQUlEQyxHQUpDLEVBSUlDLEdBSko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUs4Q0QsSUFBSUUsSUFMbEQsRUFLTkMsUUFMTSxhQUtOQSxRQUxNLEVBS0lDLFVBTEosYUFLSUEsVUFMSixFQUtnQkMsUUFMaEIsYUFLZ0JBLFFBTGhCLEVBSzBCQyxlQUwxQixhQUswQkEsZUFMMUI7QUFBQTtBQUFBO0FBQUEscUJBT2FWLEtBQUtXLE9BQUwsQ0FBYTtBQUNwQ0MsdUJBQU87QUFDTEwsNEJBQVVBO0FBREw7QUFENkIsZUFBYixDQVBiOztBQUFBO0FBT05NLHdCQVBNOztBQUFBLG1CQVlS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QUVyQixVQUFVQSxRQUFaLEVBN0dSOztBQThHVnVCLDRCQUFNQyxhQUFOLENBQW9CSCxTQUFwQjtBQTlHVSxnREErR0h2QixJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEI7QUFDQUUsMkNBQXlCVjtBQUZELGVBQXJCLENBL0dHOztBQUFBO0FBQUE7QUFBQTs7QUFvSE5GLGtCQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEI7O0FBcEhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQXVIbEI7OztBQUdNc0IsWUExSFk7QUFBQSwyR0EwSERqQyxHQTFIQyxFQTBISUMsR0ExSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLENBQWxCO2tCQTZIZUgsUyIsImZpbGUiOiJ1c2VyQ3RyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZGVscyBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IFRva2VuIGZyb20gJy4uL2hlbHBlcnMvand0JztcbmltcG9ydCBIYXNoUGFzc3dvcmQgZnJvbSAnLi4vaGVscGVycy9qd3QnO1xuaW1wb3J0IGlucHV0VmFsIGZyb20gJy4uL3ZhbGlkYXRpb25zL2lucHV0VmFsJztcbmltcG9ydCBwYXNzd29yZFZhbCBmcm9tICcuLi92YWxpZGF0aW9ucy9wYXNzd29yZFZhbCc7XG5cbmNvbnN0IHsgVXNlciB9ID0gbW9kZWxzO1xuXG5jb25zdCBVc2VyQ29udHIgPSB7XG4vKipcbiAqIFxuICovXG5hc3luYyBjcmVhdGVVc2VyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgcHJvZmVzc2lvbiwgcGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGlzVXNlcm5hbWUgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChpc1VzZXJuYW1lKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IHN1Y3Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBgJHt1c2VybmFtZX0gYWxyZWFkeSBpbiB1c2VgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCF1c2VybmFtZSAgfHwgIXByb2Zlc3Npb24gfHwgIXBhc3N3b3JkIHx8ICFjb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgXG4gICAgICAgICAgICBcInN0YXR1c1wiOiA0MDAsIFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlNvbWUgdmFsdWVzIGFyZSBtaXNzaW5nXCIgXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFpbnB1dFZhbC5pc1doaXRlU3BhY2UodXNlcm5hbWUsIHByb2Zlc3Npb24sIHBhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQpKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IFxuICAgICAgICAgICAgXCJzdGF0dXNcIjogNDAwLCBcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJXaGl0ZSBTcGFjZSBhcmUgbm90IGFsbG93ZWQgaW4gaW5wdXQgZmllbGRzXCIgXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgaWYgKCFwYXNzd29yZFZhbC5pc3Bhc3N3b3JkVmFsaWQocGFzc3dvcmQpKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IFxuICAgICAgICAgICAgXCJzdGF0dXNcIjogNDAwLCBcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJQYXNzd29yZCBtdXN0IGJlIG1pbmltdW0gZWlnaHQgY2hhcmFjdGVycywgYXQgbGVhc3Qgb25lIGxldHRlciBhbmQgb25lIG51bWJlcjpcIiBcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaW5wdXRWYWwuaXNOYW1lKHVzZXJuYW1lLCBwcm9mZXNzaW9uKSkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBcbiAgICAgICAgICAgIFwic3RhdHVzXCI6IDQwMCwgXG4gICAgICAgICAgICBcImVycm9yXCI6IFwiTmFtZXMgbXVzdCBvbmx5IGJlIEFscGhhYmV0cywgc3BhY2VzIGFyZSBhbGxvd2VkXCIgXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgLy8gICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHBhcnNlSW50KHNhbHRSb3VuZHMsIDEwKSk7XG4gIGNvbnN0IGhhc2hQYXNzd29yZCA9IEhhc2hQYXNzd29yZC5oYXNoUGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgY29uc29sZS5sb2coJyoqKioqJywgVXNlcik7XG4gICAgICBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgcHJvZmVzc2lvbjogcHJvZmVzc2lvbixcbiAgICAgICAgcGFzc3dvcmQ6IGhhc2hQYXNzd29yZCxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiBjb25maXJtUGFzc3dvcmRcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1c2VyVG9rZW4gPSB7IHVzZXJuYW1lOiB1c2VybmFtZSB9XG5cbiAgICAgIGNvbnN0IHRva2VuID0gVG9rZW4uZ2VuZXJhdGVUb2tlbih1c2VyVG9rZW4pO1xuICAgIGNvbnNvbGUubG9nKCcqKioqKicsICk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmhlYWRlcigneC1hdXRoLXRva2VuJywgdG9rZW4pLmpzb24oe1xuICAgICAgICBzdWNjZXNzOiB0cnVlLCBcbiAgICAgICAgbWVzc2FnZTogJ1VzZXIgc3VjY2VzZnVsbHkgY3JlYXRlZCcsXG4gICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwcm9mZXNzaW9uOiBwcm9mZXNzaW9uXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgfVxufSxcbi8qKlxuICogXG4gKi9cbmFzeW5jIGxvZ2luVXNlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgaWYgKCF1c2VybmFtZSAgfHwgIXBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IFxuICAgICAgICAgICAgXCJzdGF0dXNcIjogNDAwLCBcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJTb21lIHZhbHVlcyBhcmUgbWlzc2luZ1wiIFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghaW5wdXRWYWwuaXNXaGl0ZVNwYWNlKHVzZXJuYW1lLCBwYXNzd29yZCkpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgXG4gICAgICAgICAgICBcInN0YXR1c1wiOiA0MDAsIFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIldoaXRlIFNwYWNlIGFyZSBub3QgYWxsb3dlZCBpbiBpbnB1dCBmaWVsZHNcIiBcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICBpZiAoIXBhc3N3b3JkVmFsLmlzcGFzc3dvcmRWYWxpZChwYXNzd29yZCkpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgXG4gICAgICAgICAgICBcInN0YXR1c1wiOiA0MDAsIFxuICAgICAgICAgICAgXCJlcnJvclwiOiBcIlBhc3N3b3JkIGlzIGluY29ycmVjdFwiIFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpbnB1dFZhbC5pc05hbWUodXNlcm5hbWUpKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IFxuICAgICAgICAgICAgXCJzdGF0dXNcIjogNDAwLCBcbiAgICAgICAgICAgIFwiZXJyb3JcIjogXCJOYW1lcyBtdXN0IG9ubHkgYmUgQWxwaGFiZXRzLCBzcGFjZXMgYXJlIGFsbG93ZWRcIiBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRXhpc3QgPSBhd2FpdCBVc2VyXG4gICAgICAgIC5maW5kT25lKHtcbiAgICAgICAgICB3aGVyZTpcbiAgICAgICAgeyBwYXNzd29yZDogcGFzc3dvcmQgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYoIXBhc3N3b3JkRXhpc3Qpe1xuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IHN1Y3Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBgJHt1c2VybmFtZX0gZG9lcyBub3QgZXhpc3QsIHBsZWFzZSByZWdpc3RlcmB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1c2VyVG9rZW4gPSB7IHVzZXJuYW1lOiB1c2VybmFtZSB9XG4gICAgICAgIFRva2VuLmdlbmVyYXRlVG9rZW4odXNlclRva2VuKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAyKS5zZW5kKHtcbiAgICAgICAgICAgIC8vIHRva2VuOiBjcmVhdGVUb2tlbih1c2VyLmlkLCB1c2VyLnVzZXJuYW1lKSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBXZWxjb21lIGJhY2sgJHt1c2VybmFtZX1gXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0sXG4vKipcbiAqIFxuICovXG5hc3luYyBsb2dvdXRVc2VyKHJlcSwgcmVzKSB7XG59XG59O1xuZXhwb3J0IGRlZmF1bHQgVXNlckNvbnRyO1xuIl19