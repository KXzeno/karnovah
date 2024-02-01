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
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import findOrCreate from 'mongoose-findorcreate';

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
    googleId: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate); // Cannot chain

// userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"] });

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    }).catch(e => {
        done(e, null);
    });
}); 

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/auth/google", 
    passport.authenticate("google", { scope: ["profile"] })
);

app.get("/auth/google/secrets",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => res.redirect("/secrets")); // Successful auth, redirect home.

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

app.get("/submit", (req, res) => {
    req.isAuthenticated() ? res.render("submit") : res.redirect("/login");
});

app.post("/submit", (req, res) => {
    let sentSecret = req.body.secret;
    User.findById(req.user.id)
        .then(async result => {
            result.secret = sentSecret;
            try {
                await result.save();
                res.redirect("/secrets");
            } catch(e) {
                console.error(e);
            }
        });
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

app.post("/login", (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    });

    req.login(user, (e) => {
        // if (e) {
        //     console.log(e)
        // } else {
        //     passport.authenticate("local")(req, res, () => {
        //         res.redirect("/secrets");
        //     });
        // }
        e ? console.error(e) : +(async () => { 
            await passport.authenticate("local")(req, res, () => {
                res.redirect("/secrets"); 
            });
        })();
    });
});


app.listen(3000, () => {
    console.log("Server running...");
});
