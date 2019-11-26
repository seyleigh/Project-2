var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // Get all Haunted Place reports
  app.get("/api/haunteds", function(req, res) {
    db.haunted_places.findAll({}).then(function(dbHaunteds) {
      res.json(dbHaunteds);
    });
  });

  // Get location data for Haunted Places map
  app.get("/api/haunteds", function(req, res) {
    db.haunted_places
      .findAll({
        attributes: ["latitude", "longitude"]
      })
      .then(function(dbUfos) {
        res.json(dbUfos);
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

  // Get location data for UFO map
  app.get("/api/ufos", function(req, res) {
    db.nuforc_reports
      .findAll({
        attributes: ["city_latitude", "city_longitude"]
      })
      .then(function(dbUfos) {
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
