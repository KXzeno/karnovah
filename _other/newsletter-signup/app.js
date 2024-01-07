import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';
import { dirname } from 'path';

const app = express();
const dirName = dirname(import.meta.filename);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(`${dirName}/signup.html`);
});

app.post("/", function(req, res) {
  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let email = req.body.email;

  console.log(firstName, lastName, email);
});

app.listen(3000, function() {
  console.log("Started; Port 3000");
});
