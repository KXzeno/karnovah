/* Project taught in CJS; refactored to ESM */
/* Global Imports */
import express from 'express';
import { dirname } from 'path';
import bodyParser from 'body-parser';

const dirName = dirname(import.meta.filename);

const app = express();
const port = 3000;

app.get('/', function(req, res) {
  //res.send("Hello World");
  res.sendFile(dirName + "/index.html");
});

app.post('/', function(req, res){
  res.send("Posted.");
});

app.listen(3000, function() {
  console.log("Started");
});

