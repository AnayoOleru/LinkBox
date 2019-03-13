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

var _inputVal = require('../validations/inputVal');

var _inputVal2 = _interopRequireDefault(_inputVal);

var _passwordVal = require('../validations/passwordVal');

var _passwordVal2 = _interopRequireDefault(_passwordVal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Link from '../models/link';

var Link = _models2.default.Link;


var LinkContr = {
  /**
   * 
   */
  createLink: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _req$body, title, link, tag;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, title = _req$body.title, link = _req$body.link, tag = _req$body.tag;

              if (!(!title || !link || !tag)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt('return', res.status(400).send({
                status: 400,
                error: 'Some values are missing'
              }));

            case 4:
              if (_inputVal2.default.isWhiteSpace(title, link, tag)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return', res.status(400).send({
                status: 400,
                error: "White Space are not allowed in input fields"
              }));

            case 6:
              if (_inputVal2.default.isName(title, tag)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt('return', res.status(400).send({
                status: 400,
                error: "Title or Tag must only be Alphabets, spaces are allowed"
              }));

            case 8:
              if (_inputVal2.default.isURL(link)) {
                _context.next = 10;
                break;
              }

              return _context.abrupt('return', res.status(400).send({
                status: 400,
                error: "Links must be http links(format)"
              }));

            case 10:
              // console.log(req.body.title);
              // console.log(req.body.link);
              // console.log(req.body.tags);
              Link.create({
                title: title,
                link: link,
                tag: tag
              });
              console.log('3');
              return _context.abrupt('return', res.status(201).send({
                success: true,
                message: req.body.title + ' succesfully created'
              }));

            case 15:
              _context.prev = 15;
              _context.t0 = _context['catch'](0);

              res.status(400).send(_context.t0);

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 15]]);
    }));

    function createLink(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return createLink;
  }(),

  /**
   * 
   */
  getAllLink: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var All;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Link.findAll();

            case 3:
              All = _context2.sent;
              return _context2.abrupt('return', res.status(201).send({
                message: 'Get all Links successful',
                data: All
              }));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](0);

              res.status(400).send({
                status: 400,
                message: _context2.t0
              });

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 7]]);
    }));

    function getAllLink(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return getAllLink;
  }(),

  /**
   * 
   */
  editLink: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var _req$body2, title, link, tag, id, updatedLink;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _req$body2 = req.body, title = _req$body2.title, link = _req$body2.link, tag = _req$body2.tag;
              id = req.params.id;
              _context3.prev = 2;
              _context3.next = 5;
              return Link.findOne({ where: { id: id } });

            case 5:
              updatedLink = _context3.sent;

              if (updatedLink) {
                _context3.next = 8;
                break;
              }

              return _context3.abrupt('return', res.status(400).send({
                error: 'There is no Link with that Id'
              }));

            case 8:
              if (_inputVal2.default.isURL(link)) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt('return', res.status(400).send({
                error: 'Link is incorrect, must be of HTTP format'
              }));

            case 10:
              if (!(!req.body.title || !req.body.link || !req.body.tag)) {
                _context3.next = 12;
                break;
              }

              return _context3.abrupt('return', res.status(400).send({
                error: 'Some values are missing'
              }));

            case 12:
              if (_inputVal2.default.isName(title, tag)) {
                _context3.next = 14;
                break;
              }

              return _context3.abrupt('return', res.status(400).send({
                error: 'Title and tag must be alphabets only'
              }));

            case 14:
              _context3.next = 16;
              return Link.update({ title: title, link: link, tag: tag }, {
                where: {
                  id: id
                }
              });

            case 16:
              return _context3.abrupt('return', res.status(201).send({
                message: 'Sucessfully Updated',
                updatedLink: updatedLink
              }));

            case 19:
              _context3.prev = 19;
              _context3.t0 = _context3['catch'](2);

              res.status(400).send({
                status: 400,
                message: _context3.t0
              });

            case 22:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[2, 19]]);
    }));

    function editLink(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return editLink;
  }(),

  /**
   * 
   */
  deleteLink: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var linkId, singleLink;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              linkId = req.params.linkId;
              _context4.prev = 1;
              _context4.next = 4;
              return Link.findOne({ where: { id: linkId } });

            case 4:
              singleLink = _context4.sent;

              if (!singleLink) {
                _context4.next = 10;
                break;
              }

              if (!(singleLink.userId === req.decoded.id)) {
                _context4.next = 9;
                break;
              }

              singleLink.destroy();

              return _context4.abrupt('return', res.status(202).send({
                message: 'Successfully Deleted'
              }));

            case 9:
              return _context4.abrupt('return', res.status(403).send({
                message: 'You don\'t have permision to perform such action'
              }));

            case 10:
              return _context4.abrupt('return', res.status(404).send({
                message: 'Link with id - ' + linkId + ' not found'
              }));

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4['catch'](1);

              res.status(400).send({
                status: 400,
                message: _context4.t0
              });

            case 16:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this, [[1, 13]]);
    }));

    function deleteLink(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return deleteLink;
  }()
};
exports.default = LinkContr;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9jb250cm9sbGVycy9saW5rc0N0ci5qcyJdLCJuYW1lcyI6WyJMaW5rIiwibW9kZWxzIiwiTGlua0NvbnRyIiwiY3JlYXRlTGluayIsInJlcSIsInJlcyIsImJvZHkiLCJ0aXRsZSIsImxpbmsiLCJ0YWciLCJzdGF0dXMiLCJzZW5kIiwiZXJyb3IiLCJpbnB1dFZhbCIsImlzV2hpdGVTcGFjZSIsImlzTmFtZSIsImlzVVJMIiwiY3JlYXRlIiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZ2V0QWxsTGluayIsImZpbmRBbGwiLCJBbGwiLCJkYXRhIiwiZWRpdExpbmsiLCJpZCIsInBhcmFtcyIsImZpbmRPbmUiLCJ3aGVyZSIsInVwZGF0ZWRMaW5rIiwidXBkYXRlIiwiZGVsZXRlTGluayIsImxpbmtJZCIsInNpbmdsZUxpbmsiLCJ1c2VySWQiLCJkZWNvZGVkIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBOztJQUVRQSxJLEdBQVNDLGdCLENBQVRELEk7OztBQUVSLElBQU1FLFlBQVk7QUFDbEI7OztBQUdNQyxZQUpZO0FBQUEseUdBSURDLEdBSkMsRUFJSUMsR0FKSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFPaUJELElBQUlFLElBUHJCLEVBT0hDLEtBUEcsYUFPSEEsS0FQRyxFQU9JQyxJQVBKLGFBT0lBLElBUEosRUFPVUMsR0FQVixhQU9VQSxHQVBWOztBQUFBLG9CQVFSLENBQUNGLEtBQUQsSUFBVSxDQUFDQyxJQUFYLElBQW1CLENBQUNDLEdBUlo7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBU0ZKLElBQUlLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUMxQkQsd0JBQVEsR0FEa0I7QUFFMUJFLHVCQUFPO0FBRm1CLGVBQXJCLENBVEU7O0FBQUE7QUFBQSxrQkFlUEMsbUJB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Ozs7QUFHTVksWUF4SFk7QUFBQSwyR0F3SEQ3QixHQXhIQyxFQXdISUMsR0F4SEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUhGNkIsb0JBekhFLEdBeUhTOUIsSUFBSXdCLE1BekhiLENBeUhGTSxNQXpIRTtBQUFBO0FBQUE7QUFBQSxxQkEySGlCbEMsS0FBSzZCLE9BQUwsQ0FBYSxFQUFFQyxPQUFPLEVBQUVILElBQUlPLE1BQU4sRUFBVCxFQUFiLENBM0hqQjs7QUFBQTtBQTJIRkMsd0JBM0hFOztBQUFBLG1CQTRISkEsVUE1SEk7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBNkhGQSxXQUFXQyxNQUFYLEtBQXNCaEMsSUFBSWlDLE9BQUosQ0FBWVYsRUE3SGhDO0FBQUE7QUFBQTtBQUFBOztBQThISlEseUJBQVdHLE9BQVg7O0FBOUhJLGdEQWdJR2pDLElBQUlLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUN4QlUseUJBQVM7QUFEZSxlQUFyQixDQWhJSDs7QUFBQTtBQUFBLGdEQW9JQ2hCLElBQUlLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUN4QlUseUJBQVM7QUFEZSxlQUFyQixDQXBJRDs7QUFBQTtBQUFBLGdEQXdJRGhCLElBQUlLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUMxQlUsNkNBQTJCYSxNQUEzQjtBQUQwQixlQUFyQixDQXhJQzs7QUFBQTtBQUFBO0FBQUE7O0FBNElSN0Isa0JBQUlLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQkQsd0JBQVEsR0FEVztBQUVuQlc7QUFGbUIsZUFBckI7O0FBNUlRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQ0FBbEI7a0JBbUplbkIsUyIsImZpbGUiOiJsaW5rc0N0ci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2RlbHMgZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCBpbnB1dFZhbCBmcm9tICcuLi92YWxpZGF0aW9ucy9pbnB1dFZhbCc7XG5pbXBvcnQgcGFzc3dvcmRWYWwgZnJvbSAnLi4vdmFsaWRhdGlvbnMvcGFzc3dvcmRWYWwnO1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnLi4vbW9kZWxzL2xpbmsnO1xuXG5jb25zdCB7IExpbmsgfSA9IG1vZGVscztcblxuY29uc3QgTGlua0NvbnRyID0ge1xuLyoqXG4gKiBcbiAqL1xuYXN5bmMgY3JlYXRlTGluayhyZXEsIHJlcykge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZWFjaGVkJyk7XG4gICAgdHJ5e1xuICAgICAgIGNvbnN0IHsgdGl0bGUsIGxpbmssIHRhZ30gPSByZXEuYm9keTtcbiAgICAgICBpZighdGl0bGUgfHwgIWxpbmsgfHwgIXRhZyl7XG4gICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoe1xuICAgICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgICAgZXJyb3I6ICdTb21lIHZhbHVlcyBhcmUgbWlzc2luZydcbiAgICAgICAgIH0pXG4gICAgICAgfVxuICAgICAgLy8gIHdoaXRlc3BhY2VcbiAgICAgICBpZighaW5wdXRWYWwuaXNXaGl0ZVNwYWNlKHRpdGxlLCBsaW5rLCB0YWcpKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IFxuICAgICAgICAgICAgc3RhdHVzOiA0MDAsIFxuICAgICAgICAgICAgZXJyb3I6IFwiV2hpdGUgU3BhY2UgYXJlIG5vdCBhbGxvd2VkIGluIGlucHV0IGZpZWxkc1wiIFxuICAgICAgICB9KTtcblxuICAgICAgIH1cbiAgICAgIC8vICB0aXRsZSBtdXN0IG5vdCBiZSBhIG51bWJlclxuICAgICAgaWYoIWlucHV0VmFsLmlzTmFtZSh0aXRsZSwgdGFnKSkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBcbiAgICAgICAgICAgIHN0YXR1czogNDAwLCBcbiAgICAgICAgICAgIGVycm9yOiBcIlRpdGxlIG9yIFRhZyBtdXN0IG9ubHkgYmUgQWxwaGFiZXRzLCBzcGFjZXMgYXJlIGFsbG93ZWRcIiBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBsaW5rIG11c3QgYmUgbGlua1xuICAgICAgaWYoIWlucHV0VmFsLmlzVVJMKGxpbmspKXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgXG4gICAgICAgICAgc3RhdHVzOiA0MDAsIFxuICAgICAgICAgIGVycm9yOiBcIkxpbmtzIG11c3QgYmUgaHR0cCBsaW5rcyhmb3JtYXQpXCIgXG4gICAgICB9KTtcbiAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5LnRpdGxlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxLmJvZHkubGluayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5LnRhZ3MpO1xuICAgICAgICBMaW5rLmNyZWF0ZSh7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGxpbmssXG4gICAgICAgICAgICB0YWdcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCczJyk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2VuZCh7XG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogYCR7cmVxLmJvZHkudGl0bGV9IHN1Y2Nlc2Z1bGx5IGNyZWF0ZWRgLFxuICAgICAgICAgIH0pO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgIH1cbiAgICB9LFxuLyoqXG4gKiBcbiAqL1xuYXN5bmMgZ2V0QWxsTGluayhyZXEsIHJlcykge1xuICAgIC8vIGNvbnN0IHsgaWQgfSA9IHJlcS5kZWNvZGVkO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IEFsbCA9IGF3YWl0IExpbmsuZmluZEFsbCgpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ0dldCBhbGwgTGlua3Mgc3VjY2Vzc2Z1bCcsXG4gICAgICAgICAgICBkYXRhOiBBbGxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7XG4gICAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9XG59LFxuLyoqXG4gKiBcbiAqL1xuYXN5bmMgZWRpdExpbmsocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBsaW5rLCB0YWcgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgdHJ5e1xuICAgIGNvbnN0IHVwZGF0ZWRMaW5rID0gYXdhaXQgTGluay5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IGlkfSB9KTtcbiAgICAgIGlmKCF1cGRhdGVkTGluayl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7XG4gICAgICAgICAgZXJyb3I6ICdUaGVyZSBpcyBubyBMaW5rIHdpdGggdGhhdCBJZCdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmKCFpbnB1dFZhbC5pc1VSTChsaW5rKSl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7XG4gICAgICAgICAgZXJyb3I6ICdMaW5rIGlzIGluY29ycmVjdCwgbXVzdCBiZSBvZiBIVFRQIGZvcm1hdCdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmKCFyZXEuYm9keS50aXRsZSB8fCAhcmVxLmJvZHkubGluayB8fCAhcmVxLmJvZHkudGFnKXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHtcbiAgICAgICAgICBlcnJvcjogJ1NvbWUgdmFsdWVzIGFyZSBtaXNzaW5nJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYoIWlucHV0VmFsLmlzTmFtZSh0aXRsZSwgdGFnKSl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7XG4gICAgICAgICAgZXJyb3I6ICdUaXRsZSBhbmQgdGFnIG11c3QgYmUgYWxwaGFiZXRzIG9ubHknXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgYXdhaXQgTGluay51cGRhdGUoXG4gICAgICAgIHsgdGl0bGUsIGxpbmssIHRhZyB9LCB7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2VuZCh7XG4gICAgICAgICAgbWVzc2FnZTogJ1N1Y2Vzc2Z1bGx5IFVwZGF0ZWQnLFxuICAgICAgICAgIHVwZGF0ZWRMaW5rXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcil7XG4gICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7XG4gICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICBtZXNzYWdlOiBlcnJvclxuICAgICAgfSk7XG4gICAgfSBcbiAgfSxcbi8qKlxuICogXG4gKi9cbmFzeW5jIGRlbGV0ZUxpbmsocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3QgeyBsaW5rSWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc2luZ2xlTGluayA9IGF3YWl0IExpbmsuZmluZE9uZSh7IHdoZXJlOiB7IGlkOiBsaW5rSWQgfSB9KTtcbiAgICAgICAgICBpZiAoc2luZ2xlTGluaykge1xuICAgICAgICAgICAgaWYgKHNpbmdsZUxpbmsudXNlcklkID09PSByZXEuZGVjb2RlZC5pZCkge1xuICAgICAgICAgICAgICBzaW5nbGVMaW5rLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAyKS5zZW5kKHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgRGVsZXRlZCcsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnWW91IGRvblxcJ3QgaGF2ZSBwZXJtaXNpb24gdG8gcGVyZm9ybSBzdWNoIGFjdGlvbicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBMaW5rIHdpdGggaWQgLSAke2xpbmtJZH0gbm90IGZvdW5kYCxcbiAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoe1xuICAgICAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBMaW5rQ29udHI7XG4iXX0=