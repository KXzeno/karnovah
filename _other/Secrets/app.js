import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true,
}));

const DB_ID = process.env.DB_AD_U;
const DB_PA = process.env.DB_AD_P;
const uri = `mongodb+srv://${DB_ID}:${DB_PA}@kharner.frb2ipg.mongodb.net`
mongoose.connect(uri, {
  dbName: 'blogDB',
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const newUser = new User({
    email: req.body.username;
    password: req.body.password;
  });
  newUser.save(err => {
    err ? console.error(err) : res.render("secrets");
  });

});


app.listen(3000, () => {
  console.log("Server running...");
});
