// incorporate express
const express = require("express");
// allow us to get the informations sent by post request
// by parsing the request into different form like text,json,urlencoded
const bodyParser = require("body-parser");

// refrer to express module
const app = express();
// we tell the server to use bodyParser to parse the http request
// extended : true => allows us to post nested objects; by using urlencoded we can get access to the form data

app.use(bodyParser.urlencoded({extended:true}));
// app.get: allow us to process get request
// app.post: allow us to process post request

// set up our home route : defines a root route
// __dirname : give us the file path of the current file
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html"); // that will send the content of our index.html file
});

// req.body : it's a object that store the information of the form {name: value,....}
app.post("/",function(req,res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("the result of the calculation is " + result );

});


// get an post for route /bmicalculator

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html"); // that will send the content of our index.html file
});

// req.body : it's a object that store the information of the form {name: value,....}
app.post("/bmicalculator",function(req,res){

  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var bmi = weight / (height * height);

  res.send("Your BMI is " + bmi );

});
// spin up the server : listen on a specific port any http requests that get sent to our server
app.listen(3000,function(){
  console.log("server is listening on port 3000");
});
