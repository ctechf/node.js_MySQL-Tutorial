var db = require('mysql');

var conn = db.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  conn.query("CREATE DATABASE db_nodejs", function (err, result) {
    if (err) throw err;
    console.log("Database created successfully");
  });
});