var db = require("../models");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/index", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // root route loads index.html page (to prompt login)
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  // home route loads home page
  app.get("/home", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // ufos route loads ufos.html page
  app.get("/ufos", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ufos.html"));
  });

  // hauntings route loads hauntings.html page
  app.get("/hauntings", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/hauntings.html"));
  });

  // maps route loads search-ufo-haunts.html page
  app.get("/maps", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search-ufo-haunts.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
};
