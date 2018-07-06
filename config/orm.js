// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  //Store and retrieve data in the db.

  // select all data
  selectAll: function(callback) 
  {
      //mySQL query
      connection.query('SELECT * FROM burgers', function(err, result)
      {
          if (err) throw err;
          callback(result);
      });
  },

  // create
  createOne: function(burger_name, callback)
  {
      connection.query('INSERT INTO burgers SET ?', 
          {	burger_name: burger_name,
              devoured: false,
          }, function(err, result)
          {
              if (err) throw err;
              callback(result);
          });
              
  },

  // update
  updateOne: function(burgerID, callback)
  {
      connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}],
          function(err, result)
          {
              if (err) throw err;
              callback(result);
          });
  }
};

  // Export the orm object
  module.exports = orm;