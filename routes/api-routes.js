const router = require("express").Router();
const db = require("../models")

router.get("/api/workouts", function(req, res) {
   db.Workout.find().then(function(results) {
       res.json(results);
   })
   .catch(err => {
    res.status(400).json(err);
   });
});

router.post("/api/workouts", function(req, res) {
    db.Workout.create(req.body).then(function(results) {
        res.json(results);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", function(req, res) {
    db.Workout.findByIdAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}})
      .then(function(results) {
        res.json(results);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(function(results) {
          res.json(results);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;