var mysql = require('mysql');

var connection = mysql.createConnection({
  // host: "us-cdbr-iron-east-05.cleardb.net",
  host: "localhost",
  port: 3306,

  // Your username
  // user: "b34a0edf013ed7",
  user: "root",

  // Your password
  // password: "a9e5fd7b",
  // database: "heroku_5ff183dcc65dcaa"
  password: "2648769853",
  database: "burgers_db"
});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected!");
});

module.exports = connection;
