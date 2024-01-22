import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { getDate } from './date.js';
import mongoose from 'mongoose';

const app = express();
const dirName = dirname(import.meta.filename);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

async function main() {
  mongoose.connect("mongodb://localhost:27017/todolistDB")

  const itemsSchema = new mongoose.Schema({
    name : String,
  });

  const Item = mongoose.model("Item", itemsSchema);

  const item1 = new Item({
    name: "One",
  });

  const item2 = new Item({
    name: "Two",
  });

  const item3 = new Item({
    name: "Three",
  });

  const defaultItems = [item1, item2, item3];
  /*
  await Item.insertMany(defaultItems)
    .then(function() {
      console.log("Successful data change");
    }).catch(function(err) {
      console.log("Data change failed");
    });
    */
  try {
    await Item.insertMany(defaultItems);
    console.log("Successful data change");
  } catch (err) {
    console.log("Data change failed");
  }

  app.get("/", async function(req, res) {
    // const { day, weekEnd } = getDate();
    try {
      const foundItems = await Item.find({});
      foundItems === 0 
        ? (function() {
          try {
            Item.insertMany(defaultItems);
            console.log("Data change successful");
          } catch (err) {
            console.log ("Data change failed");
          }
        })
        : console.log("Data did not update");
      console.log(foundItems);
      res.render("list", {
        listTitle: "Today",
        // weekEnd: weekEnd,
        newListItems: foundItems,
      });
      console.log(newListItems);
    }
    catch (err) {
      console.log("Failed to render items");
    }
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
}
main();
