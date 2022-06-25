module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bookName: Sequelize.STRING
  });

  return Book;
};