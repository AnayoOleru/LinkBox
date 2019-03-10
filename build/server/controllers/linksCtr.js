'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

require('sequelize');

var _link = require('../models/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
                            _link2.default.create({
                                title: req.body.title,
                                link: req.body.link,
                                tags: req.body.tags
                            });
                            console.log('3');
                            return _context.abrupt('return', res.status(201).send({
                                success: true,
                                message: 'contact succesfully created'
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
                            return _link2.default.findAll({
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
                            return _link2.default.findOne({ where: { id: linkId, userId: req.decoded.id } });

                        case 5:
                            _context3.next = 7;
                            return _link2.default.update({ title: title, link: link, tag: tag }, {
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
                            return _link2.default.findOne({ where: { id: linkId } });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9jb250cm9sbGVycy9saW5rc0N0ci5qcyJdLCJuYW1lcyI6WyJMaW5rQ29udHIiLCJjcmVhdGVMaW5rIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJ0aXRsZSIsImxpbmsiLCJ0YWdzIiwiTGluayIsImNyZWF0ZSIsInN0YXR1cyIsInNlbmQiLCJzdWNjZXNzIiwibWVzc2FnZSIsImdldEFsbExpbmsiLCJpZCIsImRlY29kZWQiLCJmaW5kQWxsIiwid2hlcmUiLCJ1c2VySWQiLCJlZGl0TGluayIsInRhZyIsImxpbmtJZCIsInBhcmFtcyIsImZpbmRPbmUiLCJ1cGRhdGUiLCJ1cGRhdGVkTGluayIsImRlbGV0ZUxpbmsiLCJzaW5nbGVMaW5rIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWTtBQUNsQjs7O0FBR01DLGNBSlk7QUFBQSw2R0FJREMsR0FKQyxFQUlJQyxHQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLZEMsb0NBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBTGM7O0FBT1Y7QUFDQUQsb0NBQVFDLEdBQVIsQ0FBWUgsSUFBSUksSUFBSixDQUFTQyxLQUFyQjtBQUNBSCxvQ0FBUUMsR0FBUixDQUFZSCxJQUFJSSxJQUFKLENBQVNFLElBQXJCO0FBQ0FKLG9DQUFRQyxHQUFSLENBQVlILElBQUlJLElBQUosQ0FBU0csSUFBckI7QUFDQUMsMkNBQUtDLE1BQUwsQ0FBWTtBQUNSSix1Q0FBT0wsSUFBSUksSUFBSixDQUFTQyxLQURSO0FBRVJDLHNDQUFNTixJQUFJSSxJQUFKLENBQVNFLElBRlA7QUFHUkMsc0NBQU1QLElBQUlJLElBQUosQ0FBU0c7QUFIUCw2QkFBWjtBQUtBTCxvQ0FBUUMsR0FBUixDQUFZLEdBQVo7QUFoQlUsNkRBaUJIRixJQUFJUyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDeEJDLHlD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SixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ3hCRSx5Q0FBUztBQURlLDZCQUFyQixDQWxGRDs7QUFBQTtBQUFBLDhEQXNGRFosSUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCRSw2REFBMkJTLE1BQTNCO0FBRDBCLDZCQUFyQixDQXRGQzs7QUFBQTtBQUFBO0FBQUE7O0FBMEZOckIsZ0NBQUlTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQjs7QUExRk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDQUFsQjtrQkE4RmViLFMiLCJmaWxlIjoibGlua3NDdHIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NlcXVlbGl6ZSc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9tb2RlbHMvbGluayc7XG5cbmNvbnN0IExpbmtDb250ciA9IHtcbi8qKlxuICogXG4gKi9cbmFzeW5jIGNyZWF0ZUxpbmsocmVxLCByZXMpIHtcbiAgICBjb25zb2xlLmxvZygncmVhY2hlZCcpO1xuICAgIHRyeXtcbiAgICAgICAgLy8gY29uc3QgeyB0aXRsZSwgbGluaywgdGFnc30gPSByZXEuYm9keTtcbiAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkudGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keS5saW5rKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkudGFncyk7XG4gICAgICAgIExpbmsuY3JlYXRlKHtcbiAgICAgICAgICAgIHRpdGxlOiByZXEuYm9keS50aXRsZSxcbiAgICAgICAgICAgIGxpbms6IHJlcS5ib2R5LmxpbmssXG4gICAgICAgICAgICB0YWdzOiByZXEuYm9keS50YWdzXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnMycpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoe1xuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdjb250YWN0IHN1Y2Nlc2Z1bGx5IGNyZWF0ZWQnLFxuICAgICAgICAgIH0pO1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgIH1cbiAgICB9LFxuLyoqXG4gKiBcbiAqL1xuYXN5bmMgZ2V0QWxsTGluayhyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5kZWNvZGVkO1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IExpbmsuZmluZEFsbCh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIHVzZXJJZDogaWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ0dldCBhbGwgTGlua3Mgc3VjY2Vzc2Z1bCdcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICB9XG59LFxuLyoqXG4gKiBcbiAqL1xuYXN5bmMgZWRpdExpbmsocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBsaW5rLCB0YWcgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHsgbGlua0lkIH0gPSByZXEucGFyYW1zO1xuICAgIHRyeXtcbiAgICBhd2FpdCBMaW5rLmZpbmRPbmUoeyB3aGVyZTogeyBpZDogbGlua0lkLCB1c2VySWQ6IHJlcS5kZWNvZGVkLmlkIH0gfSk7XG5cbiAgICBjb25zdCB1cGRhdGVkTGluayA9IGF3YWl0IExpbmsudXBkYXRlKFxuICAgICAgICB7IHRpdGxlLCBsaW5rLCB0YWcgfSwge1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBpZDogbGlua0lkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHtcbiAgICAgICAgICBtZXNzYWdlOiAnU3VjZXNzZnVsbHkgVXBkYXRlZCcsXG4gICAgICAgICAgdXBkYXRlZExpbmtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKTtcbiAgfSBcbiAgfSxcbi8qKlxuICogXG4gKi9cbmFzeW5jIGRlbGV0ZUxpbmsocmVxLCByZXMpIHtcbiAgICAgICAgY29uc3QgeyBsaW5rSWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc2luZ2xlTGluayA9IGF3YWl0IExpbmsuZmluZE9uZSh7IHdoZXJlOiB7IGlkOiBsaW5rSWQgfSB9KTtcbiAgICAgICAgICBpZiAoc2luZ2xlTGluaykge1xuICAgICAgICAgICAgaWYgKHNpbmdsZUxpbmsudXNlcklkID09PSByZXEuZGVjb2RlZC5pZCkge1xuICAgICAgICAgICAgICBzaW5nbGVMaW5rLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAyKS5zZW5kKHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgRGVsZXRlZCcsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnWW91IGRvblxcJ3QgaGF2ZSBwZXJtaXNpb24gdG8gcGVyZm9ybSBzdWNoIGFjdGlvbicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBMaW5rIHdpdGggaWQgLSAke2xpbmtJZH0gbm90IGZvdW5kYCxcbiAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gICAgICAgIH1cbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IExpbmtDb250cjtcbiJdfQ==