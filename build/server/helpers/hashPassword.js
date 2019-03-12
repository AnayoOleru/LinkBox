'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashPassword = {
  /**
  * Hash Password Method
  * @param {string} password
  * @returns {string} returns hashed password
  */
  hashPassword: function hashPassword(password) {
    return _bcryptjs2.default.hashSync(password, _bcryptjs2.default.genSaltSync(8));
  },

  /**
   * comparePassword
   * @param {string} hashPassword 
   * @param {string} password 
   * @returns {Boolean} return True or False
   */
  comparePassword: function comparePassword(hashPassword, password) {
    return _bcryptjs2.default.compareSync(password, hashPassword);
  }
};
exports.default = HashPassword;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9oZWxwZXJzL2hhc2hQYXNzd29yZC5qcyJdLCJuYW1lcyI6WyJIYXNoUGFzc3dvcmQiLCJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZCIsImJjcnlwdCIsImhhc2hTeW5jIiwiZ2VuU2FsdFN5bmMiLCJjb21wYXJlUGFzc3dvcmQiLCJjb21wYXJlU3luYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLGVBQWU7QUFDakI7Ozs7O0FBS0ZDLGNBTm1CLHdCQU1OQyxRQU5NLEVBTUk7QUFDckIsV0FBT0MsbUJBQU9DLFFBQVAsQ0FBZ0JGLFFBQWhCLEVBQTBCQyxtQkFBT0UsV0FBUCxDQUFtQixDQUFuQixDQUExQixDQUFQO0FBQ0QsR0FSa0I7O0FBU25COzs7Ozs7QUFNQUMsaUJBZm1CLDJCQWVITCxZQWZHLEVBZVdDLFFBZlgsRUFlcUI7QUFDdEMsV0FBT0MsbUJBQU9JLFdBQVAsQ0FBbUJMLFFBQW5CLEVBQTZCRCxZQUE3QixDQUFQO0FBQ0Q7QUFqQmtCLENBQXJCO2tCQW1CZUQsWSIsImZpbGUiOiJoYXNoUGFzc3dvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcblxuY29uc3QgSGFzaFBhc3N3b3JkID0ge1xuICAgIC8qKlxuICAgKiBIYXNoIFBhc3N3b3JkIE1ldGhvZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmRcbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBoYXNoZWQgcGFzc3dvcmRcbiAgICovXG4gIGhhc2hQYXNzd29yZChwYXNzd29yZCkge1xuICAgIHJldHVybiBiY3J5cHQuaGFzaFN5bmMocGFzc3dvcmQsIGJjcnlwdC5nZW5TYWx0U3luYyg4KSlcbiAgfSxcbiAgLyoqXG4gICAqIGNvbXBhcmVQYXNzd29yZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFBhc3N3b3JkIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSByZXR1cm4gVHJ1ZSBvciBGYWxzZVxuICAgKi9cbiAgY29tcGFyZVBhc3N3b3JkKGhhc2hQYXNzd29yZCwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCBoYXNoUGFzc3dvcmQpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBIYXNoUGFzc3dvcmQ7Il19