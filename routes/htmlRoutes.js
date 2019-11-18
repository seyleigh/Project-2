var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
<<<<<<< HEAD
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
=======
    db.Example.findAll({}).then(function(dbUfos) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbUfos
>>>>>>> c7df759a18d5a826e2f1ce894395b2dbc81df71c
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
