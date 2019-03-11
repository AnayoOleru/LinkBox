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

// import Link from '../models/link';

var Link = _models2.default.Link;


var LinkContr = {
    /**
     * 
     */
    createLink: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            console.log('reached');
                            _context.prev = 1;

                            // const { title, link, tags} = req.body;
                            console.log(req.body.title);
                            console.log(req.body.link);
                            console.log(req.body.tags);
                            Link.create({
                                title: req.body.title,
                                link: req.body.link,
                                tag: req.body.tag
                            });
                            console.log('3');
                            return _context.abrupt('return', res.status(201).send({
                                success: true,
                                message: req.body.title + 'succesfully created'
                            }));

                        case 10:
                            _context.prev = 10;
                            _context.t0 = _context['catch'](1);

                            res.status(400).send(_context.t0);

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[1, 10]]);
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

                            res.status(400).send(_context2.t0);

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
            var _req$body, title, link, tag, linkId, updatedLink;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _req$body = req.body, title = _req$body.title, link = _req$body.link, tag = _req$body.tag;
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

                            res.status(400).send(_context3.t0);

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

                            res.status(400).send(_context4.t0);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9jb250cm9sbGVycy9saW5rc0N0ci5qcyJdLCJuYW1lcyI6WyJMaW5rIiwibW9kZWxzIiwiTGlua0NvbnRyIiwiY3JlYXRlTGluayIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwidGl0bGUiLCJsaW5rIiwidGFncyIsImNyZWF0ZSIsInRhZyIsInN0YXR1cyIsInNlbmQiLCJzdWNjZXNzIiwibWVzc2FnZSIsImdldEFsbExpbmsiLCJpZCIsImRlY29kZWQiLCJmaW5kQWxsIiwid2hlcmUiLCJ1c2VySWQiLCJlZGl0TGluayIsImxpbmtJZCIsInBhcmFtcyIsImZpbmRPbmUiLCJ1cGRhdGUiLCJ1cGRhdGVkTGluayIsImRlbGV0ZUxpbmsiLCJzaW5nbGVMaW5rIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQ0E7O0lBRVFBLEksR0FBU0MsZ0IsQ0FBVEQsSTs7O0FBRVIsSUFBTUUsWUFBWTtBQUNsQjs7O0FBR01DLGNBSlk7QUFBQSw2R0FJREMsR0FKQyxFQUlJQyxHQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLZEMsb0NBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBTGM7O0FBT1Y7QUFDQUQsb0NBQVFDLEdBQVIsQ0FBWUgsSUFBSUksSUFBSixDQUFTQyxLQUFyQjtBQUNBSCxvQ0FBUUMsR0FBUixDQUFZSCxJQUFJSSxJQUFKLENBQVNFLElBQXJCO0FBQ0FKLG9DQUFRQyxHQUFSLENBQVlILElBQUlJLElBQUosQ0FBU0csSUFBckI7QUFDQVgsaUNBQUtZLE1BQUwsQ0FBWTtBQUNSSCx1Q0FBT0wsSUFBSUksSUFBSixDQUFTQyxLQURSO0FBRVJDLHNDQUFNTixJQUFJSSxJQUFKLENBQVNFLElBRlA7QUFHUkcscUNBQUtULElBQUlJLElBQUosQ0FBU0s7QUFITiw2QkFBWjtBQUtBUCxvQ0FBUUMsR0FBUixDQUFZLEdBQVo7QUFoQlUsNkRBaUJIRixJQUFJUyxNQUFKLENB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Q0FBcUI7QUFDeEJFLHlDQUFTO0FBRGUsNkJBQXJCLENBOUVIOztBQUFBO0FBQUEsOERBa0ZDWixJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEJFLHlDQUFTO0FBRGUsNkJBQXJCLENBbEZEOztBQUFBO0FBQUEsOERBc0ZEWixJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJFLDZEQUEyQlEsTUFBM0I7QUFEMEIsNkJBQXJCLENBdEZDOztBQUFBO0FBQUE7QUFBQTs7QUEwRk5wQixnQ0FBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCOztBQTFGTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLENBQWxCO2tCQThGZWIsUyIsImZpbGUiOiJsaW5rc0N0ci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2RlbHMgZnJvbSAnLi4vbW9kZWxzJztcbi8vIGltcG9ydCBMaW5rIGZyb20gJy4uL21vZGVscy9saW5rJztcblxuY29uc3QgeyBMaW5rIH0gPSBtb2RlbHM7XG5cbmNvbnN0IExpbmtDb250ciA9IHtcbi8qKlxuICogXG4gKi9cbmFzeW5jIGNyZWF0ZUxpbmsocmVxLCByZXMpIHtcbiAgICBjb25zb2xlLmxvZygncmVhY2hlZCcpO1xuICAgIHRyeXtcbiAgICAgICAgLy8gY29uc3QgeyB0aXRsZSwgbGluaywgdGFnc30gPSByZXEuYm9keTtcbiAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkudGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keS5saW5rKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkudGFncyk7XG4gICAgICAgIExpbmsuY3JlYXRlKHtcbiAgICAgICAgICAgIHRpdGxlOiByZXEuYm9keS50aXRsZSxcbiAgICAgICAgICAgIGxpbms6IHJlcS5ib2R5LmxpbmssXG4gICAgICAgICAgICB0YWc6IHJlcS5ib2R5LnRhZ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJzMnKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBgJHtyZXEuYm9keS50aXRsZX1zdWNjZXNmdWxseSBjcmVhdGVkYCxcbiAgICAgICAgICB9KTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKTtcbiAgICB9XG4gICAgfSxcbi8qKlxuICogXG4gKi9cbmFzeW5jIGdldEFsbExpbmsocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEuZGVjb2RlZDtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBMaW5rLmZpbmRBbGwoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VySWQ6IGlkXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdHZXQgYWxsIExpbmtzIHN1Y2Nlc3NmdWwnXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgICAgfVxufSxcbi8qKlxuICogXG4gKi9cbmFzeW5jIGVkaXRMaW5rKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgbGluaywgdGFnIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCB7IGxpbmtJZCB9ID0gcmVxLnBhcmFtcztcbiAgICB0cnl7XG4gICAgYXdhaXQgTGluay5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IGxpbmtJZCwgdXNlcklkOiByZXEuZGVjb2RlZC5pZCB9IH0pO1xuXG4gICAgY29uc3QgdXBkYXRlZExpbmsgPSBhd2FpdCBMaW5rLnVwZGF0ZShcbiAgICAgICAgeyB0aXRsZSwgbGluaywgdGFnIH0sIHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgaWQ6IGxpbmtJZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2VuZCh7XG4gICAgICAgICAgbWVzc2FnZTogJ1N1Y2Vzc2Z1bGx5IFVwZGF0ZWQnLFxuICAgICAgICAgIHVwZGF0ZWRMaW5rXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gIH0gXG4gIH0sXG4vKipcbiAqIFxuICovXG5hc3luYyBkZWxldGVMaW5rKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHsgbGlua0lkIH0gPSByZXEucGFyYW1zO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNpbmdsZUxpbmsgPSBhd2FpdCBMaW5rLmZpbmRPbmUoeyB3aGVyZTogeyBpZDogbGlua0lkIH0gfSk7XG4gICAgICAgICAgaWYgKHNpbmdsZUxpbmspIHtcbiAgICAgICAgICAgIGlmIChzaW5nbGVMaW5rLnVzZXJJZCA9PT0gcmVxLmRlY29kZWQuaWQpIHtcbiAgICAgICAgICAgICAgc2luZ2xlTGluay5kZXN0cm95KCk7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMikuc2VuZCh7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2Vzc2Z1bGx5IERlbGV0ZWQnLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1lvdSBkb25cXCd0IGhhdmUgcGVybWlzaW9uIHRvIHBlcmZvcm0gc3VjaCBhY3Rpb24nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBgTGluayB3aXRoIGlkIC0gJHtsaW5rSWR9IG5vdCBmb3VuZGAsXG4gICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBMaW5rQ29udHI7XG4iXX0=