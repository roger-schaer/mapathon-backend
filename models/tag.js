"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      color: DataTypes.STRING,
      group: DataTypes.INTEGER,
      creatorId: DataTypes.STRING
    },
    {}
  );
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.belongsToMany(models.POI, { through: "POITag" });
  };
  return Tag;
};
