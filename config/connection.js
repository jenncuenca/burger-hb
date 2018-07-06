// mySQL Dependency
var mysql = require("mysql");
var connection;

// mySQL connection set up
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "qwerty123",
        database: "burgers_db"
    });
}

// create connection
connection.connect(function(err){
    if (err){
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log ("connected as id " + connection.threadId);
});

// export connection for ORM use
module.exports = connection;