'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    confirmPassword: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  user.associate = function (models) {
    // associations can be defined here
  };
  return user;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvdXNlci5qcyJdLCJuYW1lcyI6WyJzZXF1ZWxpemUiLCJEYXRhVHlwZXMiLCJ1c2VyIiwiZGVmaW5lIiwidXNlcm5hbWUiLCJ0eXBlIiwiU1RSSU5HIiwiYWxsb3dOdWxsIiwicHJvZmVzc2lvbiIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiYXNzb2NpYXRlIiwibW9kZWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWdCLFVBQUNBLFNBQUQsRUFBWUMsU0FBWixFQUEwQjtBQUN4QyxNQUFNQyxPQUFPRixVQUFVRyxNQUFWLENBQWlCLE1BQWpCLEVBQXlCO0FBQ3BDQyxjQUFVO0FBQ1JDLFlBQU1KLFVBQVVLLE1BRFI7QUFFUkMsaUJBQVc7QUFGSCxLQUQwQjtBQUtwQ0MsZ0JBQVc7QUFDVEgsWUFBTUosVUFBVUssTUFEUDtBQUVUQyxpQkFBVztBQUZGLEtBTHlCO0FBU3BDRSxjQUFTO0FBQ1BKLFlBQU1KLFVBQVVLLE1BRFQ7QUFFUEMsaUJBQVc7QUFGSixLQVQyQjtBQWFwQ0cscUJBQWdCO0FBQ2RMLFlBQUtKLFVBQVVLLE1BREQ7QUFFZEMsaUJBQVc7QUFGRztBQWJvQixHQUF6QixFQWlCVixFQWpCVSxDQUFiO0FBa0JBTCxPQUFLUyxTQUFMLEdBQWlCLFVBQVNDLE1BQVQsRUFBaUI7QUFDaEM7QUFDRCxHQUZEO0FBR0EsU0FBT1YsSUFBUDtBQUNELEMiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBleHBvcnQgZGVmYXVsdCAoc2VxdWVsaXplLCBEYXRhVHlwZXMpID0+IHtcbiAgY29uc3QgdXNlciA9IHNlcXVlbGl6ZS5kZWZpbmUoJ3VzZXInLCB7XG4gICAgdXNlcm5hbWU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBwcm9mZXNzaW9uOntcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBwYXNzd29yZDp7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgY29uZmlybVBhc3N3b3JkOntcbiAgICAgIHR5cGU6RGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICB9LCB7fSk7XG4gIHVzZXIuYXNzb2NpYXRlID0gZnVuY3Rpb24obW9kZWxzKSB7XG4gICAgLy8gYXNzb2NpYXRpb25zIGNhbiBiZSBkZWZpbmVkIGhlcmVcbiAgfTtcbiAgcmV0dXJuIHVzZXI7XG59OyJdfQ==