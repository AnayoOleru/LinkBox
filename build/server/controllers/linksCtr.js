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
            var _req$body, title, link, tag;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            console.log('reached');
                            _context.prev = 1;
                            _req$body = req.body, title = _req$body.title, link = _req$body.link, tag = _req$body.tag;

                            console.log(req.body.title);
                            console.log(req.body.link);
                            console.log(req.body.tags);
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

                        case 11:
                            _context.prev = 11;
                            _context.t0 = _context['catch'](1);

                            res.status(400).send(_context.t0);

                        case 14:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[1, 11]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9jb250cm9sbGVycy9saW5rc0N0ci5qcyJdLCJuYW1lcyI6WyJMaW5rIiwibW9kZWxzIiwiTGlua0NvbnRyIiwiY3JlYXRlTGluayIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwidGl0bGUiLCJsaW5rIiwidGFnIiwidGFncyIsImNyZWF0ZSIsInN0YXR1cyIsInNlbmQiLCJzdWNjZXNzIiwibWVzc2FnZSIsImdldEFsbExpbmsiLCJpZCIsImRlY29kZWQiLCJmaW5kQWxsIiwid2hlcmUiLCJ1c2VySWQiLCJlZGl0TGluayIsImxpbmtJZCIsInBhcmFtcyIsImZpbmRPbmUiLCJ1cGRhdGUiLCJ1cGRhdGVkTGluayIsImRlbGV0ZUxpbmsiLCJzaW5nbGVMaW5rIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQ0E7O0lBRVFBLEksR0FBU0MsZ0IsQ0FBVEQsSTs7O0FBRVIsSUFBTUUsWUFBWTtBQUNsQjs7O0FBR01DLGNBSlk7QUFBQSw2R0FJREMsR0FKQyxFQUlJQyxHQUpKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLZEMsb0NBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBTGM7QUFBQSx3Q0FPaUJILElBQUlJLElBUHJCLEVBT0hDLEtBUEcsYUFPSEEsS0FQRyxFQU9JQyxJQVBKLGFBT0lBLElBUEosRUFPVUMsR0FQVixhQU9VQSxHQVBWOztBQVFWTCxvQ0FBUUMsR0FBUixDQUFZSCxJQUFJSSxJQUFKLENBQVNDLEtBQXJCO0FBQ0FILG9DQUFRQyxHQUFSLENBQVlILElBQUlJLElBQUosQ0FBU0UsSUFBckI7QUFDQUosb0NBQVFDLEdBQVIsQ0FBWUgsSUFBSUksSUFBSixDQUFTSSxJQUFyQjtBQUNBWixpQ0FBS2EsTUFBTCxDQUFZO0FBQ1JKLDRDQURRO0FBRVJDLDBDQUZRO0FBR1JDO0FBSFEsNkJBQVo7QUFLQUwsb0NBQVFDLEdBQVIsQ0FBWSxHQUFaO0FBaEJV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QUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ3hCRSx5Q0FBUztBQURlLDZCQUFyQixDQTlFSDs7QUFBQTtBQUFBLDhEQWtGQ1osSUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ3hCRSx5Q0FBUztBQURlLDZCQUFyQixDQWxGRDs7QUFBQTtBQUFBLDhEQXNGRFosSUFBSVMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCRSw2REFBMkJRLE1BQTNCO0FBRDBCLDZCQUFyQixDQXRGQzs7QUFBQTtBQUFBO0FBQUE7O0FBMEZOcEIsZ0NBQUlTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQjs7QUExRk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDQUFsQjtrQkE4RmViLFMiLCJmaWxlIjoibGlua3NDdHIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kZWxzIGZyb20gJy4uL21vZGVscyc7XG4vLyBpbXBvcnQgTGluayBmcm9tICcuLi9tb2RlbHMvbGluayc7XG5cbmNvbnN0IHsgTGluayB9ID0gbW9kZWxzO1xuXG5jb25zdCBMaW5rQ29udHIgPSB7XG4vKipcbiAqIFxuICovXG5hc3luYyBjcmVhdGVMaW5rKHJlcSwgcmVzKSB7XG4gICAgY29uc29sZS5sb2coJ3JlYWNoZWQnKTtcbiAgICB0cnl7XG4gICAgICAgY29uc3QgeyB0aXRsZSwgbGluaywgdGFnfSA9IHJlcS5ib2R5O1xuICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keS50aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5LmxpbmspO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keS50YWdzKTtcbiAgICAgICAgTGluay5jcmVhdGUoe1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBsaW5rLFxuICAgICAgICAgICAgdGFnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnMycpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLnNlbmQoe1xuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGAke3JlcS5ib2R5LnRpdGxlfSBzdWNjZXNmdWxseSBjcmVhdGVkYCxcbiAgICAgICAgICB9KTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycm9yKTtcbiAgICB9XG4gICAgfSxcbi8qKlxuICogXG4gKi9cbmFzeW5jIGdldEFsbExpbmsocmVxLCByZXMpIHtcbiAgICBjb25zdCB7IGlkIH0gPSByZXEuZGVjb2RlZDtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBMaW5rLmZpbmRBbGwoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VySWQ6IGlkXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdHZXQgYWxsIExpbmtzIHN1Y2Nlc3NmdWwnXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgICAgfVxufSxcbi8qKlxuICogXG4gKi9cbmFzeW5jIGVkaXRMaW5rKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgbGluaywgdGFnIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCB7IGxpbmtJZCB9ID0gcmVxLnBhcmFtcztcbiAgICB0cnl7XG4gICAgYXdhaXQgTGluay5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IGxpbmtJZCwgdXNlcklkOiByZXEuZGVjb2RlZC5pZCB9IH0pO1xuXG4gICAgY29uc3QgdXBkYXRlZExpbmsgPSBhd2FpdCBMaW5rLnVwZGF0ZShcbiAgICAgICAgeyB0aXRsZSwgbGluaywgdGFnIH0sIHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgaWQ6IGxpbmtJZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuc2VuZCh7XG4gICAgICAgICAgbWVzc2FnZTogJ1N1Y2Vzc2Z1bGx5IFVwZGF0ZWQnLFxuICAgICAgICAgIHVwZGF0ZWRMaW5rXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnJvcik7XG4gIH0gXG4gIH0sXG4vKipcbiAqIFxuICovXG5hc3luYyBkZWxldGVMaW5rKHJlcSwgcmVzKSB7XG4gICAgICAgIGNvbnN0IHsgbGlua0lkIH0gPSByZXEucGFyYW1zO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNpbmdsZUxpbmsgPSBhd2FpdCBMaW5rLmZpbmRPbmUoeyB3aGVyZTogeyBpZDogbGlua0lkIH0gfSk7XG4gICAgICAgICAgaWYgKHNpbmdsZUxpbmspIHtcbiAgICAgICAgICAgIGlmIChzaW5nbGVMaW5rLnVzZXJJZCA9PT0gcmVxLmRlY29kZWQuaWQpIHtcbiAgICAgICAgICAgICAgc2luZ2xlTGluay5kZXN0cm95KCk7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMikuc2VuZCh7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2Vzc2Z1bGx5IERlbGV0ZWQnLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1lvdSBkb25cXCd0IGhhdmUgcGVybWlzaW9uIHRvIHBlcmZvcm0gc3VjaCBhY3Rpb24nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBgTGluayB3aXRoIGlkIC0gJHtsaW5rSWR9IG5vdCBmb3VuZGAsXG4gICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBMaW5rQ29udHI7XG4iXX0=