/* Global Imports */
import express from 'express';
import { dirname } from 'path';

const dirName = dirname(import.meta.filename);

const app = express();
const port = 3000;

app.get('/', function(req, res) {
  //res.send("Hello World");
  res.sendFile(dirName + "/index.html");
});

app.listen(3000, function() {
  console.log("Started");
});

