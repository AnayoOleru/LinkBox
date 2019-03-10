'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _userRoute = require('./routes/userRoute');

var _userRoute2 = _interopRequireDefault(_userRoute);

var _linkRoute = require('./routes/linkRoute');

var _linkRoute2 = _interopRequireDefault(_linkRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 7000;

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// app.use('/api/v1/user', userRoute);
// app.use('api/v1/link', linkRoute);

app.get('/api/v1', function (req, res) {
  return res.status(200).send({
    status: 'connection successful',
    message: 'Welcome to LinkBOX!'
  });
});

app.use('/api/v1/link', _linkRoute2.default);
app.use('/api/v1/auth', _userRoute2.default);
//   app.use('/api/v1/users', userRoutes);

app.use('*', function (req, res) {
  res.status(404).json({ message: 'Page Not Found. Please go to /api/v1 to use our api' });
});

app.listen(port, function () {
  return console.log('LinkBox is running on http://localhost ' + port);
});

exports.default = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwidXNlIiwiYm9keVBhcnNlciIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJnZXQiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImxpbmtSb3V0ZSIsInVzZXJSb3V0ZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNLHdCQUFaO0FBQ0EsSUFBTUMsT0FBT0MsUUFBUUMsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQWpDOztBQUVBSixJQUFJSyxHQUFKLENBQVFDLHFCQUFXQyxJQUFYLEVBQVI7QUFDQVAsSUFBSUssR0FBSixDQUFRQyxxQkFBV0UsVUFBWCxDQUFzQixFQUFFQyxVQUFVLElBQVosRUFBdEIsQ0FBUjs7QUFFQTtBQUNBOztBQUVBVCxJQUFJVSxHQUFKLENBQVEsU0FBUixFQUFtQixVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSxTQUFjQSxJQUFJQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbERELFlBQVEsdUJBRDBDO0FBRWxERSxhQUFTO0FBRnlDLEdBQXJCLENBQWQ7QUFBQSxDQUFuQjs7QUFLRWYsSUFBSUssR0FBSixDQUFRLGNBQVIsRUFBd0JXLG1CQUF4QjtBQUNBaEIsSUFBSUssR0FBSixDQUFRLGNBQVIsRUFBd0JZLG1CQUF4QjtBQUNGOztBQUVFakIsSUFBSUssR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFDTSxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN6QkEsTUFBSUMsTUFBSixDQUFXLEdBQVgsRUFBZ0JOLElBQWhCLENBQXFCLEVBQUVRLFNBQVMscURBQVgsRUFBckI7QUFDRCxDQUZEOztBQUlGZixJQUFJa0IsTUFBSixDQUFXakIsSUFBWCxFQUFpQjtBQUFBLFNBQU1rQixRQUFRQyxHQUFSLDZDQUFzRG5CLElBQXRELENBQU47QUFBQSxDQUFqQjs7a0JBRWVELEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgdXNlclJvdXRlIGZyb20gJy4vcm91dGVzL3VzZXJSb3V0ZSc7XG5pbXBvcnQgbGlua1JvdXRlIGZyb20gJy4vcm91dGVzL2xpbmtSb3V0ZSc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNzAwMDtcblxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcblxuLy8gYXBwLnVzZSgnL2FwaS92MS91c2VyJywgdXNlclJvdXRlKTtcbi8vIGFwcC51c2UoJ2FwaS92MS9saW5rJywgbGlua1JvdXRlKTtcblxuYXBwLmdldCgnL2FwaS92MScsIChyZXEsIHJlcykgPT4gcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgIHN0YXR1czogJ2Nvbm5lY3Rpb24gc3VjY2Vzc2Z1bCcsXG4gICAgbWVzc2FnZTogJ1dlbGNvbWUgdG8gTGlua0JPWCEnLFxuICB9KSk7XG4gIFxuICBhcHAudXNlKCcvYXBpL3YxL2xpbmsnLCBsaW5rUm91dGUpO1xuICBhcHAudXNlKCcvYXBpL3YxL2F1dGgnLCB1c2VyUm91dGUpO1xuLy8gICBhcHAudXNlKCcvYXBpL3YxL3VzZXJzJywgdXNlclJvdXRlcyk7XG4gIFxuICBhcHAudXNlKCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZXNzYWdlOiAnUGFnZSBOb3QgRm91bmQuIFBsZWFzZSBnbyB0byAvYXBpL3YxIHRvIHVzZSBvdXIgYXBpJyB9KTtcbiAgfSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coYExpbmtCb3ggaXMgcnVubmluZyBvbiBodHRwOi8vbG9jYWxob3N0ICR7cG9ydH1gKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcblxuXG5cblxuXG5cbiJdfQ==