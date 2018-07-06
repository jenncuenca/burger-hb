// IMPORT ORM
var orm = require("../config/orm.js");

var burger = 
{

  selectAll: function(callback)
  {
    orm.selectAll(function(res)
    {
      callback(res);
    });
  },

  createOne: function(burger_name, callback)
  {
    orm.createOne(burger_name, function(res)
    {
      callback(res);
    });
  },

  updateOne: function(burger_id, callback)
  {
    orm.updateOne(burger_id, function(res)
    {
      callback(res);
    });
  }

};
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;