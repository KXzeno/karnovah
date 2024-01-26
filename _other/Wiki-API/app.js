import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import ejs from 'ejs';
import bodyParser from 'body-parser';

const { Schema } = mongoose;
const [DB_UID, DB_PASS] = [process.env.DB_AD_U, process.env.DB_AD_P];
const uri = `mongodb+srv://${DB_UID}:${DB_PASS}@kharner.frb2ipg.mongodb.net/`;
async function main() {
  await mongoose.connect(uri, {
    dbName: 'wikiDB',
  });
  const app = express();

  app.set('view engine', 'ejs');
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(express.static("public"));

  const articleSchema = mongoose.Schema({
    title: String,
    content: String,
  });

  const Article = mongoose.model('article', articleSchema)

  app.listen(3000, () => {
    console.log("Server started...");
  });
  
}
main();
