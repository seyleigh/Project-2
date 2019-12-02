DROP DATABASE IF EXISTS cryptids_db;
CREATE DATABASE cryptids_db;

USE cryptids_db;
ALTER TABLE nuforc_reports MODIFY city_latitude BIGINT;
ALTER TABLE nuforc_reports MODIFY city_longitude BIGINT;


