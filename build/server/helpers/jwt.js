'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var Token = {
  /**
  * Gnerate Token
  * @param {string} takes every userToken passed in to it
  * @returns {string} token
  */
  generateToken: function generateToken(userToken) {
    var appToken = _jsonwebtoken2.default.sign(userToken, process.env.SECRET, { expiresIn: '1d' });
    return appToken;
  }
};
exports.default = Token;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9oZWxwZXJzL2p3dC5qcyJdLCJuYW1lcyI6WyJkb3RlbnYiLCJjb25maWciLCJUb2tlbiIsImdlbmVyYXRlVG9rZW4iLCJ1c2VyVG9rZW4iLCJhcHBUb2tlbiIsImp3dCIsInNpZ24iLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUIiwiZXhwaXJlc0luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxpQkFBT0MsTUFBUDs7QUFFQSxJQUFNQyxRQUFRO0FBQ1Y7Ozs7O0FBS0ZDLGVBTlkseUJBTUVDLFNBTkYsRUFNYTtBQUN2QixRQUFNQyxXQUFXQyx1QkFBSUMsSUFBSixDQUNmSCxTQURlLEVBRWZJLFFBQVFDLEdBQVIsQ0FBWUMsTUFGRyxFQUVLLEVBQUVDLFdBQVcsSUFBYixFQUZMLENBQWpCO0FBSUEsV0FBT04sUUFBUDtBQUNEO0FBWlcsQ0FBZDtrQkFjZUgsSyIsImZpbGUiOiJqd3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcblxuZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdCBUb2tlbiA9IHtcbiAgICAvKipcbiAgICogR25lcmF0ZSBUb2tlblxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFrZXMgZXZlcnkgdXNlclRva2VuIHBhc3NlZCBpbiB0byBpdFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0b2tlblxuICAgKi9cbiAgZ2VuZXJhdGVUb2tlbih1c2VyVG9rZW4pIHtcbiAgICBjb25zdCBhcHBUb2tlbiA9IGp3dC5zaWduKFxuICAgICAgdXNlclRva2VuLFxuICAgICAgcHJvY2Vzcy5lbnYuU0VDUkVULCB7IGV4cGlyZXNJbjogJzFkJyB9XG4gICAgKTtcbiAgICByZXR1cm4gYXBwVG9rZW47XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRva2VuOyJdfQ==