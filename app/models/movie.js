"use strict";
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define(
    "movie",
    {
      url: DataTypes.STRING,
      parameters: DataTypes.STRING,
      createdAt: {
        field:"created_at",
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW,
      },
      updatedAt: {
        field:'updated_at',
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW,
      },
    },
    {
      freezeTableName: true,
      tableName: "movies",
    }
  );

  movie.associate = function (models) {
    // associations can be defined here
  };

  return movie;
};
