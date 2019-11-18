var db = require("../models");

module.exports = function(app) {
<<<<<<< HEAD
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
=======
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
>>>>>>> c7df759a18d5a826e2f1ce894395b2dbc81df71c
    });
  });
};
