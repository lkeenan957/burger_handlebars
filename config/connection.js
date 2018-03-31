// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)

} else {
  connection = mysql.createConnection({
    port: 3306,
    host: " k3xio06abqa902qt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "qkq5ddh19c6v4nyw",
    password: " tsy7y8wfpqv290nw",
    database: "burgers_db"
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
