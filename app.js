// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
var initializeApp = require('firebase/app')
var getAnalytics = require('firebase/analytics')
var express = require('express');

var bodyParser = require('body-parser');
var app = express();
const path = require('path');



// const express = require('express');
// const bodyParser = require('body-parser');
// const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res,next)=>{
   res.status(404).send('<h1> Page not found </h1>');
});
app.get('/index.html', function(req,res) {
  res.sendFile( __dirname + "/public" + "/" + "index.html");
})

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at ", host, port)
})


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALJ98AfwD6gdd4gYszDw6rvAJa8DjhHyk",
  authDomain: "e-commerce-final-project-25540.firebaseapp.com",
  projectId: "e-commerce-final-project-25540",
  storageBucket: "e-commerce-final-project-25540.appspot.com",
  messagingSenderId: "25524929636",
  appId: "1:25524929636:web:cbd61edae56fb228db8b71",
  measurementId: "G-1BSQMBSMT6"
};

// Initialize Firebase
// const firebaseapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseapp);

// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig2 = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://e-commerce-final-project-25540-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const firebaseapp2 = initializeApp(firebaseConfig2);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseapp2);
console.log(database);