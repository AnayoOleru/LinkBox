'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var inputs = {
  /**
  * iswhitespace helper method
  * @param {string} email
  * @param {string} password
  * @returns {Boolean} True or False 
  */
  isWhiteSpace: function isWhiteSpace(email, password) {
    if (email.includes(' ')) return false;
    if (password.includes(' ')) return false;
    return true;
  },

  /**
  * @description allow only alphabets and spaces
  * @param {string} name
  * @returns boolean
  */
  isName: function isName(name) {
    return (/^[A-Za-z\s]+$/.test(name)
    );
  },

  /**
  * @description check if string is digit
  * @param {string} string
  * @returns boolean
  */
  isURL: function isURL(string) {
    return (/https?:\/\/[^\s]+/.test(string)
    );
  }
};
exports.default = inputs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci92YWxpZGF0aW9ucy9pbnB1dFZhbC5qcyJdLCJuYW1lcyI6WyJpbnB1dHMiLCJpc1doaXRlU3BhY2UiLCJlbWFpbCIsInBhc3N3b3JkIiwiaW5jbHVkZXMiLCJpc05hbWUiLCJuYW1lIiwidGVzdCIsImlzVVJMIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLFNBQVM7QUFDWjs7Ozs7O0FBTURDLGNBUGEsd0JBT0FDLEtBUEEsRUFPT0MsUUFQUCxFQU9pQjtBQUM1QixRQUFHRCxNQUFNRSxRQUFOLENBQWUsR0FBZixDQUFILEVBQXdCLE9BQU8sS0FBUDtBQUN4QixRQUFHRCxTQUFTQyxRQUFULENBQWtCLEdBQWxCLENBQUgsRUFBMkIsT0FBTyxLQUFQO0FBQzNCLFdBQU8sSUFBUDtBQUNILEdBWGM7O0FBWVY7Ozs7O0FBS0hDLFFBakJhLGtCQWlCTkMsSUFqQk0sRUFpQkE7QUFDWCxXQUFRLGlCQUFnQkMsSUFBaEIsQ0FBcUJELElBQXJCO0FBQVI7QUFDQSxHQW5CVzs7QUFvQlg7Ozs7O0FBS0ZFLE9BekJhLGlCQXlCUEMsTUF6Qk8sRUF5QkM7QUFDWixXQUFRLHFCQUFvQkYsSUFBcEIsQ0FBeUJFLE1BQXpCO0FBQVI7QUFDRDtBQTNCWSxDQUFmO2tCQTZCZVQsTSIsImZpbGUiOiJpbnB1dFZhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlucHV0cyA9IHtcbiAgIC8qKlxuICAgKiBpc3doaXRlc3BhY2UgaGVscGVyIG1ldGhvZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIG9yIEZhbHNlIFxuICAgKi9cbiAgaXNXaGl0ZVNwYWNlKGVtYWlsLCBwYXNzd29yZCkge1xuICAgIGlmKGVtYWlsLmluY2x1ZGVzKCcgJykpIHJldHVybiBmYWxzZTtcbiAgICBpZihwYXNzd29yZC5pbmNsdWRlcygnICcpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG59LFxuICAgICAvKipcblx0ICogQGRlc2NyaXB0aW9uIGFsbG93IG9ubHkgYWxwaGFiZXRzIGFuZCBzcGFjZXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0ICogQHJldHVybnMgYm9vbGVhblxuXHQgKi9cbiAgaXNOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gKC9eW0EtWmEtelxcc10rJC8udGVzdChuYW1lKSk7XG4gICB9LFxuICAgIC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gY2hlY2sgaWYgc3RyaW5nIGlzIGRpZ2l0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcblx0ICogQHJldHVybnMgYm9vbGVhblxuXHQgKi9cbiAgaXNVUkwoc3RyaW5nKSB7XG4gICAgcmV0dXJuICgvaHR0cHM/OlxcL1xcL1teXFxzXSsvLnRlc3Qoc3RyaW5nKSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGlucHV0czsiXX0=