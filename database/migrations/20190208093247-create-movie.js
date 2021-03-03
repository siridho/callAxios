"use strict";
module.exports = {
 up: (queryInterface, Sequelize) => {
  return queryInterface.createTable("movies", {
   id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
   },
   url: {
    type: Sequelize.STRING
   },
   parameters: {
    type: Sequelize.STRING,
    allowNull: false
   },
   created_at: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
   },
   updated_at: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
   }
  });
 },
 down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable("movies");
 }
};
