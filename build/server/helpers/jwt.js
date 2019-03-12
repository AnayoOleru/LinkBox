'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9oZWxwZXJzL2p3dC5qcyJdLCJuYW1lcyI6WyJkb3RlbnYiLCJjb25maWciLCJUb2tlbiIsImdlbmVyYXRlVG9rZW4iLCJ1c2VyVG9rZW4iLCJhcHBUb2tlbiIsImp3dCIsInNpZ24iLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUIiwiZXhwaXJlc0luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQUEsaUJBQU9DLE1BQVA7O0FBRUEsSUFBTUMsUUFBUTtBQUNWOzs7OztBQUtGQyxlQU5ZLHlCQU1FQyxTQU5GLEVBTWE7QUFDdkIsUUFBTUMsV0FBV0MsdUJBQUlDLElBQUosQ0FDZkgsU0FEZSxFQUVmSSxRQUFRQyxHQUFSLENBQVlDLE1BRkcsRUFFSyxFQUFFQyxXQUFXLElBQWIsRUFGTCxDQUFqQjtBQUlBLFdBQU9OLFFBQVA7QUFDRDtBQVpXLENBQWQ7a0JBY2VILEsiLCJmaWxlIjoiand0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IFRva2VuID0ge1xuICAgIC8qKlxuICAgKiBHbmVyYXRlIFRva2VuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWtlcyBldmVyeSB1c2VyVG9rZW4gcGFzc2VkIGluIHRvIGl0XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRva2VuXG4gICAqL1xuICBnZW5lcmF0ZVRva2VuKHVzZXJUb2tlbikge1xuICAgIGNvbnN0IGFwcFRva2VuID0gand0LnNpZ24oXG4gICAgICB1c2VyVG9rZW4sXG4gICAgICBwcm9jZXNzLmVudi5TRUNSRVQsIHsgZXhwaXJlc0luOiAnMWQnIH1cbiAgICApO1xuICAgIHJldHVybiBhcHBUb2tlbjtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVG9rZW47Il19