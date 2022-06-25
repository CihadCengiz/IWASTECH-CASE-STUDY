const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.author = require('./author.js')(sequelize, Sequelize);
db.book = require('./book.js')(sequelize, Sequelize);
db.category = require('./category.js')(sequelize, Sequelize);
db.publisher = require('./publisher.js')(sequelize, Sequelize);

db.author.hasMany(db.book)
db.publisher.hasMany(db.book)
db.category.hasMany(db.book)
db.book.belongsTo(db.category)
db.book.belongsTo(db.author)
db.book.belongsTo(db.publisher)

module.exports = db;
