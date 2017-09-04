var connection = require('../config/connection.js');

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}



var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
    }
    cb(result);
  });
},

  insertOne: function(table, cols, vals, cb) {
    console.log(vals);
    var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += vals;
        queryString += ")";

        console.log(queryString);

        connection.query(queryString, cb, function(err, result) {
          if (err) {
            throw err;
          }
          console.log(result);
          // cb(result);
        });
      },

updateOne: function updateOne(table, attrib, condition, cb){
console.log(condition);
  var queryString = "UPDATE " + table;
  queryString += " SET ";
  queryString += "devoured = 1";
  queryString += " WHERE ";
  queryString += "id = " + parseInt(condition);
//
// var queryString = "UPDATE burgers SET devoured = 1 WHERE id = 2";


  console.log(queryString);
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
}
};

module.exports = orm;
