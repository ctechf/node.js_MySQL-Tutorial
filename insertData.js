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
  
  var sql = "INSERT INTO users (fname, lname, email, contact, note) VALUES ('Tony', 'Norman', 'tony@domain.com', '201 123-1234', 'Welcome')";

  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Data inserted!, ID: " + result.insertId); //Data inserted!, ID: 1
  });
});