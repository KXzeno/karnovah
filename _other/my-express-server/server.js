import express from 'express';

const app = express();

app.get("/", function(req, res){
  res.send("Hello");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: kathekontelos@gmail.com");
});

app.get("/about", function(req, res){
  res.send("<h1>Aspiring Full-Stack Developer and Dark Fantasist with the objective to revolutionize structures through code and to instill necessary values through storytelling.</h1>")
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>1</li><li>2</li><li>3</li></ul>")
});

app.listen(3000, function(){
  console.log("Started");
});
