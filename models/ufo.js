module.exports = function(sequelize, DataTypes) {
  var nuforc_reports = sequelize.define("nuforc_reports", {
    summary: DataTypes.TEXT,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    shape: DataTypes.STRING,
    duration: DataTypes.STRING,
    stats: DataTypes.TEXT,
    text: DataTypes.TEXT,
    city_latitude: DataTypes.DECIMAL(4, 4),
    city_longitude: DataTypes.DECIMAL(4, 4)
  });
  return nuforc_reports;
};

