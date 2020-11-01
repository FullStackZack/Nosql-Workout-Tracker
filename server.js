const express = require("express");
const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

const html_route = require("./routes/html-routes");
app.use(html_route);
const api_route = require("./routes/api-routes");
app.use(api_route);

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout")

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})