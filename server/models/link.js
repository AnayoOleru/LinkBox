
module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
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
    },
  });
  Link.associate = function(models) {
    // associations can be defined here
    Link.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Link;
};