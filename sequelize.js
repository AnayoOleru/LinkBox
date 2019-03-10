import path from 'path';
// specifying paths required for sequelize
export default {
    // holds db config settings and authentication
  "config": path.resolve('./server/config', 'config.json'),
//   holds application models 
  "models-path": path.resolve('./server/models'),
//   will holds seed data(will not be used in this tutorial)
  "seeders-path": path.resolve('./server/seeders'),
//   will hold our application migrations
  "migrations-path": path.resolve('./server/migrations')
};

