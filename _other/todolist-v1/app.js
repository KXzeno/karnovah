import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';

const app = express();
const dirName = dirname(import.meta.filename);

app.get("/", function(req, res) {
  let today = new Date();
  if (today.getDay() === 6 || today.getDay() === 0 ) {
    res.write("Work optional");
  } else {
    res.sendFile (`${dirName}/index.html`);
  }
});



app.listen(3000, function() { 
  console.log("Port 3000 initialized...");
});
