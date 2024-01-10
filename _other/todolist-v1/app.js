import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';

const app = express();
const dirName = dirname(import.meta.filename);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
let items = [];

app.get("/", function(req, res) {
  let today = new Date();
  let day = "";
  /*
  if (today.getDay() === 6 || today.getDay() === 0 ) {
    day = "Weekend";
    res.write("Work optional");
  } else {
    day = "Weekend";
  }
  */
  let weekEnd = (!(today.getDay() ^ 6) || !(today.getDay() ^ 0)) ? true : false;
  const options = { weekday: "long" };
  day = new Intl.DateTimeFormat("en-US", options).format(today);
  res.render("list", {
    day: day,
    weekEnd: weekEnd,
    newListItem: items,
  });
});

app.post("/", function(req, res) {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function() { 
  console.log("Port 3000 initialized...");
});
