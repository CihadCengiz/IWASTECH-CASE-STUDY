module.exports = (sequelize, Sequelize) => {
  const Author = sequelize.define("author", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    authorName: Sequelize.STRING
  });

  return Author;
};