'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userCtr = require('../controllers/userCtr');

var _userCtr2 = _interopRequireDefault(_userCtr);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/register', _userCtr2.default.createUser);

router.post('/login', _userCtr2.default.loginUser);

router.post('/logout', _userCtr2.default.logoutUser);

exports.default = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9yb3V0ZXMvdXNlclJvdXRlLmpzIl0sIm5hbWVzIjpbInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJwb3N0IiwiVXNlckNvbnRyIiwiY3JlYXRlVXNlciIsImxvZ2luVXNlciIsImxvZ291dFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVNDLGtCQUFRQyxNQUFSLEVBQWY7O0FBRUFGLE9BQU9HLElBQVAsQ0FBWSxXQUFaLEVBQXlCQyxrQkFBVUMsVUFBbkM7O0FBRUFMLE9BQU9HLElBQVAsQ0FBWSxRQUFaLEVBQXNCQyxrQkFBVUUsU0FBaEM7O0FBRUFOLE9BQU9HLElBQVAsQ0FBWSxTQUFaLEVBQXVCQyxrQkFBVUcsVUFBakM7O2tCQUdlUCxNIiwiZmlsZSI6InVzZXJSb3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyQ29udHIgZnJvbSAnLi4vY29udHJvbGxlcnMvdXNlckN0cic7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLnBvc3QoJy9yZWdpc3RlcicsIFVzZXJDb250ci5jcmVhdGVVc2VyKTtcblxucm91dGVyLnBvc3QoJy9sb2dpbicsIFVzZXJDb250ci5sb2dpblVzZXIpO1xuXG5yb3V0ZXIucG9zdCgnL2xvZ291dCcsIFVzZXJDb250ci5sb2dvdXRVc2VyKTtcblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il19