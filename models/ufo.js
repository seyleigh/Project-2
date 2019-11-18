module.exports = function(sequelize, DataTypes) {
  var Ufo = sequelize.define("Ufo", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Ufo;
};
