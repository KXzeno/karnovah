import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true,
}));





app.listen(3000, () => {
  console.log("Server running...");
})
