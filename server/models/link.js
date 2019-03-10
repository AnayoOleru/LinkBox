
export default (sequelize, DataTypes) => {
  const Link = sequelize.define('link', {
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
  }, {});
  link.associate = function(models) {
    // associations can be defined here
    link.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Link;
};