'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var Link = sequelize.define('link', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  link.associate = function (models) {
    // associations can be defined here
    link.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Link;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvbGluay5qcyJdLCJuYW1lcyI6WyJzZXF1ZWxpemUiLCJEYXRhVHlwZXMiLCJMaW5rIiwiZGVmaW5lIiwidGl0bGUiLCJ0eXBlIiwiU1RSSU5HIiwiYWxsb3dOdWxsIiwibGluayIsInRhZ3MiLCJhc3NvY2lhdGUiLCJtb2RlbHMiLCJiZWxvbmdzVG8iLCJ1c2VyIiwiZm9yZWlnbktleSIsIm9uRGVsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQ2UsVUFBQ0EsU0FBRCxFQUFZQyxTQUFaLEVBQTBCO0FBQ3ZDLE1BQU1DLE9BQU9GLFVBQVVHLE1BQVYsQ0FBaUIsTUFBakIsRUFBeUI7QUFDcENDLFdBQU87QUFDTEMsWUFBTUosVUFBVUssTUFEWDtBQUVMQyxpQkFBVztBQUZOLEtBRDZCO0FBS3BDQyxVQUFNO0FBQ0pILFlBQU1KLFVBQVVLLE1BRFo7QUFFSkMsaUJBQVc7QUFGUCxLQUw4QjtBQVNwQ0UsVUFBTTtBQUNKSixZQUFNSixVQUFVSyxNQURaO0FBRUpDLGlCQUFXO0FBRlA7QUFUOEIsR0FBekIsRUFhVixFQWJVLENBQWI7QUFjQUMsT0FBS0UsU0FBTCxHQUFpQixVQUFTQyxNQUFULEVBQWlCO0FBQ2hDO0FBQ0FILFNBQUtJLFNBQUwsQ0FBZUQsT0FBT0UsSUFBdEIsRUFBNEI7QUFDMUJDLGtCQUFZLFFBRGM7QUFFMUJDLGdCQUFVO0FBRmdCLEtBQTVCO0FBSUQsR0FORDtBQU9BLFNBQU9iLElBQVA7QUFDRCxDIiwiZmlsZSI6ImxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IChzZXF1ZWxpemUsIERhdGFUeXBlcykgPT4ge1xuICBjb25zdCBMaW5rID0gc2VxdWVsaXplLmRlZmluZSgnbGluaycsIHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICAgIGxpbms6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICB0YWdzOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gIH0sIHt9KTtcbiAgbGluay5hc3NvY2lhdGUgPSBmdW5jdGlvbihtb2RlbHMpIHtcbiAgICAvLyBhc3NvY2lhdGlvbnMgY2FuIGJlIGRlZmluZWQgaGVyZVxuICAgIGxpbmsuYmVsb25nc1RvKG1vZGVscy51c2VyLCB7XG4gICAgICBmb3JlaWduS2V5OiAndXNlcklkJyxcbiAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBMaW5rO1xufTsiXX0=