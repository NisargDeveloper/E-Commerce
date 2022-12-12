// var mysql = require('mysql');
require(["mysql"],function(mysql){
  var con = mysql.createConnection({
    host: "localhost",
    user: "nisarg",
    password: "bay"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
  })
}); 


console.log('This connection file is running successfully')