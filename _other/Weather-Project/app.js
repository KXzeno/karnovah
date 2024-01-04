import express from 'express';
import https from 'https';

const app = express();

app.get("/", function(req, res){
  https.get
  res.send("Works");
});





app.listen(3000, function() {
  console.log("Running...");
});
