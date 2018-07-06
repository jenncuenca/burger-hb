// MODELS CONNECTION
var express = require("express");
var router = express.Router();

// BURGER MODEL IMPORT TO USE DATABASE
var burger = require("../models/burger.js");

// CREATE ROUTES + SET HANDLEBARS LOGIC //

// GET index
router.get('/', function (req, res) 
{
  res.redirect('/index');
});

router.get('/index', function (req, res) 
{
  burger.selectAll(function(data) 
  {
    var hbsObject = { burgers: data };
    res.render('index', hbsObject);

  });
});

// CREATE New Burger
router.post('/burger/create', function (req, res) 
{
  burger.createOne(req.body.burger_name, function() 
  {
    res.redirect('/index');
  });
});

//DEVOUR Burger
router.post('/burger/eat/:id', function (req, res) 
{
  burger.updateOne(req.params.id, function() 
  {
    res.redirect('/index');
  });
});

  
  // Export routes for server.js to use.
  module.exports = router;
  