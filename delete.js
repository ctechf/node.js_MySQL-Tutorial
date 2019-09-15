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

  var sql = "DELETE FROM users WHERE id = 2";

  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " Record(s) Deleted");
  });
});