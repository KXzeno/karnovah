/* Project taught in CJS; refactored to ESM */
/* Global Imports */
import express from 'express';
import { dirname } from 'path';
import bodyParser from 'body-parser';

const dirName = dirname(import.meta.filename);

const app = express();
const port = 3000;

/*** Simple Calculator ***/
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
  //res.send("Hello World");
  res.sendFile(dirName + "/index.html");
  //console.log(req);
});

app.post('/', function(req, res){
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send(result.toString());
});

/*** BMI Calculator ***/
app.get('/bmicalculator', function(req, res){
  res.send(dirName + "/bmiCalculator.html");
});

app.post('/bmicalculator', function(req, res) {

});

app.listen(3000, function() {
  console.log("Started");
});


