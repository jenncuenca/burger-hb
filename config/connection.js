// mySQL Dependency
var mysql = require("mysql");

// connection set up
var connection = mysql.createConnection({
    port:3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burger_db"
})

// create connection
connection.connect(function(err){
    if (err){
        console.error("error connectiong: " + err.stack);
        return;
    }

    console.log ("connected as id " + connection.threadId);
});

// export connection for ORM use
module.exports = connection;