// === REQUIRED NPM PKGS === //
var express = require ("express");
var bodyParser = require("body-parser");

// === SERVER PORT SETUP === //

var PORT = process.env.PORT || 8080;

var app = express ();

// STATIC CONTENT for app from "public" directory //

app.use(express.static("public"));

// parse app/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true}));

// parse app/json

app.use(bodyParser.json());

// HANDLEBARS
var exphbs = require ("express-handlebars");

app.engine("handlebars", exphbs ({ defaultLayout:
main}));

app.set("view engine", "handlebars");

// Server routes and access

var routes = require ("./controllers/burgerController.js")

app.use(routes);

app.listen(PORT, function (){
    console.log("The app is now listening to localhost: " + PORT);
});

