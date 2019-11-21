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
    db.haunted_places.create(req.body).then(function(dbHaunteds) {
      res.json(dbHaunteds);
    });
  });

  // Delete a Haunted Place report by id
  app.delete("/api/haunteds/:id", function(req, res) {
    db.haunted_places
      .destroy({ where: { id: req.params.id } })
      .then(function(dbHaunteds) {
        res.json(dbHaunteds);
      });
  });

  // Get all UFO reports
  app.get("/api/ufos", function(req, res) {
    db.Ufo.findAll({}).then(function(dbUfos) {
      res.json(dbUfos);
    });
  });

  // Create a new UFO report
  app.post("/api/ufos", function(req, res) {
    db.Ufo.create(req.body).then(function(dbUfos) {
      res.json(dbUfos);
    });
  });

  // Delete a UFO report by id
  app.delete("/api/ufos/:id", function(req, res) {
    db.Ufo.destroy({ where: { id: req.params.id } }).then(function(dbUfos) {
      res.json(dbUfos);
    });
  });
};
