var db = require('mysql');

var conn = db.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_nodejs"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "DROP TABLE users";

  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Droped!");
  });
});