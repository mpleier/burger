var burger = require('../models/burger.js');
var express = require('express');

var router = express.Router();


router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne([
    req.body.burger_name
  ], [
    req.body
  ]);
    res.redirect("/");
});

router.post("/:id", function(req, res) {
  var condition =  req.params.id;

  console.log("condition", condition);

  burger.updateOne(condition, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
