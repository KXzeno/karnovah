import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import 'dotenv/config';
// import md5 from 'md5';
// import encrypt from 'mongoose-encryption';
// import bcrypt from 'bcrypt';
import session from 'express-session';
import passport from 'passport';
import passportLocalMongoose from 'passport-local-mongoose';

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(session({
    secret: "When gods have fallen.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

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

userSchema.plugin(passportLocalMongoose);

// userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"] });

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/secrets", (req, res) => {
    req.isAuthenticated() ? res.render("secrets") : res.redirect("/login");
    //  if (req.isAuthenticated()) {
    //    res.render("secrets");
    //  } else {
    //    res.redirect("/login");
    //  }
});

app.get("/logout", (req, res, next) => {
    req.logout(err => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});

app.post("/register", (req, res) => {
    // User.register({ username: req.body.username }, req.body.password),
    //     passport.authenticate("local", { failureRedirect: "/register", failureMessage: true }),
    //     (req, res) => {
    //         res.redirect("/secrets");
    //     };
    User.register({ username: req.body.username }, req.body.password, (err, user) => {
        err ? +((err) => {
            console.error(err);
            res.redirect("/register");
        })() : +(() => {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/secrets");
            });
        })();
    });
});

app.post("/login", async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    });

    req.login(user, (e) => {
        e ?  console.error(err) : +(() => { 
            passport.authenticate("local"); 
            res.redirect("/secrets"); 
        })();
    });
});


app.listen(3000, () => {
    console.log("Server running...");
});
