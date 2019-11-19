module.exports = function (sequelize, DataTypes) {
  var Ufo = sequelize.define("Ufo", {
    summary: DataTypes.TEXT,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    date_time: DataTypes.DATE,
    shape: DataTypes.STRING,
    duration: DataTypes.STRING,
    stats: DataTypes.TEXT,
    report_link: DataTypes.STRING,
    text: DataTypes.TEXT,
    posted: DataTypes.DATE,
    city_latitude: DataTypes.DECIMAL(4, 4),
    city_longitude: DataTypes.DECIMAL(4, 4),
    city_location: DataTypes.STRING
  });
  return Ufo;
};