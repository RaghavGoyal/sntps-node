var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "12345678",
  database: 'ExpressTraining'
});


con.connect(function(err){
  if(err) console.log(err);
  console.log("connected");

  var sql="INSERT INTO employee (id, first_name, last_name, email, gender) VALUES (1, 'raghav2', 'goyal' , 'dummy' , 'Male') ";

  con.query(sql, function(err, result){
    if(err) throw err;
    console.log("1 record inserted");
  })
})
// con.connect(function(err) {
//   if (err) console.log(err);
//   console.log("Connected!");
//   con.query("CREATE DATABASE test", function (err, result) {
//     if (err) console.log(err);
//     console.log("Database created");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


