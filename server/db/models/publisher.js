module.exports = (sequelize, Sequelize) => {
  const Publisher = sequelize.define("publisher", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    publisherName: Sequelize.STRING
  });

  return Publisher;
};