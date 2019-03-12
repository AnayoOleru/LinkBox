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
      var id;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = req.decoded.id;
              _context2.prev = 1;
              _context2.next = 4;
              return Link.findAll({
                where: {
                  userId: id
                }
              });

            case 4:
              return _context2.abrupt('return', res.status(201).send({
                message: 'Get all Links successful'
              }));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](1);

              res.status(400).send({
                status: 400,
                message: _context2.t0
              });

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 7]]);
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
      var _req$body2, title, link, tag, linkId, updatedLink;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _req$body2 = req.body, title = _req$body2.title, link = _req$body2.link, tag = _req$body2.tag;
              linkId = req.params.linkId;
              _context3.prev = 2;
              _context3.next = 5;
              return Link.findOne({ where: { id: linkId, userId: req.decoded.id } });

            case 5:
              _context3.next = 7;
              return Link.update({ title: title, link: link, tag: tag }, {
                where: {
                  id: linkId
                }
              });

            case 7:
              updatedLink = _context3.sent;
              return _context3.abrupt('return', res.status(201).send({
                message: 'Sucessfully Updated',
                updatedLink: updatedLink
              }));

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3['catch'](2);

              res.status(400).send({
                status: 400,
                message: _context3.t0
              });

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[2, 11]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9jb250cm9sbGVycy9saW5rc0N0ci5qcyJdLCJuYW1lcyI6WyJMaW5rIiwibW9kZWxzIiwiTGlua0NvbnRyIiwiY3JlYXRlTGluayIsInJlcSIsInJlcyIsImJvZHkiLCJ0aXRsZSIsImxpbmsiLCJ0YWciLCJzdGF0dXMiLCJzZW5kIiwiZXJyb3IiLCJpbnB1dFZhbCIsImlzV2hpdGVTcGFjZSIsImlzTmFtZSIsImlzVVJMIiwiY3JlYXRlIiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZ2V0QWxsTGluayIsImlkIiwiZGVjb2RlZCIsImZpbmRBbGwiLCJ3aGVyZSIsInVzZXJJZCIsImVkaXRMaW5rIiwibGlua0lkIiwicGFyYW1zIiwiZmluZE9uZSIsInVwZGF0ZSIsInVwZGF0ZWRMaW5rIiwiZGVsZXRlTGluayIsInNpbmdsZUxpbmsiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0E7O0lBRVFBLEksR0FBU0MsZ0IsQ0FBVEQsSTs7O0FBRVIsSUFBTUUsWUFBWTtBQUNsQjs7O0FBR01DLFlBSlk7QUFBQSx5R0FJREMsR0FKQyxFQUlJQyxHQUpKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQU9pQkQsSUFBSUUsSUFQckIsRUFPSEMsS0FQRyxhQU9IQSxLQVBHLEVBT0lDLElBUEosYUFPSUEsSUFQSixFQU9VQyxHQVBWLGFBT1VBLEdBUFY7O0FBQUEsb0JBUVIsQ0FBQ0YsS0FBRCxJQUFVLENBQUNDLElBQVgsSUFBbUIsQ0FBQ0MsR0FSWjtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FTRkosSUFBSUssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCRCx3QkFBUSxHQURrQjtBQUUxQkUsdUJBQU87QUFGbUIsZUFBckIsQ0FURTs7QUFBQTtBQUFBLGtCQWVQQyxtQkFBU0MsWUFBVCxDQUFz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R0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJVLDZDQUEyQlEsTUFBM0I7QUFEMEIsZUFBckIsQ0F4SEM7O0FBQUE7QUFBQTtBQUFBOztBQTRIUnhCLGtCQUFJSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbkJELHdCQUFRLEdBRFc7QUFFbkJXO0FBRm1CLGVBQXJCOztBQTVIUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLENBQWxCO2tCQW1JZW5CLFMiLCJmaWxlIjoibGlua3NDdHIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kZWxzIGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgaW5wdXRWYWwgZnJvbSAnLi4vdmFsaWRhdGlvbnMvaW5wdXRWYWwnO1xuaW1wb3J0IHBhc3N3b3JkVmFsIGZyb20gJy4uL3ZhbGlkYXRpb25zL3Bhc3N3b3JkVmFsJztcbi8vIGltcG9ydCBMaW5rIGZyb20gJy4uL21vZGVscy9saW5rJztcblxuY29uc3QgeyBMaW5rIH0gPSBtb2RlbHM7XG5cbmNvbnN0IExpbmtDb250ciA9IHtcbi8qKlxuICogXG4gKi9cbmFzeW5jIGNyZWF0ZUxpbmsocmVxLCByZXMpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVhY2hlZCcpO1xuICAgIHRyeXtcbiAgICAgICBjb25zdCB7IHRpdGxlLCBsaW5rLCB0YWd9ID0gcmVxLmJvZHk7XG4gICAgICAgaWYoIXRpdGxlIHx8ICFsaW5rIHx8ICF0YWcpe1xuICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHtcbiAgICAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICAgICAgIGVycm9yOiAnU29tZSB2YWx1ZXMgYXJlIG1pc3NpbmcnXG4gICAgICAgICB9KVxuICAgICAgIH1cbiAgICAgIC8vICB3aGl0ZXNwYWNlXG4gICAgICAgaWYoIWlucHV0VmFsLmlzV2hpdGVTcGFjZSh0aXRsZSwgbGluaywgdGFnKSkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBcbiAgICAgICAgICAgIHN0YXR1czogNDAwLCBcbiAgICAgICAgICAgIGVycm9yOiBcIldoaXRlIFNwYWNlIGFyZSBub3QgYWxsb3dlZCBpbiBpbnB1dCBmaWVsZHNcIiBcbiAgICAgICAgfSk7XG5cbiAgICAgICB9XG4gICAgICAvLyAgdGl0bGUgbXVzdCBub3QgYmUgYSBudW1iZXJcbiAgICAgIGlmKCFpbnB1dFZhbC5pc05hbWUodGl0bGUsIHRhZykpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgXG4gICAgICAgICAgICBzdGF0dXM6IDQwMCwgXG4gICAgICAgICAgICBlcnJvcjogXCJUaXRsZSBvciBUYWcgbXVzdCBvbmx5IGJlIEFscGhhYmV0cywgc3BhY2VzIGFyZSBhbGxvd2VkXCIgXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gbGluayBtdXN0IGJlIGxpbmtcbiAgICAgIGlmKCFpbnB1dFZhbC5pc1VSTChsaW5rKSl7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IFxuICAgICAgICAgIHN0YXR1czogNDAwLCBcbiAgICAgICAgICBlcnJvcjogXCJMaW5rcyBtdXN0IGJlIGh0dHAgbGlua3MoZm9ybWF0KVwiIFxuICAgICAgfSk7XG4gICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keS50aXRsZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5LmxpbmspO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keS50YWdzKTtcbiAgICAgICAgTGluay5jcmVhdGUoe1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBsaW5rLFxuICAgICAgICAgICAgdGFnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnMycpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoe1xuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGAke3JlcS5ib2R5LnRpdGxlfSBzdWNjZXNmdWxseSBjcmVhdGVkYCxcbiAgICAgICAgICB9KTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKTtcbiAgICB9XG4gICAgfSxcbi8qKlxuICogXG4gKi9cbmFzeW5jIGdldEFsbExpbmsocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEuZGVjb2RlZDtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBMaW5rLmZpbmRBbGwoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VySWQ6IGlkXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdHZXQgYWxsIExpbmtzIHN1Y2Nlc3NmdWwnXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoe1xuICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yXG4gICAgICAgIH0pO1xuICAgICAgfVxufSxcbi8qKlxuICogXG4gKi9cbmFzeW5jIGVkaXRMaW5rKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgbGluaywgdGFnIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCB7IGxpbmtJZCB9ID0gcmVxLnBhcmFtcztcbiAgICB0cnl7XG4gICAgYXdhaXQgTGluay5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IGxpbmtJZCwgdXNlcklkOiByZXEuZGVjb2RlZC5pZCB9IH0pO1xuXG4gICAgY29uc3QgdXBkYXRlZExpbmsgPSBhd2FpdCBMaW5rLnVwZGF0ZShcbiAgICAgICAgeyB0aXRsZSwgbGluaywgdGFnIH0sIHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgaWQ6IGxpbmtJZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2VuZCh7XG4gICAgICAgICAgbWVzc2FnZTogJ1N1Y2Vzc2Z1bGx5IFVwZGF0ZWQnLFxuICAgICAgICAgIHVwZGF0ZWRMaW5rXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcil7XG4gICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCh7XG4gICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICBtZXNzYWdlOiBlcnJvclxuICAgICAgfSk7XG4gICAgfSBcbiAgfSxcbi8qKlxuICogXG4gKi9cbmFzeW5jIGRlbGV0ZUxpbmsocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3QgeyBsaW5rSWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc2luZ2xlTGluayA9IGF3YWl0IExpbmsuZmluZE9uZSh7IHdoZXJlOiB7IGlkOiBsaW5rSWQgfSB9KTtcbiAgICAgICAgICBpZiAoc2luZ2xlTGluaykge1xuICAgICAgICAgICAgaWYgKHNpbmdsZUxpbmsudXNlcklkID09PSByZXEuZGVjb2RlZC5pZCkge1xuICAgICAgICAgICAgICBzaW5nbGVMaW5rLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAyKS5zZW5kKHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgRGVsZXRlZCcsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnWW91IGRvblxcJ3QgaGF2ZSBwZXJtaXNpb24gdG8gcGVyZm9ybSBzdWNoIGFjdGlvbicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBMaW5rIHdpdGggaWQgLSAke2xpbmtJZH0gbm90IGZvdW5kYCxcbiAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoe1xuICAgICAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBMaW5rQ29udHI7XG4iXX0=