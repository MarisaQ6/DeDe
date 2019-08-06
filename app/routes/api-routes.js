var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all drinks
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM drinks";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a drink
  app.post("/api/new", function(req, res) {
    console.log("Drink Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO drinks (drinks, abv, calories, created_at) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.drinks, req.body.abv, req.body.calories, req.body.created_at], function(err, result) {
      if (err) throw err;
      console.log("Drink Successfully Saved!");
      res.end();
    });
  });
};
