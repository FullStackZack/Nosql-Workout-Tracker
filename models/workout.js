var mongoose = require("mongoose");
const opts = { toJSON: { virtuals: true } };

var Schema = mongoose.Schema;
var workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate())
    },
    exercises: {
        type: Array
    }
}, opts)
workoutSchema.virtual('totalDuration').get(function() {
    const exercises = this.exercises
    let count = 0;
    for (var i = 0; i < exercises.length; i++) {
        count = count + exercises[i].duration
    }
    return count;
  });
var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;