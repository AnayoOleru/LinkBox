'use strict';

module.exports = function (sequelize, DataTypes) {
  var Link = sequelize.define('Link', {
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
  });
  Link.associate = function (models) {
    // associations can be defined here
    Link.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Link;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9tb2RlbHMvbGluay5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VxdWVsaXplIiwiRGF0YVR5cGVzIiwiTGluayIsImRlZmluZSIsInRpdGxlIiwidHlwZSIsIlNUUklORyIsImFsbG93TnVsbCIsImxpbmsiLCJ0YWdzIiwiYXNzb2NpYXRlIiwibW9kZWxzIiwiYmVsb25nc1RvIiwiVXNlciIsImZvcmVpZ25LZXkiLCJvbkRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFDQUEsT0FBT0MsT0FBUCxHQUFpQixVQUFDQyxTQUFELEVBQVlDLFNBQVosRUFBMEI7QUFDekMsTUFBTUMsT0FBT0YsVUFBVUcsTUFBVixDQUFpQixNQUFqQixFQUF5QjtBQUNwQ0MsV0FBTztBQUNMQyxZQUFNSixVQUFVSyxNQURYO0FBRUxDLGlCQUFXO0FBRk4sS0FENkI7QUFLcENDLFVBQU07QUFDSkgsWUFBTUosVUFBVUssTUFEWjtBQUVKQyxpQkFBVztBQUZQLEtBTDhCO0FBU3BDRSxVQUFNO0FBQ0pKLFlBQU1KLFVBQVVLLE1BRFo7QUFFSkMsaUJBQVc7QUFGUDtBQVQ4QixHQUF6QixDQUFiO0FBY0FMLE9BQUtRLFNBQUwsR0FBaUIsVUFBU0MsTUFBVCxFQUFpQjtBQUNoQztBQUNBVCxTQUFLVSxTQUFMLENBQWVELE9BQU9FLElBQXRCLEVBQTRCO0FBQzFCQyxrQkFBWSxRQURjO0FBRTFCQyxnQkFBVTtBQUZnQixLQUE1QjtBQUlELEdBTkQ7QUFPQSxTQUFPYixJQUFQO0FBQ0QsQ0F2QkQiLCJmaWxlIjoibGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBEYXRhVHlwZXMpID0+IHtcbiAgY29uc3QgTGluayA9IHNlcXVlbGl6ZS5kZWZpbmUoJ0xpbmsnLCB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlXG4gICAgfSxcbiAgICBsaW5rOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZVxuICAgIH0sXG4gICAgdGFnczoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2VcbiAgICB9LFxuICB9KTtcbiAgTGluay5hc3NvY2lhdGUgPSBmdW5jdGlvbihtb2RlbHMpIHtcbiAgICAvLyBhc3NvY2lhdGlvbnMgY2FuIGJlIGRlZmluZWQgaGVyZVxuICAgIExpbmsuYmVsb25nc1RvKG1vZGVscy5Vc2VyLCB7XG4gICAgICBmb3JlaWduS2V5OiAndXNlcklkJyxcbiAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBMaW5rO1xufTsiXX0=