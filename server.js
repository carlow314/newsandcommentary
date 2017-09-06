//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var path = require("path");
// Sets up the Express App;
var PORT = process.env.PORT || 8000;
var app = express()

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Static directory
app.use(express.static("public/"));
// Set Handlebars
app.engine("handlebars", exphbs({
  defaultLayout: "main",
  partialsDir: __dirname + '/views/partials/'
}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

// Routes
var route = require("./routes/htmlroutes.js")(app);


  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });