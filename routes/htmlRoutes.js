var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // root route loads index.html page (to prompt login)
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // home route loads home page
  app.get("/home", function(req, res) {
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
