module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false
        },
        profession:{
          type: Sequelize.STRING,
          allowNull: false
        },
        password:{
          type: Sequelize.STRING,
          allowNull: false
        },
        confirmPassword:{
          type:Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Users');
    }
  };
  