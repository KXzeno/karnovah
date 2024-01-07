import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';
import { dirname } from 'path';
import 'dotenv/config';
import https from 'https';

const app = express();
const dirName = dirname(import.meta.filename);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(`${dirName}/signup.html`);
});

app.post("/", function(req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        }
      }
    ]
  };

  let jsonData = JSON.stringify(data);
  const url = `https://${process.env.server}.api.mailchimp.com/3.0/lists/${process.env.audience_id}`;
  console.log(url);
  const options = {
    method: "POST",
    auth: `kx1:${process.env.apiKey}`,
  }

  const request = https.request(url, options, function(response) {
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

app.listen(3000, function() {
  console.log("Started; Port 3000");
});
