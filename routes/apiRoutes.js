var db = require("../models");

module.exports = function(app) {
  // Get all Haunted Place reports
  app.get("/api/haunteds", function(req, res) {
    db.haunted_places.findAll({}).then(function(dbHaunteds) {
      res.json(dbHaunteds);
    });
  });

  // Create a new Haunted Place report
  app.post("/api/haunteds", function(req, res) {
    console.log(req.body);
    db.haunted_places
      .create({
        city: req.body.city,
        description: req.body.description,
        location: req.body.location,
        state_abbrev: req.body.state_abbrev,
        longitude: req.body.longitude,
        latitude: req.body.latitude
      })
      .then(function(dbHaunteds) {
        res.json(dbHaunteds);
      });
  });

  // Delete a Haunted Place report by id
  app.delete("/api/haunteds/:id", function(req, res) {
    db.haunted_places
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbHaunteds) {
        res.json(dbHaunteds);
      });
  });

  // Get all UFO reports
  app.get("/api/ufos", function(req, res) {
    db.nuforc_reports.findAll({}).then(function(dbUfos) {
      res.json(dbUfos);
    });
  });

  // Create a new UFO report
  app.post("/api/ufos", function(req, res) {
    db.nuforc_reports
      .create({
        city: req.body.city,
        state: req.body.state,
        shape: req.body.shape,
        duration: req.body.duration,
        text: req.body.stats,
        city_latitude: req.body.city_latitude,
        city_longitude: req.body.city_longitude
      })
      .then(function(dbUfos) {
        res.json(dbUfos);
      });
  });

  // Delete a UFO report by id
  app.delete("/api/ufos/:id", function(req, res) {
    db.nuforc_reports
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbUfos) {
        res.json(dbUfos);
      });
  });
};
