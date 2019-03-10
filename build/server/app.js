'use strict';

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
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// app.use('/api/v1/user', userRoute);
// app.use('api/v1/link', linkRoute);

app.listen(port, function () {
  return console.log('LinkBox is running on http://localhost ' + port);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwidXNlIiwiYm9keVBhcnNlciIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNLHdCQUFaO0FBQ0EsSUFBTUMsT0FBT0MsUUFBUUMsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQWpDOztBQUVBSixJQUFJSyxHQUFKLENBQVFDLHFCQUFXQyxJQUFYLEVBQVI7QUFDQVAsSUFBSUssR0FBSixDQUFRQyxxQkFBV0UsVUFBWCxDQUFzQixFQUFFQyxVQUFVLEtBQVosRUFBdEIsQ0FBUjs7QUFFQTtBQUNBOztBQUVBVCxJQUFJVSxNQUFKLENBQVdULElBQVgsRUFBaUI7QUFBQSxTQUFNVSxRQUFRQyxHQUFSLDZDQUFzRFgsSUFBdEQsQ0FBTjtBQUFBLENBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IHVzZXJSb3V0ZSBmcm9tICcuL3JvdXRlcy91c2VyUm91dGUnO1xuaW1wb3J0IGxpbmtSb3V0ZSBmcm9tICcuL3JvdXRlcy9saW5rUm91dGUnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDcwMDA7XG5cbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuXG4vLyBhcHAudXNlKCcvYXBpL3YxL3VzZXInLCB1c2VyUm91dGUpO1xuLy8gYXBwLnVzZSgnYXBpL3YxL2xpbmsnLCBsaW5rUm91dGUpO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IGNvbnNvbGUubG9nKGBMaW5rQm94IGlzIHJ1bm5pbmcgb24gaHR0cDovL2xvY2FsaG9zdCAke3BvcnR9YCkpO1xuXG5cblxuXG5cblxuIl19