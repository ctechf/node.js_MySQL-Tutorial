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

  var sql = "INSERT INTO users (fname, lname, email, contact, note) VALUES ?";

  var values = [
    ['John', 'Peter', 'Peter@123apple.com', '', ''],
    ['Sheldon', 'Cooper', 'sheldonleecooper@yahoo.com', '125478541', 'Moonpi'],
    ['Amy', '', 'amy@domain.com', '', 'Sheldon'],
    ['James', 'Cole', 'jc@2041fe.com', '', '2014'],
    ['Andy', 'Newt', 'newt@gmail.com', '123 154-5545', ''],
    ['Penny', '', 'Penny@freewifi.com', '', 'Leonard'],
    ['admin', 'CtechF', 'admin@ctechf.com', '154 584-5478', 'technology']
  ];
  conn.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});