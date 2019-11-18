module.exports = function (sequelize, DataTypes) {
    var Bigfoot = sequelize.define("Bigfoot", {
        observed: DataTypes.TEXT,
        location_details: DataTypes.TEXT,
        county: DataTypes.STRING,
        state: DataTypes.STRING,
        season: DataTypes.STRING,
        title: DataTypes.STRING,
        latitude: DataTypes.DECIMAL(4, 4),
        longitude: DataTypes.DECIMAL(4, 4),
        location: DataTypes.STRING,
        date: DataTypes.DATE,
        number: DataTypes.DECIMAL(10, 2),
        classification: DataTypes.STRING,
        geohash: DataTypes.STRING,
        temperature_high: DataTypes.DECIMAL(3, 3),
        temperature_mid: DataTypes.DECIMAL(3, 3),
        temperature_low: DataTypes.DECIMAL(3, 3),
        dew_point: DataTypes.DECIMAL(2, 2),
        humidity: DataTypes.DECIMAL(2, 2),
        cloud_cover: DataTypes.DECIMAL(2, 2),
        moon_phase: DataTypes.DECIMAL(2, 2),
        precip_intensity: DataTypes.DECIMAL(2, 3),
        precip_probability: DataTypes.DECIMAL(2, 2),
        precip_type: DataTypes.STRING,
        pressure: DataTypes.DECIMAL(4, 2),
        summary: DataTypes.TEXT,
        uv_index: DataTypes.INT,
        visibility: DataTypes.DECIMAL(2, 2),
        wind_bearing: DataTypes.INT,
        wind_speed: DataTypes.DECIMAL(3, 2)
    });
    return Bigfoot;
};