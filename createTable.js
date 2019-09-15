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
  
  var sql = "CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, fname VARCHAR(30) NOT NULL, lname VARCHAR(30), email VARCHAR(100) NOT NULL, contact VARCHAR(25), note VARCHAR(400))";
  
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created successfully");
  });
});