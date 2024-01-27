// Global imports
import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import ejs from 'ejs';
import bodyParser from 'body-parser';

const app = express();
// Set database connection
const { Schema } = mongoose;
const [DB_UID, DB_PASS] = [process.env.DB_AD_U, process.env.DB_AD_P];
const uri = `mongodb+srv://${DB_UID}:${DB_PASS}@kharner.frb2ipg.mongodb.net/`;
async function main() {
  await mongoose.connect(uri, {
    dbName: 'wikiDB',
  });

  app.set('view engine', 'ejs');
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(express.static("public"));

  // Create schemas and ODMs
  const articleSchema = mongoose.Schema({
    title: String,
    content: String,
  });

  const Article = mongoose.model('Article', articleSchema);

  // Start route chaining for articles
  app.route("/articles")
    .get((req, res) => {
      Article.find({}).exec()
        .then(result => {
          console.log(result);
        }).catch(err => {
          console.error(err);
        });
    })
    .post(async (req, res) => {
      const newArticle = new Article({
        title: req.body.title,
        content: req.body.content,
      });
      await newArticle.save(err => {
        !err ? res.send("Article posted successfully.")
          :
          res.send(err);
      });
    })
    .delete((req, res) => {
      Article.deleteMany({}).exec()
        .then(res.send("Deleted all articles."))
        .catch(err => res.send(err));
    });

  // Start route chaining for article slugs (params)
  app.route("/articles/:slug")
    .get((req, res) => {
      Article.findOne({ title: req.params.slug }).exec()
        .then(result => {
          res.send(result);
        }).catch(err => res.send(err));
    })
    .put((req, res) => {
      Article.replaceOne(
        { title: req.params.slug },
        { title: req.body.title, content: req.body.content }
      ).exec()
        .then(res.send("Article overwrite successful."))
        .catch(err => res.send(err));
    })
    .patch((req, res) => {
      Article.updateOne(
        { title: req.params.slug },
        { $set: req.body },
      ).exec()
        .then(res.send("Article update successful."))
        .catch(err => res.send(err));
    });




  app.listen(3000, () => {
    console.log("Server running...");
  });

}
main();
