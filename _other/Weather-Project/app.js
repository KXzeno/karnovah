import express from 'express';
import https from 'https';

const app = express();

app.get("/", function(req, res){
  const url = "https://api.openweathermap.org/data/2.5/weather?lat=32.68&lon=-117.08&appid=68a923624c4e7817924b18ddd9c41ec6&units=imperial"
  https.get(url, function(response){
    console.log(response);
    console.log(response.statusCode);
    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      console.log(weatherData);
    });
  });
  res.send("Works");
});





app.listen(3000, function() {
  console.log("Running...");
});
