import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { getDate } from './date.js';

const app = express();
const dirName = dirname(import.meta.filename);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = [];
const workItems= [];

app.get("/", function(req, res) {
  const { day, weekEnd } = getDate();

  res.render("list", {
    listTitle: day,
    weekEnd: weekEnd,
    newListItems: items,
  });
});

app.post("/", function(req, res) {
  const item = req.body.newItem;

  console.log(req.body.list);
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems,
  });
});

app.post("/work", function(req, res) {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() { 
  console.log("Port 3000 initialized...");
});
