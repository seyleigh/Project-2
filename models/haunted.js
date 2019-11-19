module.exports = function (sequelize, DataTypes) {
    var Haunted = sequelize.define("Haunted", {
        city: DataTypes.STRING,
        country: DataTypes.STRING,
        description: DataTypes.TEXT,
        location: DataTypes.STRING,
        state: DataTypes.STRING,
        state_abbrev: DataTypes.STRING,
        longitude: DataTypes.DECIMAL(4, 4),
        latitude: DataTypes.DECIMAL(4, 4),
        location_2: DataTypes.STRING,
        city_longitude: DataTypes.DECIMAL(4, 4),
        city_latitude: DataTypes.DECIMAL(4, 4),
        city_location: DataTypes.STRING
    });
    return Haunted;
};