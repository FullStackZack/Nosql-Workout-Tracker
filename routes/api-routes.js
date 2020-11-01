var router = require("express").Router();
var db = require("../models")

router.get("/api/workouts", function(req, res) {
   db.Workout.find().then(function(results) {
       res.json(results);
   })
})


module.exports = router;