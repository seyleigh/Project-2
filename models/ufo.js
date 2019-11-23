module.exports = function(sequelize, DataTypes) {
  var nuforc_reports = sequelize.define("nuforc_reports", {
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    shape: DataTypes.STRING,
    duration: DataTypes.STRING,
    text: DataTypes.TEXT,
    city_latitude: DataTypes.DECIMAL(8, 8),
    city_longitude: DataTypes.DECIMAL(8, 8)
  });
  return nuforc_reports;
};
