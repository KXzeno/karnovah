import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import 'dotenv/config';
import encrypt from 'mongoose-encryption';

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
  dbName: 'userDB',
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
    email: req.body.username,
    password: req.body.password,
  });

  try {
    await newUser.save();
    res.render("secrets");
  } catch (err) {
    console.error(err);
  }
});

app.post("/login", async (req, res) => {
  let [username, password, temp] = [req.body.username, req.body.password];

  await User.findOne({ email: username }).exec()
    .then(result => {
      try {
        // Syntactic redundancy, used as operator usage reference
        temp ??= !!(result.password === password);
        if(temp === true) { res.render("secrets"); }
      } catch (err) {
        console.error(err);
      }
    });
});


app.listen(3000, () => {
  console.log("Server running...");
});
