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

  var sql = "ALTER TABLE users ADD COLUMN age INT(5)";

  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});