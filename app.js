var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const path = require('path');
// let man = require('./public/assets/man/man');
let output;


app.get('/info', (req,res) => {
  
})

app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors());

// app.post("/create", async (req, res) => {
//   const data = req.body;
//   await User.add({ data });
//   res.send({ msg: "User Added" });
//});
// app.use((req, res,next)=>{
//    res.status(404).send('<h1> Page not found </h1>');
// });



app.get('/index.html', function(req,res) {
  
  // res.status(200).send('<h1> Page not found </h1>');
  res.status(200).json({info: 'presentText'});
  console.log("Response got");
  // res.status(200).json((info: 'output'));
  res.sendFile( __dirname + "/public" + "/" + "index.html");
  
})

app.get('/assets/man/man.html', function(req,res) {
  console.log("Hi")
  // res.send({ msg: "User Added" });
  res.status(200).json({info: 'presentText'});
})

app.get('/get', (req, res) => {
  db.query('SELECT product_name from product_details', (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    console.log(fields);
    setOutput(result);
  })
  res.send('GET request to the homepage')
  
})

app.get('/a', (req, res) => {
  
  
})

app.post('/addfriend', async(req,res) => {
  const {name, behaviour} = req.body;
  const peopleRef = db.collection('people').doc('associates');
  const res2 = await peopleRef.set({
    [name] : behaviour
  })
  res.send(200).send(friends);
  console.log("Post request got");
}) 

app.get('/friends', async(req,res) => {
  
  res.send(200).send(friends);
  })

  //Brand Name
  //Brand Description
  //Price
  //Product Image

var server = app.listen(8081, function() {
  // var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at ",  port)
})




var mysql = require('mysql');
var express = require('express');
const { info } = require('console');
// const {db} = require('./firebase');


// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'e-commerce'
// })

// db.connect((err) => {
//   if(err) {
//     throw err;
//   }
//   console.log('MySql Connected...')

// })

// const app = express();

// app.get('/get', (req,res) =>{

  
  
// })
  
const setOutput = (rows) => {
    output = rows;
    console.log(output);
}
// app.listen('3000', () => {
//   console.log("Server Started on port 3000");
// })

module.exports = output;


