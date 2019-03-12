"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.default = {
   /**
   * ispassword valid helper method
   * @param {string} password 
   * @returns {Boolean} True or False
   */
   ispasswordValid: function ispasswordValid(password) {
      return (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
      );
      // if(password.
      //   length > 6) return true;
      // return false;
   }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci92YWxpZGF0aW9ucy9wYXNzd29yZFZhbC5qcyJdLCJuYW1lcyI6WyJpc3Bhc3N3b3JkVmFsaWQiLCJwYXNzd29yZCIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUFlO0FBQ1g7Ozs7O0FBS0ZBLGtCQU5hLDJCQU1HQyxRQU5ILEVBTWE7QUFDeEIsYUFBUSwwQ0FBeUNDLElBQXpDLENBQThDRCxRQUE5QztBQUFSO0FBQ0c7QUFDQTtBQUNBO0FBQ0g7QUFYVyxDIiwiZmlsZSI6InBhc3N3b3JkVmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgKiBpc3Bhc3N3b3JkIHZhbGlkIGhlbHBlciBtZXRob2RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIFxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBvciBGYWxzZVxuICAgKi9cbiAgaXNwYXNzd29yZFZhbGlkKHBhc3N3b3JkKSB7XG4gICAgcmV0dXJuICgvXig/PS4qW0EtWmEtel0pKD89LipcXGQpW0EtWmEtelxcZF17OCx9JC8udGVzdChwYXNzd29yZCkpXG4gICAgICAgLy8gaWYocGFzc3dvcmQuXG4gICAgICAgLy8gICBsZW5ndGggPiA2KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAvLyByZXR1cm4gZmFsc2U7XG4gICB9XG59Il19