var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "2648769853",
  database: "bamazon"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;